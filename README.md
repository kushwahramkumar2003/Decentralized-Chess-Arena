# Chain Mate

![Chain Mate Logo](./apps/web/public/logo.png)

**Chain Mate** is a decentralized chess platform built on the Solana blockchain, reimagining competitive chess with Web3 technology. By integrating DeFi, NFTs, and real-time gameplay, Chain Mate enables players to stake SOL or USDC, compete anonymously, and earn rewards in a fully decentralized environment. With a sleek, Solana-inspired UI featuring teal and purple gradients, glassmorphism, and glowing orbs, Chain Mate offers a futuristic gaming experience that bridges traditional chess with blockchain innovation.

## What is Chain Mate?

Chain Mate is a decentralized chess arena where players can engage in strategic battles, stake cryptocurrency (SOL or USDC), and collect exclusive NFTs as rewards. Built on Solana for its high-speed and low-cost transactions, the platform allows players to connect their wallets (e.g., Phantom, Solflare) and participate anonymously without requiring personal information. The core vision is to create a trustless, transparent, and rewarding chess ecosystem where skill meets financial incentives, powered by Solana smart contracts (programs) and a WebSocket-driven game engine.

## What Problems Does Chain Mate Solve?

Traditional online chess platforms often lack financial incentives, transparency in matchmaking, and ownership of in-game assets. Chain Mate addresses these issues by:

- **Decentralized Staking**: Players stake SOL or USDC in a Solana program (smart contract) before a match, ensuring both parties have skin in the game. The winner claims the staked amount, minus a small platform fee, with all transactions recorded on-chain for transparency.
- **Trustless Gameplay**: The game engine, the only centralized component, facilitates real-time communication between players using WebSockets, ensuring smooth gameplay while storing match outcomes in a database for analytics and leaderboards.
- **Anonymity and Accessibility**: Players connect via Solana wallets, requiring no personal data, making the platform fully anonymous and accessible globally.
- **Player Ownership**: Exclusive NFTs are awarded for achievements (e.g., winning streaks, beta participation), giving players true ownership of digital collectibles on Solana.
- **Fair Rewards**: DeFi integration allows players to earn SOL/USDC based on skill, with transparent payout logic enforced by Solana programs.

## How It Works

Chain Mate operates as a hybrid system combining decentralized finance and real-time gameplay:

1. **Wallet Connection**: Players connect a Solana wallet (e.g., Phantom) to join the platform anonymously.
2. **Staking**: Before a match, both players stake an agreed amount of SOL or USDC into a Solana program. The program locks the funds in a trustless escrow until the match concludes.
3. **Real-Time Gameplay**: The game engine, powered by WebSockets, handles real-time chess moves between players, ensuring low latency and a seamless experience. It communicates match state (e.g., moves, checkmate) to both parties and the database.
4. **Match Resolution**: Upon match completion, the game engine reports the outcome to the Solana program, which releases the staked funds to the winner (or refunds in case of a draw). Match data (e.g., winner, moves) is stored in a PostgreSQL database via Prisma for leaderboards and analytics.
5. **NFT Rewards**: Players earn NFTs for milestones (e.g., first win, beta participation), minted on Solana and transferable to marketplaces like Magic Eden.
6. **Waitlist and Beta**: Early adopters join the waitlist via email (or Twitter/X OAuth in future iterations), gaining beta access, exclusive NFTs, and founder status.

## Technical Architecture

Chain Mate leverages a robust stack to deliver a decentralized, scalable, and user-friendly experience:

- **Frontend**: Built with Next.js 15, Tailwind CSS v4, ShadCN UI, and Framer Motion for a modern, Solana-inspired UI with teal-purple gradients, glassmorphism, and animations.
- **Backend**: Next.js API routes and server actions handle waitlist submissions and database interactions, with Prisma as the ORM for PostgreSQL.
- **Solana Programs**: Rust-based smart contracts manage staking, escrow, and payouts for SOL/USDC. The programs ensure trustless execution of match outcomes.
- **Game Engine**: A Node.js-based game engine uses WebSockets (via Socket.IO) for real-time chess move synchronization between players. It interfaces with the Solana program for match resolution and stores game data in the database.
- **Database**: PostgreSQL stores waitlist users, match history, and player stats, accessed via Prisma for type-safe queries.
- **Web3 Integration**: Solana Web3.js and wallet adapters (e.g., @solana/wallet-adapter-react) enable wallet connections and on-chain interactions.
- **Authentication**: Anonymous wallet-based access, with optional Twitter/X OAuth for waitlist (planned).

## Key Features

- **Decentralized Staking**: Stake SOL/USDC in a Solana program for competitive matches, with transparent payouts.
- **Real-Time Chess**: WebSocket-driven game engine ensures smooth, low-latency gameplay.
- **NFT Collectibles**: Earn exclusive NFTs for achievements, tradeable on Solana marketplaces.
- **Anonymous Access**: Connect with a Solana wallet for fully anonymous participation.
- **Modern UI**: Solana-inspired design with teal-purple gradients, glassmorphism, and glowing orbs, optimized for web and mobile.
- **Waitlist Benefits**: Early adopters receive beta access, NFTs, and founder status.

## Roadmap

- [x] Launch waitlist and collect early adopters
- [ ] Deploy Solana programs for staking and payouts
- [ ] Implement WebSocket-based game engine
- [ ] Mint initial NFT collection for beta testers
- [ ] Public beta release
- [ ] Integrate Twitter/X OAuth for waitlist
- [ ] Add leaderboards and match history

---

_Built with ❤️ on Solana_
