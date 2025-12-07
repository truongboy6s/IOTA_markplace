// Copyright (c) Mysten Labs, Inc.
// Modifications Copyright (c) 2024 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

/// Simple Marketplace Contract
/// Features:
/// - Users can add items (name + price)
/// - Users can buy items with token transfer
/// - Transaction history tracking
module marketplace::contract {
  use std::string::String;
  use iota::coin::{Self, Coin};
  use iota::iota::IOTA;
  use iota::transfer;
  use iota::object;
  use iota::tx_context;
  use iota::event;

  // Error codes
  const ENotEnoughBalance: u64 = 1;
  const EItemNotFound: u64 = 2;
  const EItemAlreadySold: u64 = 3;

  /// Item data structure (copyable)
  public struct ItemData has store, copy, drop {
    item_id: u64,
    name: String,
    price: u64,
    seller: address,
    sold: bool,
  }

  /// Transaction record
  public struct Transaction has store {
    item_id: u64,
    item_name: String,
    price: u64,
    seller: address,
    buyer: address,
    timestamp: u64,
  }

  /// Marketplace shared object
  public struct Marketplace has key {
    id: object::UID,
    owner: address,
    items: vector<ItemData>,
    transactions: vector<Transaction>,
    next_item_id: u64,
  }

  /// Events
  public struct ItemAdded has copy, drop {
    item_id: u64,
    name: String,
    price: u64,
    seller: address,
  }

  public struct ItemPurchased has copy, drop {
    item_id: u64,
    name: String,
    price: u64,
    seller: address,
    buyer: address,
  }

  /// Create and share a Marketplace object
  public fun create(ctx: &mut tx_context::TxContext) {
    transfer::share_object(Marketplace {
      id: object::new(ctx),
      owner: tx_context::sender(ctx),
      items: vector::empty<ItemData>(),
      transactions: vector::empty<Transaction>(),
      next_item_id: 0,
    })
  }

  /// Add a new item to the marketplace
  public fun add_item(
    marketplace: &mut Marketplace,
    name: String,
    price: u64,
    ctx: &mut tx_context::TxContext
  ) {
    let item_id = marketplace.next_item_id;
    
    let item_data = ItemData {
      item_id: item_id,
      name: name,
      price: price,
      seller: tx_context::sender(ctx),
      sold: false,
    };

    let _item_id = item_id;
    
    // Emit event
    event::emit(ItemAdded {
      item_id: item_id,
      name: item_data.name,
      price: item_data.price,
      seller: item_data.seller,
    });

    vector::push_back(&mut marketplace.items, item_data);
    marketplace.next_item_id = marketplace.next_item_id + 1;
  }

  /// Buy an item from the marketplace
  public fun buy_item(
    marketplace: &mut Marketplace,
    item_index: u64,
    mut payment: Coin<IOTA>,
    ctx: &mut tx_context::TxContext
  ): Coin<IOTA> {
    assert!(item_index < vector::length(&marketplace.items), EItemNotFound);
    
    let item = vector::borrow_mut(&mut marketplace.items, item_index);
    assert!(!item.sold, EItemAlreadySold);
    assert!(coin::value(&payment) >= item.price, ENotEnoughBalance);

    // Mark item as sold
    item.sold = true;
    let buyer = tx_context::sender(ctx);

    // Transfer payment to seller
    let seller_payment = coin::split(&mut payment, item.price, ctx);
    transfer::public_transfer(seller_payment, item.seller);
    
    // Record transaction
    let transaction = Transaction {
      item_id: item.item_id,
      item_name: item.name,
      price: item.price,
      seller: item.seller,
      buyer: buyer,
      timestamp: tx_context::epoch_timestamp_ms(ctx),
    };

    vector::push_back(&mut marketplace.transactions, transaction);

    // Emit event
    event::emit(ItemPurchased {
      item_id: item.item_id,
      name: item.name,
      price: item.price,
      seller: item.seller,
      buyer: buyer,
    });

    // Return remaining coins to buyer
    payment
  }

  /// Get all available items (not sold)
  public fun get_available_items(marketplace: &Marketplace): vector<ItemData> {
    let mut available_items = vector::empty<ItemData>();
    let items = &marketplace.items;
    let len = vector::length(items);
    let mut i = 0;
    
    while (i < len) {
      let item = vector::borrow(items, i);
      if (!item.sold) {
        vector::push_back(&mut available_items, *item);
      };
      i = i + 1;
    };
    
    available_items
  }

  /// Get transaction history
  public fun get_transaction_history(marketplace: &Marketplace): &vector<Transaction> {
    &marketplace.transactions
  }

  /// Get item details
  public fun get_item_name(item: &ItemData): String { item.name }
  public fun get_item_price(item: &ItemData): u64 { item.price }
  public fun get_item_seller(item: &ItemData): address { item.seller }
  public fun is_item_sold(item: &ItemData): bool { item.sold }
}

