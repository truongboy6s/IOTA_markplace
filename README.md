# IOTA Marketplace dApp

A comprehensive decentralized marketplace built on the IOTA blockchain using Move smart contracts and Next.js. This application allows users to create, buy, and sell digital items in a secure and decentralized environment.

## 🌟 Overview

This marketplace dApp demonstrates the power of IOTA's blockchain technology by providing:
- Secure wallet integration
- Decentralized item trading
- Smart contract-powered transactions
- Real-time transaction history
- Modern, responsive user interface

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- IOTA Wallet (browser extension)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd marketplace

# Install dependencies
npm install --legacy-peer-deps

# Deploy your smart contract
npm run iota-deploy

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 📚 Documentation

For detailed setup and deployment instructions, see **[INSTRUCTION_GUIDE.md](./INSTRUCTION_GUIDE.md)**

## 🎯 Features

### Core Functionality
- ✅ **Wallet Integration**: Connect with IOTA wallets using dApp Kit
- ✅ **Item Management**: Create, list, and manage marketplace items
- ✅ **Secure Transactions**: Buy and sell items using Move smart contracts
- ✅ **Transaction History**: Track all marketplace activities
- ✅ **Real-time Updates**: Live updates for item availability and transactions

### Technical Features
- ✅ **Move Smart Contracts**: Secure, efficient blockchain operations
- ✅ **TypeScript Support**: Full type safety throughout the application
- ✅ **Modern UI**: Built with Radix UI components
- ✅ **Responsive Design**: Mobile-friendly interface
- ✅ **Error Handling**: Comprehensive error management and user feedback
- ✅ **Loading States**: Smooth user experience with loading indicators
- ✅ **Automated Deployment**: Streamlined contract deployment process

## 📁 Project Structure

```
marketplace/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── AddItemForm.tsx    # Form for adding new items
│   ├── ItemList.tsx       # Display list of marketplace items
│   ├── MarketplaceApp.tsx # Main marketplace component
│   ├── Provider.tsx       # App providers (wallet, etc.)
│   ├── TransactionHistory.tsx # Transaction history component
│   └── Wallet-connect.tsx # Wallet connection component
├── contract/              # Move smart contracts
│   └── marketplace/       # Marketplace contract
│       ├── Move.toml      # Contract configuration
│       ├── sources/       # Contract source code
│       └── build/         # Compiled contract artifacts
├── hooks/                 # Custom React hooks
│   └── useMarketplace.ts  # Marketplace-specific hooks
├── lib/                   # Utility libraries and configuration
│   └── config.ts          # App configuration
├── scripts/               # Deployment and utility scripts
│   ├── iota-deploy-wrapper.js
│   └── iota-generate-prompt-wrapper.js
└── public/               # Static assets
```

## 🔧 Smart Contract

The marketplace is powered by a Move smart contract that handles:

- **Item Creation**: Users can create new items for sale
- **Purchase Transactions**: Secure buying and selling of items
- **Ownership Transfer**: Automatic transfer of item ownership
- **Payment Processing**: Secure handling of IOTA token transfers
- **Event Emission**: Real-time updates for UI components

### Contract Functions

- `create_item(name, description, price)` - Create a new marketplace item
- `purchase_item(item_id)` - Buy an existing item
- `get_items()` - Retrieve all available items
- `get_user_items(user_address)` - Get items owned by a specific user

## 🛠️ Development

### Environment Setup

1. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Configure IOTA Network**
   - Update `lib/config.ts` with appropriate network settings
   - Ensure wallet is configured for the correct network

3. **Deploy Smart Contract**
   ```bash
   npm run iota-deploy
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run iota-deploy` - Deploy smart contracts to IOTA network
- `npm run lint` - Run ESLint for code quality

### Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run contract tests
npm run test:contract
```

## 🔗 API Integration

The dApp integrates with:

- **IOTA dApp Kit**: For wallet connectivity and blockchain interactions
- **Move Runtime**: For smart contract execution
- **IOTA Network**: For transaction processing and data storage

## 🌐 Deployment

### Development Deployment

1. Deploy to development network:
   ```bash
   npm run iota-deploy -- --network devnet
   ```

2. Update contract addresses in configuration

3. Start development server:
   ```bash
   npm run dev
   ```

### Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to production network:
   ```bash
   npm run iota-deploy -- --network mainnet
   ```

3. Deploy to hosting platform (Vercel, Netlify, etc.)

## 🔐 Security

- Smart contracts are audited and tested
- All transactions require user wallet approval
- No private keys are stored in the application
- Secure handling of user data and transactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📚 Learn More

### IOTA Resources
- [IOTA Documentation](https://wiki.iota.org/)
- [IOTA dApp Kit](https://github.com/iotaledger/dapp-kit)
- [Move Programming Language](https://move-language.github.io/move/)

### Development Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Radix UI](https://www.radix-ui.com/)

## 📞 Support

- **Issues**: Report bugs and request features via GitHub Issues
- **Discussions**: Join community discussions
- **Documentation**: Check INSTRUCTION_GUIDE.md for detailed setup

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- IOTA Foundation for blockchain infrastructure
- Move language team for smart contract capabilities
- Next.js team for the amazing framework
- Open source community for various tools and libraries
