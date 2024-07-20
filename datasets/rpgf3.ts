export interface Application {
  contributionDescription: string;
  impactDescription: string;
  displayName: string;
  pwCategory: typeof allCategories[number];
}

export const allCategories = [
  "DAOs, ReFi, and DAO Tooling",
  "Blockchain News & Media",
  "Digital Identity & Social Privacy Innovations",
  "Grants, Capital Allocation & Onboarding",
  "Explorers, Security & Node Deployment Tools",
  "Exchanges, DEX, Trading & Liquidity",
  "Cross-Chain Interoperability",
  "Blockchain Developer Hub",
  "NFTs, POAPs & Collectibles",
  "Data Analytics & Insights",
  "DeFi, Decentralized Finance",
  "Gaming & Entertainment",
  "User Experience & Adoption",
  "Content Creation & Media",
  "International & Multilingual Support",
  "Security & Cross-Chain Solutions",
  "Development & Infrastructure",
  "Web3 Education - Skill & Community Development",
] as const;

export const data: Application[] = [
  {
    contributionDescription:
      "The go-ethereum team develops the software which the OP Stack is built on, contributes to Ethereum upgrades which benefit the OP Stack, and work with the Optimism team on occasion to upstream changes to the core code base.\n\nAlthough we are not the most active Optimism contributors day-to-day, we believe that we play a fundamental role in the OP Stack.",
    displayName: "go-ethereum",
    impactDescription:
      "Since the OP Stack is built on top of go-ethereum, every decision we make upstream affect the efficiency, security, and resilience of Optimism downstream. This is true in more ways than just the core protocol. \n\nOur team also develops and maintains the JSON-RPC interface used by many developers to interact with the OP Stack. Through this, it is fair to say that we have a large impact on the developer ecosystem.\n\nAnd finally, our work on the Ethereum protocol itself and future network upgrades has and will substantially impact end users of Optimism and the adoption of the OP Stack.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "SEED Latam ventured into governance on the Optimism forum, recognizing the challenges of engaging $OP holders and users. Over 16 months, we onboarded +150 Latin Americans into Optimistic Collective discussions, addressing language barriers and information asymmetry. We developed an internal meta-governance through an experimental process.\n\nOur contribution is our work in the forum and the documentation of this pilot project. The backbone consists of 15 community governance calls with 514 attendees who voted on 233 financial, organizational, and operational decisions.\n\nBeyond this, we promoted governance topics at online and IRL events, notably #GovernanceDay organized by SEED Latam (Buenos Aires, 2023), attracting 200 attendees with 3 talks on Public Goods and Optimism Governance.",
    displayName: "SEED Latam",
    impactDescription:
      "We believe that community delegation positively influenced Optimism's forum, both in terms of quantity and quality.\n\nIn Latin America, we were pioneers in promoting governance topics in our region, even inspiring the creation of the first Brazilian Optimism community (https://x.com/OptimismPT/status/1703054570656760315).\n\nAs SEED Latam, we've made significant strides in the Optimism ecosystem, creating a delegation, forming a new community, changing our name, and expanding our team.\n\nThe most notable impact has been our collective governance experience, conducted in real-time, without becoming a DAO. We are committed to actively developing mechanisms to combat apathy and facilitate the democratization of information and decision-making within the Optimistic Collective.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Builder DAO is seeking retroactive funding for the work completed in mid-August 2023 to bring Builder Protocol —our Nounish DAO-launch protocol—onto the Optimism Network (“OP Mainnet”) and other L2 rollup networks built on the OP Stack (e.g. Base and Zora Network). We believe that Builder technology being compatible with all networks built on the OP stack allows for greater proliferation to the OP network.\n\nLeveraging the enhanced transaction speed and cost-effectiveness of OP Mainnet and the OP Stack within Builder, further empowers creators and innovators to deploy and run their own DAOs. ",
    displayName: "Builder Protocol",
    impactDescription:
      "Since Builder Protocol launched on Optimism in mid-Aug 2023, 13 DAOs have launched using the protocol on OP. \n\nAll DAOs launched on Nouns.Build may be seen by selecting the chain from the drop down button on the right at the following link: https://nouns.build/explore\n\nThe creation of DAOs via Builder on OP brings users that are familiar with and engaged in collective governance across the web3 ecosystem. Additionally, as many engaged in the DAO space are technical founders or contributors this engages those already part of the developer ecosystem to interact and build on the OP chain.\n\nThe ease of use of Builder Protocol to launch DAOs on OP greatly enhances the end user experience which helps to create a effortless pathway to seamless adoption bringing new users to the collective.\n \n",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      'At inbest we are a bridge between the cutting edge blockchain technologies and the end users who do not understand it, sometime is hard to find information other than the extensive documentation that gets to technical for most users.\n\nOur role is to find this information, digest it, and then feed it to the audience on a specific manner that tends to be easier to understand. \n\nIn spanish is even more dificult to find objective and well created content that explains this technologies and how they work so that the regular users gain more interest!\n\nthis will greatly impact the growth and adoption of the SuperChain! \n\nif you type "la super cadena op" you will see a lot of "airdrop" videos, but only one actually explaining the technology and talking about the op stack in spanish.',
    displayName: "Inbest Program",
    impactDescription:
      "the impact Inbest Program has generated at the time, might not be the numbers we want, but we are still growing, we have been providing the spanish speaking audience with information about optimism and the technology behind the op stack, the benefit of the modularity, the problems it solve and how to get involved.\n\nnot only for user but also for developers who want information on this topics like the op stack and the benefits of developing with this technology, like using the op stack to create a rollup that will run as the execution layer and how thanks to modularity we can commbine that with data availability solutions and much more\n\nif granted any amount of tokens, everything will go to the quality and reach of our videos, in order to accomplish our goal of helping mass adoption!",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "The Optimist has been a significant source of information that benefits both Projects & Users of the Optimism Community. \n\nThrough a biweekly newsletter released in 12 (now 13) different languages totalizing 90 articles covering Optimism Governance, Defi Project Research, technical information, farming strategy and crypto market review + a weekly podcast where 40+ projects have been invited on stage, The Optimist has reached an amazing milestone with the # of Subscribers >10,000\n\nThe Optimist is a team work crafted by 20 persons (designer, writers, translators) where most of them are coming from the Optimism community (Ambassador, Nerd, Offcial translators, Founder of Optimism country acccount on X).\n\nToday The Optimist applies to RPGF3 & receive grant based on our Impact. ",
    displayName: "The Opimist ",
    impactDescription:
      "Since January 2023, The Optimist (previously The Optimistic Series) has maintaines a bi-weekly newsletter & a weekly podcast cadence with Optimism Projects.\nWhat makes The Optimist unique?\n1- No media solely covers the Optimism Superchain\n2- The newsletter addresses:\nOptimism Updates: Governance, tech advancements\nProject Research: A comprehensive summary, often backed by our user experience and data analysis.\nOnchain Analytics: Deep dives into onchain metrics\nCrypto Market Review: No investment calls here. We offer tools and insights to guide crypto investment\nFarming Strategy: Tutorials highlighting potential yield opportunities\nPodcast Access: Also available as YouTube videos (with Eng sub. ) & written notes  \n3- Available in 13 languages\n4- 20-team members empowering OP collective",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "Namespace is a subname management platform that brings customized solutions for ENS name owners (DAOs, collections, communities, individuals, etc.) and offers features that customize the subname managing and selling experience. \n\nOur platform has started expanding to the Optimism network, aiming to leverage its low-cost environment to mint ENS subnames effectively and store minting preferences on the OP chain by incorporating Chainlink's CCIP, with an option for klaster.io CCIP, to ensure a seamless experience.\n",
    displayName: "Namespace",
    impactDescription:
      "Subname Customization:\nWe've provided the Ethereum ecosystem with a structured naming system, offering 54 unique listed names at an average listing price of 0.16 ETH.\n\nEconomic Impact:\nOur platform has facilitated the minting of 178 subnames, generating a total of 23.10 ETH. This not only adds economic value but also utility to the ethereum ecosystem.\n\nUser Engagement:\nThe average spend per wallet for minting is 0.075 ETH, and the average earning is 0.14 ETH, promoting both user engagement and economic activity within the community.\n",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Hats is the onchain roles protocol, providing programmable, revocable, and legible roles for decentralized work. Hats empowers groups to get things done by delegating responsibilities to the right contributors, giving them the hard and soft authorities they need to do their work, and installing the automated granting and revocation of permissions and real-time accountability mechanisms to ensure people follow through.",
    displayName: "Hats Protocol",
    impactDescription:
      "Hats Protocol has been deployed to OP Mainnet, with 29 Hats trees deployed to OP Mainnet as of October 13, 2023, providing Optimism-based communities with core infrastructure for flexibly creating and managing their roles and permissions while embedding automation throughout their organization to unlock the power of decentralized work.\n\nHats protoDAO runs on the OP Mainnet, engaging over 100 contributors across the Hats ecosystem and bringing users into the Optimism ecosystem. Hats protoDAO is a DAOaus Moloch v3 contract deployed to Optimism.\n\nWe have recently developed the Hats Modules Stack and deployed it to OP Mainnet, giving Optimism builders the power to create programmable roles that users can bring with them across the internet.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "The zengoDAO contracts enable the addition of a decentralized budget for cities, empowering citizens to participate in urban governance with proposals to address community needs in public spaces.\n\nModerators allocate the decentralized budget through an iterative verification process with local, regional, and national government instances. Then, they vote to distribute the funds among the verified submissions with a plural voting round.\n\nZengo results from R&D around urban governance and retroactive funding carried out by zenbit.eth. This process started with the Cities Protocol in 2021 followed by CiudadesDAO in 2022. In the same year, We started to test Optimism, deploying RegensDAO, and Eneagon, and now, in 2023, we are integrating these solutions with Zengo in the OP Goerli testnet.",
    displayName: "Zengo: Decentralized Budget",
    impactDescription:
      '- 35 citizens participated in Ciudades DAO public test\n- 6 POAPs from Zengo private test 1\n- 12 Modeators POAPs from Zengo private test 2\n- 4 Citizen POAPS from Zengo private test 2\n- We published one article in the "Transparent Mexico" magazine about the decentralized budget in Queretaro.\n- Special Mention for Ciudades DAO in The Innovation in Transparency Contest 2022\n- Optimism mentioned during the Zengo presentation at the Innovation in Transparency Contest 2023',
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "We deployed Pods natively on Optimism in late September. \n\nSince then, we’ve released 12+ episodes onchain across multiple creators during our private beta, including:\n\nOP Radio\nInvest in Music\nSeed Club\n\nThese episodes have culminated nearly 700 mints across 250 unique collector since our release ~1 month ago .  ",
    displayName: "Pods",
    impactDescription:
      "We’re the only platform focused solely on podcasts, and deployed natively on Optimism. \n\nIn addition to the existing episodes, we have committed dozens of creators in the past few months to releasing episodes on the platform, including Bankless, The Defiant, Overpriced Jpegs, Green Pill, Alfalfa, Rehash, and more. \n\nGiven the novelty of the platform, Pods is targeting and bringing in an entirely new audience the ecosystem -- notably with strong distribution across major crypto podcasts. \n",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "Many talented people don’t trust that their contributions will be equitably rewarded in web3. So they contribute less value, or don’t contribute at all, because their talents are more dependably incentivized elsewhere. \n\nFor 'Thank Optimism', ThriveCoin built trust-less, open, incentive infrastructure that makes it possible to reward contributors proportionate to the value they create. \n\nOP Ambassadors used our tech to create content that helps our Optimism community better understand the value of rPGF grants. Quality content can’t be auto-validated via traditional quests, so it required custom human validations capability to function. \n\nWe far exceeded all impact expectations - attracting significantly more Ambassadors, more quality content, and more engagement than expected.",
    displayName: "Thank Optimism | by ThriveCoin",
    impactDescription:
      "ThriveCoin’s trust-less, open, human validation infrastructure impacted the Optimism community and the broader web3 environment. \n\nFor Optimism, we helped grow Ambassador contributions and pipeline, create artifacts documenting the impact of rPGF grants, and market that impact via Medium, Mirror, Twitter, and more. We far exceeded all milestones: \n\n- 1.703 discrete marketing content (429% above critical milestone) \n- 638 discrete research artifacts (1,276% above critical milestone)\n- 309 contributors (412% above critical milestone)\n- 1.6m+ total views of approved content\n- 5,000+ pieces of total generated content\n\nFor web3, our infrastructure opens the door for a world of contributors who can trust that their contributions will now be equitably rewarded in decentralized environments. ",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "From core protocol development to DevOps tools, Test in Prod builds things that matter to OP Stack.\n—\n\nOP-Erigon: We built OP-Erigon, the first alternative execution client to OP Stack built with the Erigon client. We maintain OP-Erigon by keeping it updated with upstream, supporting more features, building OP-Otterscan, etc.\n\nSpan Batch: We researched and implemented Span Batch with OP Labs—new batch specs that minimize L1 data cost, initial design by Proto; aims to deploy with Canyon hardfork.\n\nEngine P2P Sync: We implemented Engine P2P Sync support for OP-Node that reduces block sync time—e.g., snap sync.\n\nPublic RPC & Block Explorer: We host OP-Erigon public RPCs & OP-Otterscan on OP Mainnet / Goerli.\n\nOP Charts: We built OP Charts, a Helm chart repository for OP Stack infrastructures.",
    displayName: "Test in Prod",
    impactDescription:
      "TiP's impacts focus on technical OPtimization and building tech stacks for OP Stack—some impacts are quantitive, but some should be qualitatively measured.\n—\n\nOP-Erigon: It secures OP Stack with client diversity and allows devs to enjoy Erigon's disk saving; it uses 70% less than OP Mainnet Geth archive nodes, 2.4→0.7TB.\n\nSpan Batch: It allows low-active OP Chains by cutting minimum L1 fees by ~97% (165→5 ETH a year), expecting to cut OP Mainnet's L1 fees by ~9%.\n\nEngine P2P Sync: It allows Geth's snap sync—reduces sync time by ~82% on OP Mainnet compared to the derivation.\n\nPublic RPC & Block Explorer: It allows devs to test OP-Erigon on OP Mainnet / Goerli—processing 138k req/day.\n\nOP Charts: It provides easy OP Stack deployments on k8s. Some devs forked it to build an OP Chain launcher.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Modular Media provides in depth, unbiased breakdowns of the biggest topics across the modular space every single week to our audience of nearly 600 email subscribers, and over 1500 Twitter followers. From project deep dives, and in depth breakdowns of topics such as sequencers and provers, to “how to guides” and “intern notes”. We help users & investors understand the underlying infrastructure that make up OP Stack rollups, while also providing a marketing branch for the teams building these rollups. We’re setting the steps in place to make sure the modular ecosystem thrives in the future.",
    displayName: "Modular Media ",
    impactDescription:
      "Our in depth breakdowns of complex topics help the community understand the underlying infrastructure that goes into building an OP Stack rollup, including sequencer or prover explainers. Plus, our weekly newsletter highlights the biggest updates across the Optimism ecosystem, such as showing users how to onboard to a new OP Stack chain such as Ancient8. On top of this, we offer an environment for thought leaders & builders to share & publish their own thoughts to one of, if not the biggest modular community in web3. We have received support from some of the top minds in the space, including those from the Celestia & Avail teams, Jon Charbonneau, and many others.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "Web3bridge has in the last 4years introduced over 4,000 Africans across six (6) countries (Nigeria, Ghana, Kenya, Uganda, South Africa, Zimbabwe) to Web3 development and graduated one hundred and fifty (150) Web3 developers with twenty-seven (27) currently in the ongoing cohort.\n\nWeb3bridge run a cohort-based online and in-person boot camp with a facility in Lagos where developers are groomed to contribute to the ecosystem.",
    displayName: "Web3bridge",
    impactDescription:
      "Web3bridge, as a Web3 development bootcamp has been directly and indirectly responsible for a large number of developers building on various chains (Optimism inclusive) from Africa. Web3bridge has run Eight (8) successful cohorts with cohort IX presently in session, also Web3bridge has supported over five (5) other boot camps in Africa training Web3 developers with curriculum and mentors to ensure that the African ecosystem produce developers who are able to work in and build dapps for the ecosystem across chains.\n\n\nWeb3bridge has also across various cohorts introduced the developers to Optimism while learning in the cohorts and generally working to make sure that there is a growing number of developers in the ecosystem to support adoption and dev onboarding to various chains",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "One of the first dexes on Base supporting 100s of tokens/projects since launch.\nAirdropped oBVM to our users from Fantom Canto & Pulse during our launch phase.\nPioneered options tokens as emissions which funded over $300,000 in $ETH rewards for LPs on Velocimeter.\n\nCumulative 40m in volume across the chains we are deployed (source DeFi Llama) on. ~10m on Base.\n\nVelocimeter Pro Options as a service - which we invented supports projects such as BMX w/ oBMX.\n\nGranted veBVM to dozens of projects creators & contributors via our contributer program.\n\nOnboarded 1000s of users to Base via our Zealy program.",
    displayName: "Velocimeter",
    impactDescription:
      "Provided launchpad contracts and frontend to friendtech33 who raised $400,000 using our contracts and frontend launchpad.\n\nSeveral other projects are in various stages of launching via our launchpad on Base.\n\nHelped to onboard projects such as Firebird Finance, Beefy, Qi DAO, Ethos Reserve & many more to Base via veBVM grants & emmissions.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      'We\'re dedicated to spreading knowledge about the crypto ecosystem and decentralized finance, aiming to make this tech accessible to all. Thanks to Defy Education and supportive protocols and companies, we\'re expanding free education in Latin America. Our contributions from the Defy Foundation include:\n\n- Scholarships for "Intro a Crypto", teaching Ethereum basics.\n- Partnerships with “Mujeres en Crypto” for 100% scholarships and with Proof Of Integrity in their programs "aPRENDOcripto" and "criptoIMPULSO"\n- Free high quality content on Ethereum scalability and layer 2 solutions.\n- Participation in "LaBitconf 2022" and Ethereum Uruguay discussing Ethereum scalability.\n- Lectures at universities such as ITBA and Di Tella on Ethereum\'s scalability solutions.',
    displayName: "Defy Foundation",
    impactDescription:
      "Our contributions have significantly supported free education in topics of highly interest for the Optimism Collective, since we help people understand how Optimism and optimistic rollups work and why their are valuable and important for achieving scalability on Ethereum.\nIn addittion we focused on key and targeted groups of audience like:\n\n- Low income sectors\n- Young students and women\n- University students",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We help users manage multiple wallets on Optimism and Base blockchains. Users can connect multiple EOAs, multi-sigs (across both Optimism and Base) and manage their NFTs and coins. We integrate with NFT marketplaces and 0x to enable trading on Optimism and Base too.\n\nThe multi-sig creation process on our app is simplified. We leverage CREATE2 and multi-send to streamline onboarding for users. Users can securely manage their assets across major chains through us.",
    displayName: "mehran @ castle",
    impactDescription:
      "Multi-sigs and managing multiple wallets is difficult. We made the wallet experience as easy as can be for users starting in crypto. With apps like Friend Tech, AdWorld, etc. users are required to hold various types of assets across many wallets. Castle prioritizes chains like Optimism and Base to ensure that new users can easily manage all their assets in one place.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Dasy is a lisp for the EVM. It enables smart contract developers to write their contracts in a very convenient lisp syntax that they can mold to their liking with compile-time macros. It transpiles internally into Vyper, so Dasy contracts benefit from all the compiler optimizations in Vyper. ",
    displayName: "Dasy",
    impactDescription:
      "Dasy has performed well as an experimental language, already matching the features and gas performance of more mature languages. It has also been a playground for brainstorming syntax features that may or may not make it into Vyper eventually. Because of its lispy nature, these syntax features can be implemented easily as compile-time Dasy macros. If they're good, more robust support can make it into either Dasy or potentially even Vyper itself.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "- Cannon has helped protocol engineers deploy thousands of lines of code to OP Stack chains.\n- Since receiving a grant from RetroPGF Round 2, all funds used so far have gone towards expanding the Cannon team with more engineering resources. This has resulted in 938 commits (changing 491 files with 432,625 additions and 168,277 deletions).\n- usecannon.com has been completely rebuilt. The app includes a package explorer (relying on subgraphs and IPFS), a code browser/“interact” tool (a la Etherscan), support for ERC-7412, a tool for deploying protocols via a Safe, and refreshed docs.\n- The CLI's user experience and stability has been significantly improved. The basic commands have become more intuitive. Advanced commands have been added for more sophisticated protocols.",
    displayName: "Cannon",
    impactDescription:
      "- Cannon has been especially impactful in the Synthetix Ecosystem, which is one of the largest drivers of activity on OP Mainnet.\n- Cannon has made it straightforward to deploy, configure, and upgrade an isolated deployment on Base Goerli (an OP Stack chain) for Synthetix V3 Perps Testnet competition. See Synthetix V3’s GitOps repository: https://github.com/Synthetixio/synthetix-deployments\n- Builders in the Optimism ecosystem are building front-ends, bots, and smart contracts with Cannon. See the Synthetix V3 Sandbox: https://github.com/synthetixio/synthetix-sandbox\n- We’ve seen some organic adoption from developers outside of the Synthetix ecosystem. e.g. Grateful has deployed to OP Mainnet using Cannon and published their package: https://usecannon.com/packages/grateful/latest/10-main",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "While there are plenty of Solidity libraries out there, nobody has been working on high-quality, secure, and easy-to-integrate library-like Vyper code. 🐍 snekmate fundamentally changed this! In one sentence: 🐍 snekmate are state-of-the-art, highly opinionated, hyper-optimised, and secure Vyper smart contract building blocks. Or in other words: What OpenZeppelin is for Solidity, 🐍 snekmate is for Vyper. 🐍 snekmate has helped numerous Vyper builders to kick start on the OP stack. Not only does client diversity matter but also language diversity!",
    displayName: "🐍 snekmate",
    impactDescription:
      "The main impact of 🐍 snekmate are twofold:\n1) 🐍 snekmate has built the secure foundations for any Vyper builder to kick start on the OP stack. Did you need an ERC-20 Vyper implementation for Optimism? Use 🐍 snekmate. Did you need some fancy math functions in Vyper for your AMM/DEX on Optimism? Use 🐍 snekmate. To put everything in one sentence: 🐍 snekmate has been the go-to-source for any Vyper code and ensured the security of the contracts with over 16k lines of unit, fuzzing & invariant tests. 🐍 snekmate has ensured that Vyper contracts deployed on Optimism follow the highest security standards and best practices.\n2) 🐍 snekmate has become the go-to-source for educating and understanding Vyper code. The entire code base is enriched with explanatory comments, making it easy to grasp.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "In a Medium article, \"Ether's Phoenix: Optimistic Vision,\" we highlighted public goods' significance in various domains, introduced Optimistic Vision and Optimism's grant programs. Ether's Phoenix is explained alongside RetroPGF. We delve into RetroPGF's funding sources and governance model involving the Token and Citizens' House.\nIn our GG18 article,we encouraged Web3 ecosystem contributors to join Gitcoin's GG18 on OP Mainnet, emphasized the relevance of quadratic funding and inspiring active participation in QF rounds.\nDuring a regular F2F builder meetup,we did a presentation about Optimism, including Superhack, Superchain, OP-Stack development, developer tools,and infra. We also did Q&A and discussed measuring impact in the ecosystem, explored app ideas for tracking impact.",
    displayName: "ODTU Blockchain",
    impactDescription:
      "Our contributions made a decent impact on the Optimism Collective by raising awareness and driving increased utilization of Optimism. 2 of our Medium articles garnered 2,337 and 3,127 views, sparking interest and understanding in Optimism's mission. Our support for GG18 drew in 160 participants, further emphasized of QF round on OP Mainnet. Our builder meetups coverage was instrumental in achieving 1,710 views and actively engaging 22 builders, propelling the importance of Superchain and utilization of OP-Stack. Our posts, shared with a network of 10,100 followers, expanded Optimism's outreach within the Turkish ecosystem. These efforts communicated the significance of public goods and motivated participation in Optimism initiatives, ultimately elevating the awareness of Optimism.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Our integration Ethereum Optimism with Hummingbot trading bot simplifies trading, expands opportunities, and improves risk management. Novice and experienced traders benefit from an intuitive interface, 24/7 trading, stop-loss/take-profit orders, efficient liquidity management, backtesting, security, and support. Join us to enhance your crypto trading experience.",
    displayName: "Hummingbot",
    impactDescription:
      "Our integration Ethereum Optimism with Hummingbot trading bot simplifies trading, expands opportunities, and improves risk management. Novice and experienced traders benefit from an intuitive interface, 24/7 trading, stop-loss/take-profit orders, efficient liquidity management, backtesting, security, and support. Join us to enhance your crypto trading experience.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Mosaic deployed its retroactive rewards platform earlier this year with the support of Aave Grants DAO to analyze user activity on Optimism. We provisioned deposit and borrow data, gained user insights, and determined retroactive rewards for Aave to incentivize meaningful LP usage on OP.\n\nIn August we joined buildspace and launched three alpha campaigns to trial various forms of loyalty rewards on OP. Rewards were issued as NFTs with each consecutive campaign outperforming the one before it. \n\nMost recently, we participated in the Permissionless hackathon where we integrated Gitcoin Passport data including Stamps attestations on OP. We helped users visualize their Passport journey, incentivized them to add more Stamps (attestations on OP), and unlock Gitcoin’s RPGF matching pool.",
    displayName: "Mosaic",
    impactDescription:
      "Mosaic rewards issued as NFTs on OP didn’t just outperform our expectations, each consecutive campaign also outperformed the one before it. Our combined alpha rewards campaigns totaled nearly 6000 NFTs.\n\nFurthermore, our work with Passport data hosted by EAS on Optimism was recognized by Gitcoin as the best use of onchain data and earned us the top prize at the hackathon.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      'Modular Crypto is delivering credible Portuguese content about crypto & web3. Through shows like "The State of Ethereum," "The State of DeFi", the daily "Modular News" podcast, and an insightful newsletter, we simplify Optimism for Portuguese speakers, especially in Brazil, fostering engagement.\n\nWith 3,000+ subscribers and 5,000+ monthly listeners, we educate and facilitate adoption within the Portuguese crypto community, significantly contributing to awareness and understanding of Optimism, the OP Stack, and crypto in general.',
    displayName: "Modular Crypto",
    impactDescription:
      "Modular Crypto is one of the largest sources of original content from Optimism in Portuguese. We’ve created podcasts, articles, guides, workshops, threads and virtual events to spread the Optimistic vision and educate people.\n\nWith more than 130 podcasts and interviews published, 27 articles posted about Optimism/Ethereum ecosystem, and, in total, more than 50 content dedicated to Optimism, OP Stack and OP Chains, we believe that we have positively influenced the OP ecosystem, especially with regard to adoption by the Brazilian crypto community.\n\nFurthermore, we recently created a guide of projects that are using the OP Stack, consisting of 4 articles dedicated to exploring OP Chains and OP Forks, and also a visual map of this, to facilitate the understanding.\n\nAnd all this 100% free.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "The ZKPodcast covers the latest in zero knowledge research and applications, the open web as well as future technologies and paradigms that promise to change the way we interact — and transact — with one another online. We have had an ep about Optimism in 2021, and generally have been working in the Ethereum ecosystem for a long while. ",
    displayName: "Zero Knowledge Podcast",
    impactDescription:
      "Helped with education. We have had an ep about Optimism in 2021, and generally have been working in the Ethereum ecosystem for a long while. More generally, the ZKPodcast covers the latest in zero knowledge research and applications, the open web as well as future technologies and paradigms that promise to change the way we interact — and transact — with one another online. ",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "Onchain attestations based on Praise data captures the essence of who did what, when, and to what impact in the Optimism community. We recently built and deployed the attestation feature specifically for the needs of Optimism. Praise attestations, in tandem with other types like Gitcoin Passport and Regen Score, play a pivotal role in determining eligibility for Optimism Citizens. Moreover, our newly launched citizen attestation explorer facilitates community members in examining the attestations and their associated impact scores.\n\nPraise dashboard currently have 100+ users & 400+ praises. Praise integrates with RegenScore & Gitcoin Passport, emphasizing trust. Metrics, led by a rewards group, quantify praises, aiding in governance.",
    displayName: "Praise",
    impactDescription:
      "Praise dashboard currently have 100+ users & 400+ praises. Praise integrates with RegenScore & Gitcoin Passport, emphasizing trust. Metrics, led by a rewards group, quantify praises, aiding in governance.\n\nCitizens Explorer: Our newly launched citizen attestation explorer allows community members to lookup relevant Praise attestations as well as attestations from the following projects:\n- Gitcoin Passport (Passport score)\n- Regen Score (Regen score)\n- Optimist Profiles (User profiles)\n\nCommunity Involvement & Analysis: Praise goes beyond just recognition. We've initiated a metrics system, steered by a dedicated rewards working group, that quantifies each praise. This data-driven approach aids in determining rewards and reputation, streamlining the path to active governance participation.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Vyper is a pythonic programming language for smart contracts. \n\nVyper contracts account for over 7% ($50m) of the TVL on Optimism and secure more than $2 billion across multiple chains for major protocols such as Curve, Lido and Yearn.\n\nThe Vyper compiler offers high performance, gas efficiency and produces binaries that are consistently 50% smaller than Solidity.\n\nVyper is a long-time supporter of Optimism. The team added support for the first non EVM-equivalent version of the OVM in 2020, and has since worked on ways to mitigate issues faced by users unaware of the differences between EVM versions on Optimism and Mainnet.\n\nVyper's design principles prioritize security and audibility. The compiler is regularly audited by ChainSecurity, StateMind and large protocols working with Vyper.",
    displayName: "Vyper",
    impactDescription:
      "- Vyper's commitment to security through its language design choices and stringent audit process increases the security of the OP Stack.\n- Vyper contributes to language diversity on OP, reducing the risk of a systemic failure from overreliance on a single language.\n- Vyper compiler's advanced optimizations enhance the efficiency of the OP stack\n- Major projects such as Curve, Lido, Perpetual Protocol, Velodrome and Yearn all used Vyper as part of their Optimism deployments.\n- Vyper has been used for on-chain analytics API on Optimism. Integration with Jupyter and Python tooling helps onboard new devs. \n- By reducing the size of compiled binaries, Vyper lets developers make more complex contracts without running into the size limitations of the EVM.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "We built the Rainbow Road that allows for resources/data to be exchanged between chains in a fully permissionless and decentralized way. The Rainbow Road does this by abstracting away the needed integration with message passing protocols/services such as Chainlink CCIP, Axelar GMP, and LayerZero to provide a reliable, robust, and scalable platform to accomplish tasks across any chain.  This enables projects and users to:\n\n- Transfer tokens to and from chains, like Base and Optimism\n- Leverage services like Chainlink's Automation, VRF, Data Feeds on any chain\n- Execute actions on remote chains\n\nBy lowering the barrier to go and operate cross-chain through the reduction of development costs, any project can bring their token(s) to Base or Optimism growing their community.",
    displayName: "Archly",
    impactDescription:
      "- The Rainbow Road has enabled users to migrate Arc tokens to and from Base and Optimism.\n\n- Worked with team at Chainlink to open lanes between Base and Optimism for the Rainbow Road as well as other chains supported by Chainlink's CCIP and Archly.\n\n- Enabled the ability to bring products and services from remote chains to Optimism and Base, such as Chainlink's Automation.",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "We envision an L2 Gate. The bridge will be the entry point to Layer 2, as users will always need to go through some sort of bridge to transfer their assets to Layer 2. Pheasant Network is unique in that it is significantly cheaper and faster than other bridges because it handles transactions optimistically.\n\nWe already support networks that leverage the Op Stack, such as Base. In the future, when Op Stack networks explode, we believe that not only native Op Stack bridges, but also optimistic bridges will be indispensable. This is because optimistic bridges are currently the cheapest and fastest of all bridge types. We will continue to contribute to the Optimism ecosystem by actively bridging the Op Stack ecosystem.",
    displayName: "Pheasant Network",
    impactDescription:
      "By using the optimistic bridge like Pheasant Network, to bridge assets from Ethereum and other Layer 2s to Optimism, users can significantly reduce their gas costs.\n\nIn order to get more assets flowing into DApps in the Optimism ecosystem, it is important to reduce gas costs for the bridge as much as possible. From that perspective, Pheasant Network has been the most efficient in bridging assets and users to Optimism since it began supporting Optimism in January 2023.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "LearnWeb3 has built public good education for Ethereum ever since we started - with over 100 long-form lessons, 4 courses, degrees, and several hundred short form pieces of content we have one of the largest structured curriculum for new developers to get started with building on Ethereum and Layer 2's like Optimism - all regularly kept up to date and offered for free with no strings attached.",
    displayName: "LearnWeb3",
    impactDescription:
      "Students from LearnWeb3 have participated and win various prizes at various hackathons over the time we've been around, a lot have found jobs in the space and work in Web3 in engineering roles, and many have also built their own projects and are continuing to do so thanks to the resources and support offered within the community.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "EIP 4337 introduced new abstracts entities called UserOps, Bundler, paymater and factory, which are not understood by the underlying ethereum protocol. \nThus no infrastructure component recognizes these entities unless specifically designed for it.\nJiffyscan is the only tool to let you explore details of a UserOp introduced by ERC-4337, just by giving the UserOp Hash.\nUsers can explore details across 16 different mainnets and testnets.\nThere's a data API available as well to query the details of a given UserOp, currently for free.",
    displayName: "JiffyScan",
    impactDescription:
      "1.The tools is most helpful for developers to confirm the status of a UserOp and share it with their teammates or users, as no other tool currently supports search/lookup by a UserOp.\n2. The Explorer is actively used by the developers of the top teams empowering 4337.\n3. The explorer has seen a Cumulative Monthly Growth of 27% for the last 5 months in terms of page views, with the september hitting ~18k views. \n4. We have had 26 teams request for our APIs and are the most performant and rich historical UserOp lookup service out there",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "LexDAO is a club of legal engineering professionals united to bring the traditional legal settlement layer to code and coded agreements to the masses. We believe that everyone deserves access to justice in a quick and efficient manner. If legal services were easier to use, verify, and enforce, we could live in a fairer world.\n\nLexDAO organizes sophisticated conversations and education materials to help orient people around how to build in this new and evolving space. LexDAO focuses on Code is Law applications where practical legal theory is embedded into smart contracts, applications, and networks. The efforts we undertake are all in the spirit of public goods and services. Many of our projects spin out into standalone tools or services; some examples include KaliDAO and Smart Invoice.",
    displayName: "LexDAO",
    impactDescription:
      "The most significant direct impact to OP are our Real World Asset projects on our sister project Kali. The Kali project, like many other on chain DAO deployers, is a direct spinout from earlier Lex Projects related to onchain governance, arbitration, an corporate structures. The smart contract code is greatly simplified which makes it easier to read and secure assets on chain. \n\nSmart Invoice is a tool that was designed to provides web3 workers with cryptocurrency invoicing, escrow, and arbitration capabilities. As with most things LexDAO produces, it is built in an open source framework so that other developers can build on top of its code.  It is designed for clients and contractors to make the facilitation of crypto-payments easier to use and safer for both parties involved.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "UXUY is a new decentralized transaction wallet that provides an integrated infrastructure for the Optimism ecosystem, including features such as wallets, cross-chain bridges, transactions, GasPool, MPC security and more. UXUY provides superior management and security for users' digital assets.",
    displayName: "UXUY",
    impactDescription:
      "UXUY provides users with cross-chaining assets to Optimism Mainnet with juat one click. Users can easily and quickly move their OP assets between different mainnets without worrying about tedious procedures and long waiting time, and enjoy the efficiency and convenience of the Optimism ecosystem to the fullest.\n\nUXUY has its GasPool built into the user's transaction wallet, so users don't need to worry about gas fees. Whether you're transferring, trading, or participating in the DeFi program, UXUY lends fees to users through the GasPool, prioritizing fast and secure transactions.\n\nUXUY aggregates the major mainstream DEX protocols on Optimism, allowing OP users to access all their trading needs in one place. \n",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Cielo provides tooling for interpreting onchain activity on Optimism. This includes:\n\n1. Web app that labels and filters Optimism transactions\n2. Custom user generated lists of themed wallets e.g. “High Volume Optimism Traders”; “Velodrome Power Users”\n3. Token tracking for Optimism assets e.g. $OP, $VELO\n4. Customizable Telegram + Discord alerts for Optimism communities\n\nOptimism was the first L2 Cielo added support for (April 2022) and continues to dominate our operations and user activity. \n\nWe have expanded to include other chains of the OP Stack and have over 45,000 users .\n\nIn August, Cielo became the first wallet tracking service to add support for Base, providing onchain analytics during the L2’s first weeks of operation.",
    displayName: "Cielo",
    impactDescription:
      "Cielo sends over 2 million alerts every week to users of the OP Stack (Optimism, Base, opBNB and Mantle). We reach 46,000+ direct users, 500 Telegram groups, and 270 Discord communities.\n\nDuring a 48 hour span of the Base launch, Cielo sent out over 2.5 million alerts to its users.\n\nPower user testimonial from Houston: “I use a number of wallet trackers and to me, Cielo is clearly best in class. It is, to my knowledge, still the only wallet tracker that supports Synthetix perpetual futures on Optimism chain (hosted on frontends like Kwenta), breaking down transactions that take place in brief, easy to understand snippets. Amongst the wallet trackers I use, Cielo was the first to support transactions on Optimism chain.” \n\nWe shared external testimonials in the Contribution links section.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "OptiChads stands as one of the largest NFT communities on Optimism. Our collection of 10,000 Chads is the most traded art collection on Optimism. We are active on social media, creating daily content, as well as a weekly OP NFT news series. We've addressed critical issues such as when the Quix bridge broke and reported grant misuse.\n\nOur content receives 15,000 weekly impressions. We built an in-house music studio with DC artists to produce music NFTs on OP. We've held educational workouts in the metaverse with Atlantis World. We hosted fitness quests that awarded participants OP tokens. Our efforts to promote health & wellness in Web3 have gained recognition from market leaders like OpenSea, solidifying our position in the space. We are excited to continue to grow the NFT ecosystem on OP.",
    displayName: "OptiChads",
    impactDescription:
      "Initially a free mint, our genesis collection of 10,000 NFTs is the most traded art collection on Optimism with 12,314 trades, 2,895 unique holders, and volume totaling more than 135E across all marketplaces. \n\nWe generally promote a health and wellness culture on Optimism that helps make users stronger. Most of the content we produce is widely dissemenated on Crypto Twitter with 2,000 dailly impressions on average. \n\nA lot of our reporting has driven positive changes to NFT users on Optimism such as the Quix bridge issue being resolved 24 hours after our reports, and better grant accountability being implemented after we reported NFTE misusing funds. \n",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      'Over the summer of 2023, a group of 33 researchers participated in the inaugural Summer of Protocols program. They were tasked with exploring protocols, broadly construed, from various angles and across a range of different domains. By going broad, the researchers were able to find insights that applied in many contexts, including blockchain protocols such as Optimism and Ethereum. \n\nSome themes explored include the evolution of safety protocols, what "protocol death" looks like, the interplay of human agency and formulaic protocols, and more. \n\nThe output of the program is being published for all to access. The hope is for the program to help the Ethereum and Optimism communities become more "protocol literate" and have a better theoretical understanding of how protocols work. ',
    displayName: "Summer of Protocols",
    impactDescription:
      "By studying protocols across a wide range of domains, Summer of Protocols can hopefully give participants in the Optimism Collective and the Ethereum community more generally better mental models to understand protocols. \n\nBlockchain ecosystems are often analogized to countries, tech platforms, companies, etc. and most reasoning happens by analogies rather than first principles thinking. SoP aims to give the OP Collective the tools to get better at the latter. \n\nSoP is also a way for the Ethereum community to engage with experts outside of blockchain that want to also better understand protocols for their domain of interest, and build bridges with communities we may otherwise not be able to. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We've developed a tool that has enabled NFT communities on Optimism and Base to acquire ENS sub-domains at zero cost. This significant accomplishment was made possible through the implementation of ENS wildcard resolution. Our application has already empowered ENS name holders to seamlessly connect their names/domains with the contract addresses of NFT collections, resulting in the automatic provision of free subdomains linked to individual token IDs.\n\nAs a real-world example, consider the OptiChads collection. Every Chad owner automatically received an ENS subdomain under optichads.eth, precisely corresponding to the token ID of their NFT. For instance, the subdomain 69.optichads.eth, directly resolves to the address of the individual who owns Chad #69. ",
    displayName: "Wildcards Protocol",
    impactDescription:
      "- 7 NFT communities have been onboarded on OP chain. \n (OptiChads, Apetimism, Tickled Picklez, Optimistic Bunnies, Optimism Quests, Deggkies Optimism, HyperChads)\n\n- 3 NFT collections have been onboarded on Base. \n (Tiny Based Frogs, Base Wars, Summer Kevin)\n\n- 64,696 resolvable ENS wildcard subdomains created.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "We are the Freedom Factory. We have built ethOS, a free and open source OS that embraces Ethereum. ethOS unlocks the full potential of Web3. It features an onboard Ethereum light node and a System-level wallet, allowing for direct interaction between mobile applications and Ethereum, seamless switching between L1 and L2s (including Optimism), and gives users more security and control over their assets by leveraging device biometrics and notifications. We released the first build of ethOS in 7/22, starting with a fork of Android that could be flash installed on Pixel3 devices. We launched ethOS v2.0 at ETH Denver 2023, and in 8/23 we sold out of 50 Pixel 7a devices that come preinstalled with ethOS v3. We develop fast, and have a long list of existing functionality and features of ethOS.",
    displayName: "ethOS",
    impactDescription:
      "ethOS gives users of Ethereum & Optimism a first-class mobile experience. Our mission is the disruption of the iOS and Android ecosystems providing undeniable value and novel and superior use cases by leveraging the Ethereum protocol. We started with an OS for Ethereum enthusiasts that could be flashed on used Pixel devices. We now sell new Pixel 7a’s preinstalled with ethOS, creating a viable “daily driver” device for first adopters within the Ethereum community. By expanding the ethOS user-base, we created a distribution network for developers of Ethereum applications that increases resistance to censorship that developers and users have been experiencing on other mobile platforms. Sending ETH on the Optimism network in the native messaging app:https://www.youtube.com/watch?v=eUTBKjPKZUE",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "I need funding in order to pay for the infrastructure as the Farcaster data to handle is already a lot. I need premium plans on Vercel, Supabase and Railway to keep the service running properly. Vercel used to host the webapp. Supabase to store and index the data. Railway to have some periodic and scheduled tasks running (e.g. synchronizing with the new data in the network)",
    displayName: "Findcaster",
    impactDescription:
      'Farcaster recently deployed on Optimism Mainnet their registry contract so I heard any projects built in the Farcaster ecosystem might be eligible for RetroPGF. I built an OpenSource tool to navigate the Farcaster community with plain-english prompts. You can ask Findcaster things like "Find me people who are interested in AI" and then connect with them through some of the Farcaster existing clients. Next steps I want to take with the projects are around becoming an actual client as well, allowing people to connect with their Farcaster account and contact people directly through my tool, or maybe with XMTP. Another interesting thing to explore is to offer this service as an API or SDK that other applications can use to offer a smart user search to their users/customers.',
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We have created a platform called Launch, which serves as a hub for innovative builders working across technology and culture, currently, we’ve got 41 curated projects already and many additional projects and partnerships in the pipeline. Our platform has garnered attention from 1.5k unique user sand 300 builders have read our ‘New Players’ Brief to inspire an open source future at the intersection of AI and Crypto. We have also successfully partnered with organizations like OPGames, FuturePrimitive, Kernel0x, Buidl Guidl, and worked with events like NPC day and ETHrome to focus attention on builders. So far we’ve raised $20,000 to commit to fund prize pools. One of the most notable projects ‘Prime City’ has gone on to be accepted into The Microsoft Founders hub.",
    displayName: "RADAR",
    impactDescription:
      "Relevance to OP Ecosystem:\n- Our platform is deployed on OP and aligns with the OP Ecosystem's goals of encouraging Public Goods development and collaboration. We’re also bringing non-web3 users into the Optimism blockchain by allowing them to believe and collect projects easily with credit card.\n\nProblems Solved:\n- Created a place for builders to share updates on their projects and get rewarded away from the noise of social media, and without the pressure of large crowdfunding, grants or VCs.\n\nOn-Chain Features:\n- We've implemented an on-chain 'believe' functionality, as well as the ability to collect NFTs. All NFTs are on the optimism blockchain and have attribute tags, the tags build reputation onchain for being early.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "Solidity is both used for the Optimism smart contracts on Ethereum mainnet as well as smart contracts running on Optimism itself.\n\nSolidity is currently the most used programming language on Ethereum and on Optimism.\n\nThe Solidity team maintains the Solidity language as well as the solc Solidity compiler.",
    displayName: "Solidity",
    impactDescription:
      "There are hundreds of thousands of contracts deployed on Optimism which enables people to make use their favorite dApps with much lower gas costs than on mainnet. Almost all of these contract are written in Solidity. You can counter check this by noting that (at the time of writing) only 205 verified contracts on Optimism are written in Vyper (https://optimistic.etherscan.io/contractsVerified?filter=vyper).\n\nSolidity makes coding smart contracts easy and enables a low entry barrier for people to write applications on Optimism and Ethereum (and other EVM compatible chains). Solidity is completely open-source.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "As MesoReefDAO, we're excited about the potential RetroPGF recognition for our significant contributions to the Optimism ecosystem. Our focus has been on decentralized scientific efforts for coral reef conservation, a mission we've pursued since GG18 in 2023. Additionally, we've been actively promoting the use of Optimism L2 through accessible platforms like Twitter Spaces. This has helped highlight its advantages, particularly in terms of lower fees and scalability, encouraging broader participation in initiatives like Climate Solutions. These efforts underline our dedication to advancing sustainable solutions within the Optimism framework. Looking forward, we're prepared to expand our impact on coral reef conservation and broader environmental initiatives.",
    displayName: "MesoReefDAO",
    impactDescription:
      "MesoreefDAO's impact on Optimism goes beyond financial support. It embodies a commitment to environmental stewardship, envisioning a sustainable future integrated with DeSci. Our efforts empower a community of scientists, showcasing the transformative potential of Decentralized Science in coral reef conservation.\n\nThrough MesoreefDAO's integration into the OP Stack, we actively explore and facilitate substantial funding for projects restoring and preserving coral reefs in the Mesoamerican Reef. Leveraging Quadratic Funding with Gitcoin's support, we offer crucial financial stability, empowering projects to make meaningful contributions. Encouraging contributors to vote for Coral Reef Conservation projects underscores our commitment to safeguarding vital marine ecosystems.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Komorebi has already put 150K personal funds into organizing AW House project (hacker house, grant program, hackathon, R＆D lab). Komorebi has teams/communities committed to it. AW is a new space that if incubated well, could find a unique home on Optimism even more than it does today.\n\nAW is a tight-knit group of devs. And Komorebi was able to give feedback to the collective on what is needed technically to make it better. With this feedback, Optimism could make changes so onchain gaming can prosper even more. \n\nKomorebi was able to connect selected AW builders to Kevin and Binji from Optimism. and have been sharing Autonomous World space information. \n\nBuilt OSS onchain hackathon protocol for the autonomous world on Optimism. The first onchain AW hackathon is going to be held on Oct 27-29",
    displayName: "AW House/Komorebi's Hacker House",
    impactDescription:
      "There are some projects.\n-Hackathon: Gave opportunity to develop and share knowledge\n-Hacker House: Made Schelling points for niche autonomous worlds/fully onchain game builders, researchers, and players.\n-AW Grant: Boosted projects in this space. Support them to move forward quickly. \n-AW UBI: Supported public good builders.  \n-R＆D: Showed different angles and innovative signals for builders. \n-Optimism: Kamigochi team switched to Optimism from Kanto after attending hacker house. And Komorebi connected them to Optimism member. Probably, Gaul would choose Optimism after Hacker House. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Apetimism was among the first NFT projects on Optimism and remains one of the few active today. We guide users to Layer-2, prepping them for mass adoption while educating extensively. \n\nWe've also helped early NFT projects like Bored Town and Oppa Bear transition to Optimism. We've onboarded thousands, marking significant early adoption impact.\n\nBeyond on-chain activities, we've organized numerous offline events, showcasing the dedication of those in the Optimism community, even during bear markets.",
    displayName: "Apetimism",
    impactDescription:
      "Our efforts extend beyond the Optimism network, as we also assist in onboarding individuals to other blockchains on the OP stack, including Base and Zora, using our tools and products.\n\nAlthough it's been over a year since our NFT project was minted, we remain active in educating people through a variety of activities, including exclusive content, bi-weekly AMAs, and multiple in-person events.\n\nBeing a team of entrepreneurs with expertise in NFTs, we provide guidance to those seeking advice on executing NFT projects on the OP Stack. To date, we've advised over 30 NFT projects bringing them to be a part of Optimism Collective.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "The “OP Governance Analytics Dashboard” team has worked to democratize information within the Optimism Collective by developing a comprehensive DAO Governance Analytics Dashboard. Our contribution focused on amplifying governance accessibility by providing a user-friendly platform that distills complex governance metrics, such as participation, voter behavior, and power structures, into understandable insights. We also open-source our dashboard website repository for the community to use. Our mission is to foster informed participation, nurturing an inclusive decision-making environment, and reinforcing the effectiveness of the governance process. ",
    displayName: "OP Governance Analytics Dashboard",
    impactDescription:
      "Empowering and impacting the Optimism Collective, our OP Dashboard has elevated governance through transparent, data-driven strategies. By refining features and democratizing essential metrics (Participation, Voting Power, and more), we've enriched stakeholder engagement and decision-making, catalyzing a culture of accountable and astute governance across the collective.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "We have provided +50 educational content focusing on OP Stack chain ecosystems (things on Base, Zora Network, Mantle Network, PGN, opBNB, DeBank) including Dune dashboards and analyzing articles & posts in Vietnamese, to our XomNFT community of 1,700 followers on X, 1,000 followers on Facebook, and 1,000 members in Telegram. \n\nWe are the creator of Base’s Onchain Summer Visualization Dune dashboard, the most complete dashboard to track Onchain Summer campaign run by Base in August, and of the first Dune dashboard tracking Mantle Network, helping users understand about the newest OP Stack chain in town back in the time. With our +50 content published on XomNFT channels, crypto users in Vietnam always get well-informed about the newest projects, programs, and campaigns on OP Stack chains \n",
    displayName: "XomNFT",
    impactDescription:
      "Our dashboards and content targeted fully to end-users, keeping them posted about the new OP Stack Layer 2 chains, potential retroactive programs, NFT minting campaigns, etc. We gave a helping hand in educating users about, boosting brand awareness of, and acquiring users to join Base, Zora Network, Mantle Network, PGN, opBNB, DeBank (the chains & projects built on & programs run on the chains). \n\nOur over 50 dashboards and content reached nearly 2,000 crypto users in the local Vietnam market and 2,000 crypto users in the global market, hitting in total 20,000 views on social networks. Our dashboards (Base’s Onchain Summer visualization and Mantle Network) were applauded by Jesse Pollak (Base), trending on Dune site, and used in a number of deep-dive posts by Crypto Twitter researchers. \n",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "Sphinx automates the smart contract deployment process, making it easier to reliably deploy smart contracts across many chains. Sphinx's Foundry plugin makes the deployment process idempotent, which means that each transaction in a deployment will be executed exactly once, even if the script exits midway or if the script is executed more than once. Sphinx also provides a deployment preview, which allows developers to see exactly what they're deploying before it's executed. Sphinx also has an opt-in DevOps platform that makes it easy to deploy from a CI process, and also takes care of funding and executing deployments.",
    displayName: "Sphinx (formerly ChugSplash)",
    impactDescription:
      "Sphinx's library has been downloaded over 2,000 times on npm and currently has 186 stars on GitHub. Sphinx has been used by Wonderland (https://defi.sucks/) in production. Their CTO said, \"Sphinx is a game changer for deploying smart contracts across chains. Finally, we can say goodbye to deploying from local computers, getting gas tokens on every chain, and using private keys in .env files! I believe these types of solutions are more than just nice-to-have; they're critical in the space.\"",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Copin enhances the Optimism ecosystem with a robust tool for analyzing on-chain perpetual traders, offering insights into their behavior and transaction history on Kwenta, a perpetual DEX within the Synthetix protocol.\n\nIt introduces a pioneering narrative, 'Decentralized Copy Trading,' featuring Trader Explorer and Copy Trading for different perp DEX protocols. Notably:\n\n- A user-friendly filter uncovers top Kwenta traders based on specific criteria or timeframes.\n- 'Top Opening Positions' provides statistics on significant volume opening positions.\n- Kwenta Trader Profile empowers users to review their trading history with comprehensive analysis.\n- Additional features, including Kwenta Trader Position Detail and Kwenta Trader Backtest, enhance the trading experience.",
    displayName: "Copin.io",
    impactDescription:
      "1. More than 155k Kwenta Trader Profiles were automatically generated on Copin.\n2. Copin launched its private beta with copy trading data from traders on Kwenta and GMX, resulting in the following statistics:\n- Total Volume: $3,773,837\n- Total Orders: 12,047\n- Total Copiers: 379\n\n3. Enhancements were made to the user experience of Kwenta traders, and the OP community enthusiastically embraced the new concept, with a significant amount of feedback received. Copin received mentions on X and shout-outs in The Optimist Newsletter.",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "Since RetroPGF2 we have done 17 new senior developer mentorships oriented to optimism.\nList: \n- 2 mentorships ended up in the EVM Runners game (https://evmr.sh/)\n- 1 mentorship is producing the NotYourKeys game (@NotYourKeysGame)\n- 2 on gas optimization\n- 4 on security auditing \n- 2 on Smart Contract deployment\n- 2 on Security Mindset\n- 5 on general topics.",
    displayName: "EthernautDAO",
    impactDescription:
      "EthernautDAO provides high-level developers to the ecosystem by migrating senior web2 devs into Optimism. We do tailor mentorships and while we are chain agnostics the last year we have fully focused our efforts on Optimism. We don't charge Mentors or Mentees, this is a free service we consider a public good. We live on donations and use the funds to keep mentors engaged.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Since RPGF2 we have focused on:\n \nEnd User Experience and Adoption\n- Added a “risk rosette” - quickly compare risk vectors of different L2s\n- Introduced “stages”, progress on the road to full decentralization\n- Separated L2 TVL into assets bridged canonically, externally and minted natively on L2\n- Continuous addition of new L2s, incl. all new OP Stack chains\n- Published a report on “Upgradeability of Ethereum L2s”\n\nCollective governance\n- Hosted Governance Breakfast at several conferences, fostering governance discussion\n- Hosted weekly Optimism Office Hours \n- Hosting whole-day governance workshops during L2DAYS at Devconnect Istanbul\n\nDeveloper ecosystem\n- Constant development of contract monitoring of L2 systems\n- Build Your Own Rollup\n- co-hosted L2Warsaw & L2DAYS Istanbul\n- Earl.js",
    displayName: "L2BEAT 💗",
    impactDescription:
      "From the direct feedback we receive, both on Discord & Telegram as well as in person during conferences, we know that our work is helping shape the way Ethereum and L2 ecosystems evolve.\n- The risk assessment and stages frameworks serve as a north star for projects in terms of what they should prioritize in their roadmaps.\n- Our contract monitoring ensures that no changes to the security parameters of any L2 go unnoticed.\n- The introduction of TVL breakdown spurred discussion on how we should treat L2 assets depending on their origin.\n- Our work on L2 upgradeability is now the backbone of security council designs in various protocols.\n- Due to our active participation in governance, we’re now experimenting with different forms of involvement and outreach to the community.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      'Ethernal has three main use cases\n1. Individual contributors\nDevelopers can spin up a full block explorer connected to their local development chain in a few minutes.\nBlocks & txs are automatically synced and processed, and give detailed info to the developer. ABIs can also be synced in order to generate an UI to interact with the contract.\n2. Teams\nThrough either the UI or the API, teams can connect their hosted testnet RPC and get a full explorer accessible through a public url (can be their own domain), making easier to do internal/user testing.\n3. Appchains\nIt can be block explorer for Optimism L2s. It takes a few seconds to launch and everything is handled automatically.\nIt has an API to launch explorers on demand (especially important considering all the "L2 as a service" launching).',
    displayName: "Antoine",
    impactDescription:
      'A lot of new developers have been using Ethernal when they get started as it easier to understand blockchains when you can see what\'s going on through a dashboard that connects to your local development chain.\n\nDevelopers are already using Ethernal to develop smart contracts that have been deployed on Optimism. It has sped up their development time by providing them with a set of basic tools (transactions visualisation + contract interaction) that allows them to focus on building their contracts, instead of spending time on various "quality of life" scripts.',
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Ape maintains an Optimism plugin, which allows developers using our framework to interact with Optimism and OP Stack-based networks easily, safely, and reliably. We will continue to maintain the Optimism plugin, improving it's functionality to make it as useful as possible for our community, including supporting our own product activities where Optimism is our primary deployment network.",
    displayName: "ApeWorX LTD",
    impactDescription:
      "We've supported a large portion of our developer community that uses or interactions with Optimism frequently, one of our most widely-used ecosystem plugins (outside of Ethereum). Major projects are using it for production capabilties, including Yearn and Curve.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "CharmVerse is the grants management platform powering the Token House grants operations, covering Season 4, Cycles 14 & 15. CharmVerse provides applicants an easy-to-use interface for submitting grant applications and receiving feedback from council members. Council members can also discuss and evaluate each application without switching between apps and chat groups. \n\nCharmVerse supports the end-to-end grant operations: \n- Application submissions \n- Communication/feedback between applicants and council members \n- Status updates and notifications for all participants \n- Application evaluation discussions among grants council members \n- Hosts all relevant materials, including background, criteria, rubric, calendar, and instructions\n\nCharmVerse is open source and live on OP Mainnet. ",
    displayName: "CharmVerse",
    impactDescription:
      "4,286 Optimism users were active in the CharmVerse Optimism space during season 4. The Grants Council processed and accepted 97 and 104 applications in Cycle 14 and Cycle 15, respectively. This is a 33% increase from Season 3. \n\nCharmVerse created personalized and free CharmVerse spaces for the 97 projects in Cycle 14. 53 projects claimed their spaces. ",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "1. Finalise and prepare Optimism Resolver contracts for an audit.\n2. Support the integration and implementation of the Resolver for other Optimism based networks like Base and Mantle. \n3. Support the integration of the Optimism Resolver in other projects such as Unruggable Domains.\n4. Creation of documentation for anyone to implement the Optimism Resolver.\n5. Built the first ever Live chat fully web3 based, used in EthPrague and in incoming events. \n6. POC of dm3 dApp to allow Safe’s accounts to exchange messages and receive notifications. \n7. Create the legal infrastructure for dm3 to expand as a Public Good in Germany. \n",
    displayName: "dm3 protocol.",
    impactDescription:
      "1. Development of the Optimism Resolver for ENS: All users using ENS will now be able to store, read and write their text records in Optimism.\n2. Prepare OP Resolver contracts for an audit: it will allow us to guarantee security to anyone who implements it. It’s key for the OP Collective users who wish to store, read or write data on L2s from Mainnet using our Resolver.\n3. Support the integration and implementation of the Resolver for other Optimism based networks like Base and Mantle: with the bedrock update, we provided support and built alongside the ENS team the adaption of the Optimism Resolver to other networks like Base and Mantle, closing the gap in between ecosystems.  \n5. We provide all the documentation needed for anyone on the OP collective to make use of our smart contracts.\n",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "\nBanklessDAO boosts Optimism's L2 vision via platforms like Twitter (61k+ followers), LinkedIn, and Instagram, spotlighting its merits through varied content, thus enhancing its position as a favored L2 solution. The Global Events Team attends web3 events worldwide, promoting the Optimistic Vision. Encouraging connections with Optimism grants recipients, they amplify others' efforts via BanklessDAO social channels. They also educate newcomers on engaging in the OP ecosystem via forums and public goods creation. With 100+ global tickets gifted, they help newbies find a crypto-savvy community for better learning.",
    displayName: "Bankless DAO",
    impactDescription:
      "\nWith 20k+ engagements, Bankless DAO significantly boosted awareness and education around Optimism. Through diverse content on Twitter, LinkedIn, Instagram, and Discord, we've highlighted Optimism's value and functionality. Our efforts also amplified the reach of Bankless Publishing, Bankless Africa, and international media nodes. Interactive Twitter spaces with Optimism's core team enriched understanding of its origin and future. This campaign not only educated but also unveiled Optimism's huge potential in the crypto and web3 realm. Additionally, many Bankless DAO members were inspired to start their web3 journey and also their own companies after learning and making connections in bDAO.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "- Hyper optimized low-level Solidity code, wrapped up in flexible high-level APIs.\n- Implements unique features (e.g. JSONParserLib, LibSort) that make Solidity feel like a proper-high level language.\n- Solady LibZip: Generalized calldata compression and Lz77 compression. With an accompanying JS / TS library.\n- Cross-pollination: novel math, optimization, EVM tricks developed in Solady are ported to other projects across the OP ecosystem.\n- Used by sound.xyz, OpenSea, 0xSplits, Optimism, Friendtech, etc.\n- Learning resource for Solidity inline-assembly.\n\nOverall, Solady empowers Solidity developers to develop harder, better, faster, stronger on OP ecosystem chains.",
    displayName: "Vectorized",
    impactDescription:
      "- Hyper optimized low-level Solidity code, wrapped up in flexible high-level APIs.\n- Implements unique features (e.g. JSONParserLib, LibSort) that make Solidity feel like a proper-high level language.\n- Solady LibZip: Generalized calldata compression and Lz77 compression. With an accompanying JS / TS library.\n- Cross-pollination: novel math, optimization, EVM tricks developed in Solady are ported to other projects across the OP ecosystem.\n- Used by sound.xyz, OpenSea, 0xSplits, Optimism, Friendtech, etc.\n- Learning resource for Solidity inline-assembly.\n\nOverall, Solady empowers Solidity developers to develop harder, better, faster, stronger on OP ecosystem chains.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Promote Optimism technology in the Chinese-speaking community and introduce the technical architecture and dapp development of  Optimism in detail.  Our content present both by video and github, radianting to more than 5K Chinese language developers. We provide not only code tutorial but also video course for developer to know the Op stack development.",
    displayName: "Dapp-Learning",
    impactDescription:
      "Radiant to 10K Chinese language developers from the mainland and overseas.   We help to promote the op stack and op fraud-proof system to developers to get to know Optimism. Our dao also deploys the dao reward contract on OP mainnet.  Our dao members can claim their reward and bonus on Op. \n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We built a fully EVM native storage protocol and deployed our storage smart contracts and different products to the OP mainnet, From now on all OP builders and users have access to truly decentralized on-chain storage services via Crust Networks protocol and physical infrastructure. OP developers can leverage more than 600 PB of storage capacity for all their storage needs like dapp hosting, NFT storage, puplic file storage and more to achieve full scale decentralization. ",
    displayName: "Crust Network",
    impactDescription:
      "The OP Collective from now on can leverage secure and on-chain based storage services for all their data storage and hosting needs. Basically any kind of service, solution or dapp requires data storage in some way or the other. Unfortunately too many solutions still relay on web2 based storage services which hold security, censorship and single-point-of-failure risk. With Crust Networks tech stack devs have access to fully decentralized storage services natively within the OP ecosystem to achieve full scale decentralization for their data layer.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "We make Optimism widely known and understood in Thailand. \n\nWe have made contents that provide knowledge about Optimism. We have helped the Thai community to better understand Optimism, including the fundamentals of Optimism, the potential growth opportunities for Optimism in the future, various upgrades, and extensive information about the projects in Optimism ecosystem.\n\nWe are Cryptomind Research, recognized as one of the leading crypto researchers in Thailand. We are the most well known crypto research house in Thailand with the biggest community and audience. Our articles and reports are from one of the most experienced teams in crypto space.",
    displayName: "Cryptomind Research",
    impactDescription:
      "We have contributed to the development of the crypto community in Thailand, with a focus on providing a wealth of knowledge on various topics. These include explanations about different projects, the technologies, various upgrades, security aspects, etc.\n\nWe provide knowledge in many aspects, including articles, videos, books, podcasts, etc. We also organize various offline events to provide knowledge in Thailand and help building web3 ecosystem in Thailand.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "We have developed a way of practically using ZK Proof technology to execute game logic in client code that is verifiable on-chain. The technique uses Circom SNARK circuits with players' transaction call data used as signal inputs. \n\nThis minimises EVM execution and storage during mutliplayer game sessions and allows players to cheaply claim onchain rewards with proof of the session results generated in their game client.\n",
    displayName: "Client Side Proofs",
    impactDescription:
      "The kind of games that are viable for writing entirely on chain is constrained by technical limitations and transaction costs. By increasing the complexity of game logic that can be run per transaction, we are opening up the design space available to fully onchain games.\n\nFully onchain games are a growing branch of decentralised applications and a potentially massive use case for the Optimism echo system. Furthermore, as Autonomous Worlds they are a test bed for the technical and governance structures required for a future of ownerless, composable applications.\n\nPlaymint's work on Client Side Proofs was released as a public good and shared with other teams in the space. Since the time of its release the idea of running proofs on clients has been considered a practical possibility.",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "We help the DAO ecosystem benefit from accurate data. We have manually enriched 1000s of DAOs, and display their treasury, governance, and voter data on our website and API.\n\nOur direct contributions to Optimism include: \n\n- Displaying Optimism DAO at the top of our listing, helping establish it as a leading DAO.\n- Creating a platform for indexing, and self listing DAOs on Optimism.\n- Creating governance profiles for all OP Collective voters & delegates\n- Making Optimism DAO data available on our website and API, with comprehensive treasury and governance information of the Optimism Collective ecosystem. \n- The most comprehensive list of DAO tools available on Optimism. \n\nOur efforts have made the Optimism DAO ecosystem healthier, transparent and widely appreciated.\n",
    displayName: "DeepDAO",
    impactDescription:
      "1. Made crypto and mainstream media outlets, VCs, academic researchers, and everyone in the DAO ecosystem aware of Optimism DAO and its activity and contributions. \n\n2. Created profiles for 275+ DAOs on Optimism, and 88k+ voters and all delegates of the Optimism Collective, emphasizing our commitment to data transparency.\n\n3. By curating and listing 38 DAO tools available on Optimism, we display the most comprehensive resource for individuals and organizations looking to deploy a DAO on Optimism.\n\n5. Over the past 24 months, governance data on DeepDAO has been accessed by over 120,000 people, underscoring our pivotal role in creating stakeholder engagement in the DAO ecosystem. \n\n6. Our comprehensive dataset enables stakeholders access to deeper, analytical treasury and governance metrics.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "The FOAM team has contributed technically to the Optimism Collective by using the OP-Stack to fork and spin up a local OP-Devnet, 5 Proof of Location contracts have been deployed for testing. We also created a custom plug-in for Hardhat that allows developers to write and test OP-Stack rollups contracts and L1 and L2 interactions. The FOAM team has also provided developer feedback to OP Labs. Proof of Location is a new unlocked primitive for novel applications bringing mindshare, awareness and new ideas to OP.\n\nFOAM represents the first DePIN (Decentralized Physical Infrastructure Network) network to build on Optimism bringing fault-tolerant location data onchain to the Superchain. This has a signaling effect on the rest of the web3 ecosystem, that Optimism can be a hub for DePIN networks.",
    displayName: "FOAM",
    impactDescription:
      "FOAM’s contributions to the Optimism Collective are new, foundational, and complex. Proof of Location will take time for these novel investments into Optimism to materialize. With that said, there are areas where impacts can be seen.\n\nFOAM adds another fork of the OP-Stack, with OP Labs developers and core contributors receiving developer feedback from FOAM developers throughout the process.Social impact has been demonstrated in terms of views and emerging ideas and conversations on social media about location-based attestations and applications of Proof of Location. After 40k Twitter users viewed our Mirror announcements about building the FOAM Proof of Location MVP on Optimism, conversation on Twitter and Farcaster about location attestations on Optimism has been buzzing \n",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      'State channels research has long been central to the development of layer 2 scaling solutions, of which Optimism represents one of the foremost promising examples. In the last couple of years, our team completed a scheme of work relating to the "dispute game" mechanism which is central to the security and therefore the success of Optimism. This was approximately 18 developer weeks of effort and resulted in a github repo (https://github.com/statechannels/dispute-game) containing a detailed design of a "dissection" approach, and implementations in Typescipt and Solidity which were optimized for gas. \n\nWe have recently written about this work on our blog https://blog.statechannels.org/dispute-game/.',
    displayName: "State Channels",
    impactDescription:
      "We understand clabby (who has written recently on the latest modular approach to dispute games) found our repo most helpful. If his work is a continuation of ours, even in a small way, we feel that our efforts have certainly increased the efficiency and security of the OP Stack. By writing about the work on our blog, we have increased awareness of the OP Stack and its provenance.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "I'm building a platform to help businesses use Farcaster. In service of this I've interviewed over 50 companies on farcaster to learn what would help them use it more. During that time I worked on a UI prototype that I iterated on after each call to take in their feedback.\n\nI also hosted a podcast interviewing builders on Farcaster. Finally I hosted a meetup for Farcaster builders in SF and over 30 people attended.  ",
    displayName: "Crew",
    impactDescription:
      "Doing the research and design work to build a better business interface for Farcaster brings us one step closer to making B2B all happen onchain. \n\nOrganizing meetups and hosting podcasts about Farcaster helped to strengthen the community in the early days. ",
    pwCategory: "User Experience & Adoption",
  },
  {
    contributionDescription:
      "An open-source indexer acts as a bridge, simplifying blockchain data for apps, ensuring efficient data access via APIs. The Optimistic Indexer was previously used for Polynomial's Earn Vaults V2\n\nIndexer extracts and structures blockchain transaction data, pulling events from each mined block's transaction receipts, e.g., NFT transactions. Our indexer enhances this by exporting events to a MongoDB NOSQL database, built with TypeScript robustness, operating in two modes:\n\nPoint-to-Point: Indexes each new block instantly.\nSweeper: Ensures no blocks are missed.\n\nDevelopers can:\nRegister contracts, specify events.\nTrack historical/real-time events, store for querying.\nStream events to a Kafka topic.\n\nEvery blockchain app with smart contracts, benefits from an open-source indexer. ",
    displayName: "Optimistic Indexer",
    impactDescription:
      "Our open-source indexer facilitates enhanced blockchain application interactions with smart contracts. It provides efficient blockchain data access via APIs, aiding the Collective in innovation. The indexer has handled a sizable user base and events, demonstrating scalability for over 50K+ onchain users. As an open-source solution, it offers a cost-effective alternative to decentralized or in-house indexers. It simplifies transaction data and event access, enabling permissionless development. Developers and new projects, previously reliant on other indexers, benefit significantly. The indexer was employed in Polynomial's Earn Vaults v2, serving over 50K users and indexing 250K+ events, showcasing its utility. For more detailed performance insights, refer to the impact metrics section.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Since August 2022, Nodies DLB has supported development and usage of the Optimism Stack by integrating Optimism, Optimism Sepolia, and BASE blockchain into our RPC services. To ensure optimal performance across worldwide, we run load-balanced nodes in multiple geographic regions. Instead confusing Compute Units pricing, we offer a simple per request pricing that is lowest in the industry while having a decentralized and centralized offering ensuring the highest QoS in terms of latency, redundancy.",
    displayName: "Nodies DLB",
    impactDescription:
      "We began supporting Optimism in August 2022, BASE in July 2023, and Optimism Sepolia in September 2023; public endpoints are now available on nodies.app for all 3. We integrated these chains free of charge, and have served over 4 billion RPC requests to date. In all, we have served over 85 billion requests, across 19 networks, and we are constantly growing. Looking ahead, we believe the Superchain will have a wide-reaching impact on the Etheruem at large, and we are committed to investing into the future of Optimism, and we look forward to supporting all OPstack-based L2’s (Zora and Public Goods Network) as soon as they become publicly available.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "1. WTF Solidity tutorials: concise, community-reviewed, open-source tutorials for Solidity in Chinese and English. 80+ chapters, 100+ contributors, 8,400+ stars.\n2. WTF Ethers tutorials: concise, community-reviewed, open-source tutorials for Ethersjs in Chinese and English. 20+ chapters, 30+ contributors, 2,100+ stars.\n3. wtf.academy: Decentralized education platform for web3 developers. Learn, test, and get certificates: 7,000+ registered users, 20,000 monthly active users.\n4. WTF EVM Opcodes: The most comprehensive tutorial for EVM opcodes, covering all the 144 opcodes on EVM.",
    displayName: "WTF Academy",
    impactDescription:
      "1. Optimism shares the same developer stack with Ethereum. We have created one of the most impactful open-source tutorials in Solidity, Ethers.js, and more in Chinese and English. All the optimism developers will benefit from them.\n2. We will launch on-chain certificates on optimism, bringing massive developers to the optimism collective.\n3. We hosted 2 IRL Ethereum hackathons in China, bringing the optimism vibe to Chinese web3 developers.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "A media initiative under the umbrella of Bankless IMN [International Media Node], Bankless Malayalam seeks to inform and link Malayalam-speaking individuals with the worldwide cryptocurrency community.\n\nBankless Malayalam  participated in Optimism DAOs Season 4 campaign to create multimedia content in Malayalam and were able to help propagate the Optimistic Vision and mission to a community of Malayalam speakers via youtube videos, newsletters, articles, instagram reels and tweets. \n\nOur work contains around 9 videos, 11 articles , tweets , mirror articles, instagram reels etc\n\nwork link :https://docs.google.com/document/d/1NoWKSzJEai83tYX32EglWQJIHuLmv-sgF-IoRfrndvI/edit?usp=sharing",
    displayName: "Bankless Malayalam ",
    impactDescription:
      "Inclusivity , empowerment , cultural relevance, linguistic diversity , community building, education, networking opportunities are some of the impact that Bankless Malayalam tried to put forward. Within the limits of resources we have, we were able to achieve a trustful impact on audience who could be an asset to the global growth and adoption of blockchain technology.\nUnder optimism campaign we were able to help propagate the Optimistic Vision and mission to a community of Malayalam speakers via youtube videos, newsletters, articles, instagram reels and tweets. \nwe could reach around 3700+ people in last three months.\n\nreference link : https://docs.google.com/document/d/1NoWKSzJEai83tYX32EglWQJIHuLmv-sgF-IoRfrndvI/edit?usp=sharing\n\n\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Otterscan is a fast, local, private and opensource block explorer. It has a very low footprint, which allows it to run in consumer hardware, not requiring much more resources than a regular archive node.\n\nIt has a decoupled architecture, which means it is composed by an UI and an API which can be used separately. That enabled an increasing ecosystem to flourish:\n\n- Hosted APIs by Llamanodes and Quicknode\n- Community-develop Dappnode packages\n- Otterscan API implemented in Anvil, allowing Otterscan UI to be used in local development.\n- Otterscan API being used by Ape.\n- OP-Otterscan fork developed by Test-in-Prod team.\n\nThe last one enabled the OP collective to use Otterscan since the bedrock upgrade, and now Optimism can benefit from all innovations we are building in Otterscan.",
    displayName: "Otterscan",
    impactDescription:
      "Optimism has been pushing for client diversity through the OP-Stack. But it is hard to justify diversity to end users when they see no clear benefit from it.\n\nOtterscan, through OP-Otterscan/OP-Erigon brings a strong motivation for a different client to be used, along with a killer dapp that can be used with it. So, supporting Otterscan means creating more incentives to justify the entire OP-Stack architecture.\n\nDeveloper ecosystem: explorers are a fundamental piece of software for developers to understand what's happening onchain. The market leader is a closed source product; we are opensource and able to be run on developers' machines. We also promote open datasets, like Sourcify for contract verification.\n\nSupporting Otterscan means less reliance on vendor lock-in and closed databases.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Lore’s V2 helps mainstream communities access crypto superpowers.\n\nThe V2 launched on Base on 10/11/23 with 3 launch communities. 57 unique users have onboarded. The V2 was also deployed to Optimism on 10/19/23.\n\nIn July 2023, we deployed the first-ever cross-chain wallet controlled by a community or smart wallet using Lit Protocol on the Chronicle OP L2 testnet.\n\nWe learned on mainnet (with over 1000 groups) that mainstream communities wanted to engage their members to crowdfund a transparent treasury and crowdsource decisions to reward contributors, play w/ nfts, etc. But they ran into 3 issues.\n\n#1 — Transaction costs were prohibitive \n#2 — Onboarding experience was intimidating mainstream.\n#3 — Opportunities were fragmented across many chains and often only available to EOA wallets.",
    displayName: "Lore",
    impactDescription:
      "V2 is a new mainstream-friendly, Reddit-like experience for communities to access crypto superpowers at much cheaper costs on the Base/Optimism L2. \n\nNew use cases are available for mainstream & crypto communities like co-creating media, local impact programs, community programs — growing whats possible on OP and onboarding newcomers through communities.\n \nOur testnet implementation of a trustless cross-chain wallet (on Chronicle OP L2) controlled by a community or smart wallet ties the OP stack closer to supported major chains like Bitcoin and Ethereum.\n\nThis technology makes all dapps/protocols available to smart contract wallets which have had compatibility issues.\n\nOur opensource Github repo allows developers to access this technology to unlock many use cases.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      'As basic end-users of Optimism network, we regularly give our own feedback to projects supporting OP, like Tally for example. Our mission statement is "We want to build integrations through mentoring and learning.", so we identify relevant Web3 integrations to achieve, and seize these opportunities to do as much mentoring as possible. One of the project we\'re working on, Supertontine, really pushed us to mentor more than 30 devs based in several African countries. ',
    displayName: "Gov",
    impactDescription:
      'Our goal in terms of adoption is clear. It is described in Gov docs: https://w3hc.github.io/gov-docs/pilots.html. A good example of this is the DAO we\'re deploying for care givers, in partnership with legacy health insurance orgs. \n\nAt the W3HC (Web3 Hackers Collective), our mission statement is "We want to build integrations through mentoring and learning.". A lot of the projects we\'ve been working on actually need this special "lego brick". In the meantime we also train as many devs as we can on these techniques, including in Africa (Supertontine project https://github.com/w3hc/supertontine). ',
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "We have developed a User Interface for easy deployment of the OP Stack, including both Full and Archive Nodes, the Subgraph Indexer API, and more. \n\nAdditionally, we offer open-source scripts to streamline the OP Stack deployment process. \n\nBeyond this, we actively contribute to fixing bugs in the core Optimism repository and collaborate with the roll-up team to deliver the best OP Stack deployment tool.",
    displayName: "Upnode Deploy | OP Stack Deployment UI",
    impactDescription:
      "We have developed a User Interface and offer open-source scripts for easy deployment of the OP Stack including a script to launch op-erigon easily using docker compose, a docker compose script to launch any customized OP Stack chains, and an ansible script for roll-op to simplify the OP Stack deployment process published to Ansible Galaxy.\n\nWe have fixed a devnet deployment bug in the core Optimism repository.\nWe have collaborated with roll-op and fixed a critical bug in their repository.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Over recent months, we've achieved valuable milestones we're proud and excited to share:\n\nWeb3 Course in Spanish: Funded by RetroPGF 2, our web3 course covers blockchain, smart contracts, and scalability. We've launched it in collaboration with 10+ Latam communities.\n\nOptimism Videos: We've developed a bilingual video library to demystify Optimism, making it accessible to a global audience.\n\nBuilders Program: Between May-September, our program supported 10 individuals in gaining web3 skills and contributing to the ecosystem. Several have achieved noteworthy successes.\n\nStrong Team: Cryptoversidad now comprises 7 dedicated professionals, fostering a culture of value-add and collaboration.",
    displayName: "Cryptoversidad",
    impactDescription:
      "While we are very proud of our contributions and work, we know it is not perfect, we can do better and there’s a lot to learn. But in short, we’ve created valuable resources for people to learn, understand and use Optimism and with our Builders program, we supported 10 people in starting their web3 journey. We will present some numbers to illustrate our progress, but we want to leave it up to you to decide how impactful this work has been. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Week in Ethereum News (weekly newsletter) keeps you up to date on Ethereum, so you can spend less time on X (Twitter) and Reddit.\n\nCoverage includes Optimism & OP Stack, Retro PGF, stuff for developers and apps on the OP Stack.\n\nSponsor slot used to promote Retro PGF 2 & 3",
    displayName: "Week in Ethereum News",
    impactDescription:
      "Week in Ethereum News is a weekly newsletter with a strong developer focus.\n\nProvides awareness of the OP Stack & Retro PGF to application developers and OP Stack apps for end users.  \n\n406 mentions of Optimism in 116 issues (includes payment methods for job listings), Optimism first appeared in January 19, 2020 issue.  Plasma Group first appeared in February 2, 2019.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "At Gelato, we are dedicated to propelling the development and widespread adoption of Optimism. Our efforts have been instrumental in elevating the Optimism ecosystem, solidifying our position as web3's leading cloud platform. We wholeheartedly believe in the transformative potential of decentralized solutions and have relentlessly championed the growth of Optimism.\nThrough our middleware services, including Automate, Web3 Functions, and Account Abstraction, we've automated over 144,568 transactions on Optimism and enabled frictionless gasless transactions. This profound impact has driven substantial adoption and growth across a diverse range of projects. Notably, Optimism leads as the primary network for Automate task creations. Currently, 39 projects are using Gelato Services on Optimism.",
    displayName: "Gelato",
    impactDescription:
      "Since 2022, we have been at the forefront of providing a comprehensive suite of middleware services meticulously integrated into the heart of Optimism's ecosystem. \n\nThese services (Automate, Relay, Web3 Functions) have not only elevated the functionality but have also enriched the user experience for a diverse array of applications. Some of which include Kwenta, Beefy, Synthetic, Abracadabra, Brahma, Connext, r3vl, portals.fi and many more.\n\nIn our pursuit of simplifying blockchain deployment, we also introduced Gelato RaaS empowering developers to effortlessly launch Rollups with just a single click. \n\nFurther, we  allocated OP tokens received as part of a past grant to support and incentivize developers. Some past projects we've funded include Ricochet, Nexter and Blockpeer Finance.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "We created a high-quality architecture diagram of the Bedrock smart contracts with the corresponding documentation. The contribution was triggered by completing the following  Contribution Opportunity: Bedrock Contracts Architecture Diagram #48. It was done by @patitonar who is part of the Bootnode team. ",
    displayName: "Bedrock Contracts Architecture Diagram",
    impactDescription:
      "We could not track the impact of this contribution. However, if it is included as part of the official documentation and shown on the right channels, it will help others understand how the contracts interact with each other way faster and easier.           ",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "1W3 has a unique functionality of tokenizing the web templates where website templates can now be tokenized as NFTs and minted directly on Optimism. This introduces a new avenue for creators to monetize their designs and fosters a deeper integration of Optimism in the world of digital assets and design.",
    displayName: "1W3",
    impactDescription:
      "Currently, we've successfully transformed four decentralized websites into customizable templates, which have been created as NFTs on the Optimism network. Enthusiastic users are actively minting these NFTs to craft their unique websites tailored for their respective ENS domains, ushering in a new era of decentralized online presence.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "LNRZ was created by artists, for artists. We are a distribution vessel that gets great music heard, and great artists paid.\n\nOver the past 7 months, we’ve been a leading curator of exciting onchain music drops, having partnered with 60+ artists and multiple companies, including OP Collective, Base, and Zora Network.\n\nOur efforts have been successful in bringing visibility to emerging talent and their incredible music.",
    displayName: "LNRZ",
    impactDescription:
      "Our contributions and projects on the OP Superchain have onboarded both artists and collectors alike into the ecosystem. Additionally, we started releases on ETH Mainnet originally and made a complete transition to OP Stack because we believe this is where creators will flourish. We have been a beacon for other artists switching off of Mainnet.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "Baseswap utilizes Optimism's tech through Base network and aims to have a user-friendly decentralized exchange, parallel to that of the CEX experience by generating more volume and transactions than anyone else on Base chain. Focusing on perpetual trading, liquidity solutions, and innovative features. These features are all powered by Base utilizing Optimisms' tech and has impressed many developers and users with the capabilities of it so far.\n\nWith fast, cheap, safe transactions; Optimism has proven their technology compared to several other layer 2s that create a seamless experience for our users.",
    displayName: "Baseswap",
    impactDescription:
      "With Base joining optimism as Core Developers to the OP stack, it has powered developers and users to see the vision of layer 2 chains being modular, superchain type rollups. We've focused on creating tools for developers and users such as token lockers/creating a secondary swap for higher risk tokens/perpetual trading and many more. Now with Optimism supporting Base with the shared governance and revenue-sharing feedback is proof of this.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "T2LATAM has been dedicated to enriching the Optimism ecosystem by disseminating valuable and educational content through all our communication channels. Our main focus has been to promote education and the adoption of blockchain technology in a 100% organic way within the Latin American and Spanish-speaking community. We have focused on various key aspects of the entire ecosystem, such as 100% On Chain games, RetroPGF and the Evolution of Airdrops, the concept of Public Goods and Associated Projects, as well as the New Generation of NFTs on Optimism. Additionally, we have conducted AMAs and discussions with developers, seeking to provide relevant and up-to-date information.",
    displayName: "T2LATAM ",
    impactDescription:
      "T2LATAM has been dedicated to enriching the Optimism ecosystem by disseminating valuable and educational content through all our communication channels. Our main focus has been to promote education and the adoption of blockchain technology in a 100% organic way within the Latin American and Spanish-speaking community. We have focused on various key aspects of the entire ecosystem, such as 100% On Chain games, RetroPGF and the Evolution of Airdrops, the concept of Public Goods and Associated Projects, as well as the New Generation of NFTs on Optimism. Additionally, we have conducted AMAs and discussions with developers, seeking to provide relevant and up-to-date information.\n\nFurthermore, we want to thank to Carlos Melgar for his guidance and support throughout the entire process.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Base is the Collective’s first step towards the Superchain and requires a native liquidity layer to fuel its growth. Aerodrome is a public good for Base (having had no VC funding) that returns 100% of its revenue to the ecosystem. Aerodrome is Base's largest protocol, has already onboarded 20 new protocols to the ecosystem, and has generated over $7.5M in value in 7 weeks. It is designed to support public goods, as 21% of the protocol’s voting power is dedicated to supporting key ecosystem liquidity pairs, with fees created from those pairs used to direct support to public goods on Base. Further, we have improved the developer ecosystem and decentralization by bringing best practices and ensuring 3rd-party development apps function on BASE.",
    displayName: "Aerodrome Finance",
    impactDescription:
      "Aerodrome has been instrumental in accelerating builder and user adoption on Base. It has attracted $58M in TVL at a crucial period, supporting liquidity for 20 partner projects, 15 of which Aerodrome brought to Base for launch. Aerodrome allocated 31% of veAERO supply to support projects, core token liquidity and fund public goods initiatives. So far, it has provided $250k in incentives to projects and $150k in treasury to public goods. Our development team has worked closely with the OP Stack team to improve tooling for technical decentralization and performance by bringing open source software to Base and ensuring 3rd party applications such as Etherscan, Tenderly and Infura function optimally. ",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "We are seeking funding for the RareSkills Book of Zero Knowledge Proofs.\n\nIt is a completely free book with over 13 chapters that teaches smart contract developers how to implement ZK-SNARKs from scratch. We believe it is best to learn by coding rather than by learning in abstract. There is no getting around the math in the subject, but we try to narrow it down to the most essential areas and teach by showing lots of examples rather than giving proofs.\n\nThe book is already complete and we are currently working on adding sections for Bulletproofs and ZK-STARKs.\n\nWe already have evidence developers are able to use the material effectively. Here is a writeup from a developer who used the resource: https://medium.com/coinmonks/under-the-hood-of-zksnark-groth16-protocol-2843b0d1558b",
    displayName: "RareSkills Book of Zero Knowledge Proofs",
    impactDescription:
      'We published this just over two weeks ago, but here is some feedback:\n\n"In one day, I’ve caught up on so many areas which were tripping me up for a while, thanks to this resource. The people who put this together are legends"\n\n"https://www.rareskills.io/post/rank-1-constraint-system is the best article I\'ve seen about R1CS by far!"\n\nhttps://x.com/justinfrevert/status/1708490128304345134\nhttps://discord.com/channels/1060005744008769546/1062631528573706290/1161603275292946453',
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "LlamaFolio is a portfolio tool to help users track their on-chain assets.\n\nAt a high level, end users can check (for any wallet address):\n- Wallet positions: ERC20 balances\n- DeFi positions: lending/borrowing, farming, staking, claimable rewards, health factors, stable vs volatile distribution and more\n- Transactions history: transactions from/to, tokens sent/received, gas used\n- Calendar: important upcoming events like ENS expiration, DAO proposals of tokens they're invested in, tokens vest/unlock\n\nLlamaFolio is open source and accepts contributions from all developers to help gather the most accurate on-chain info and be as transparent as possible.",
    displayName: "LlamaFolio",
    impactDescription:
      "- LlamaFolio supports 38 DeFi protocols on Optimism for a cumulative TVL of $577m (according to DefiLlama).\n- Our API is being used by LlamaSwap (DEX aggregator) to retrieve users tokens balances (>$726m volume on Optimism and Base).\n- Open sourced our API (http://github.com/llamafolio/llamafolio-api) (8 contributors)\n- Open sourced a registry of popular tokens (https://github.com/llamafolio/llamafolio-tokens) (~4k download on npm)\n- Open sourced an EVM indexer (compatible with Optimism)(https://github.com/llamafolio/evm-indexer) (20+ forks on github)",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "We're shifting from discussing crypto's potential global impact to demonstrating it through action. Our approach spans education, content creation, and real-world impact. We seek funding for expansion and supporting the GreenPill Network. Our initiatives include:\n\nEducation: We have the GreenPilled book on regenerative cryptoeconomics (multiple languages), a podcast, YouTube channel, a blog, local impact guides and other resources. We create onboarding resources for regen web3, Optimism and the PGN ecosystem.\n\nManager Round Training: We provide free training to support the growing demand for Gitcoin Grant Stack, helping communities fund public goods via QF rounds. Grants can be executed on OP and PGN.\n\nLocal Chapters: We have 22+ global chapters hosting web3 workshops and events.",
    displayName: "GreenPill Network",
    impactDescription:
      "The GreenPill book has over 50,000 downloads and has been translated into 12 languages, the podcast has over 230,000 downloads, the YouTube channel has 883 subscribers and 26408 views and our community has over 730 members. \n \nWe’ve built out applications, created wallets, ran QF rounds, created content and hosted trainings that brought new users to the Optimism ecosystem. \n\nWe’ve created over 22 chapters globally that run onboarding workshops, run web3 regen events, drive local impact, help onboard NGOs into web3 and work to teach people how to use crypto to regenerate the world. To date, we’ve hosted over IRL 73 events. \n\nAll of these data points are focused on providing people with the tools needed to regenerate the world using crypto and building in ecosystems like Optimism. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Our newsletter issues regularly mention Optimism and OP Stack-related news and developments. We explained the complicated terms and dynamics to our subscribers and helped them understand OP Stack's vision. Spreading the Optimism and OP Stack word on Twitter, Substack and other social media.",
    displayName: "L2 Planet",
    impactDescription:
      "As a delegate, L2 Planet voted for 50+ proposals with a voting power of 2.5-3k $OP. We explained the reasons for our voting choices and regularly posted them on our social media. Also, explained to the readers why attending Optimism Collective is so important.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "- First Meta-aggregator available on optimism\n- First Perp aggregator available on optimism\n- First Free RPC Meta-aggregator available on optimism\n- Launched an intent-based gasless swap platform for optimism which batches orders together\n- Launched our Magma testnet which is a modified OP stack app chain for perps and controlled MEV",
    displayName: "UniDex",
    impactDescription:
      "- Drove over 2k users to optimism for our trading platform\n- Over 3.5 Billion RPC relays for our free public rpc aggregator\n- over 250m in trading volume facilitated on optimism\n- Increased awareness and pushed the adoption of OP stack chains with our deployed Magma testnet & Molten Mainnet\n- Contributed to the OP stack ecosystem by building a new approach to sequencers that similar perp dexs looking to launch their own OEV/MEV controlled app chain can utilize",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "As stated in my profile, I am a blockchain researcher helping to demystify digital assets and blockchain technology for new and experienced users. My biggest focus has been performing quest campaigns around the ecosystem, as this is a perfect way for new users to get a better understanding of different projects and how to utilize digital assets, DeFi, and NFTs to their advantage. I have uploaded around 20 videos covering the Optimism Network and Ecosystem that includes an extensive multi-part series on the Optimism Quests from September thru November 2022.",
    displayName: "The Blockchain Report",
    impactDescription:
      "As mentioned in the first description, I have covered the Optimism network and ecosystem quite extensively. I will include links to each of my videos, as well as the viewer count for each one. I have had quite a lot of engagement on youtube and twitter from new and experienced users asking for help navigating campaign tasks and projects on Optimism.",
    pwCategory: "Content Creation & Media",
  },
  {
    contributionDescription:
      "Ethereum Lima is a community located in Lima, Peru. We are focused on face-to-face and virtual education. At Ethereum Lima we want to further boost the community in Peru. This will be achieved through workshops, courses, spaces, blog posts and other media content about the Ethereum Ecosystem.\n\nWe believe that everyone should have access to this technology and we are interested in having a larger community of web3 developers in Peru. We are part of the global Ethereum community, we are in contact with groups similar to ours around the world and we make joint collaborations.",
    displayName: "Ethereum Lima",
    impactDescription:
      "We've guided individuals from their initial stages in comprehending Ethereum and its potential benefits in their lives. Subsequently, we've facilitated their transition towards solutions such as Optimism as a Layer 2.\n\nOur wealth of experience encompasses the orchestration of workshops, discussions, and virtual events tailored for our community. \n\nTo this day, we've effectively coordinated more than 25 workshops, discussions, and online events. These gatherings consistently draw in a substantial audience, averaging 20 attendees per workshop.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Artemis has built a comprehensive data platform providing a fundamental look at application level activity on the Optimism platform. We track daily active addresses, transactions, gas usage, application level stats (activity by category) and developer activity, and standardize the data so its comparable against other blockchain networks. ",
    displayName: "Artemis Analytics",
    impactDescription:
      "Our work has helped highlight the top categories and applications that have developed on Optimism (e.g. Perp Protocol, Worldcoin, Kwenta) while also providing a standardized way for developers and applications to understand activity on Optimism vs. other EVM compatible chains",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "Our goal is to promote community conversations about innovative regenerative solutions enabled by Web3 technology.\nWe have onboarded new people to the optimism ecosystem teaching them how to create a wallet and import the Optimism Network, we also grant them with a few dollars to have the initial funds for gas fees and savings.",
    displayName: "ReFi Medellín",
    impactDescription:
      "We have onboarded new people to the optimism ecosystem teaching them how to create a wallet and import the Optimism Network, we also grant them with a few dollars to have the initial funds for gas fees and savings, this new people learn about blockchain using the Optimism network.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "DEX Aggregator: We integrated Optimism with 18 DEX liquidity sources, ensuring that end users can access these platforms efficiently and trade assets at the best price. This integration not only increased the trading volume on these DEXs but also attracted more users to the Optimism platform.\n\nCross-Chain Swap Aggregator: We developed a cross-chain swap aggregator that attracted users from 7 networks to Optimism. We integrated 4 widely used bridge solutions and utilized our own swap function to enable 1 click cross-chain swap at the best price.\n\nSwap Product Suite: We offered developers and projects on OP ecosystem a series of products to complete inner-protocol integration to offer swap features, including swap function API/SDK/Widget, limit order API/SDK, and cross-chain swap API. ",
    displayName: "OpenOcean",
    impactDescription:
      "OpenOcean collectively executed $64m+ volume on OP with 110k+ transactions\nOpenOcean has served 61k+ unique wallets on OP \nIntegrated 18 liquidity sources including Aave V3, BeethovenX, Clipper, Clipper RFQ, Curve, Hashflow, KyberSwap, Mummy, OPX, Overnight, SushiSwap, Synapse, Uniswap, Velodrome, Velodrome V2, Woofi, ZipSwap across the ecosystem, the most of any aggregator.\nPartnered with leading DeFi protocols in the ecosystem offering products from our swap and builders suite, such as MetaMask (most competitive price among all swap solution providers) , DeFiLlama Swap, Sonne Finance, OPX Finance, Mean Finance, Axelar, UniDEX, Interport, Li.Fi, XY Finance, Symbiosis.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "We built Hardhat, one of the most widely used smart contract development environments. Hardhat allows users to compile, test, debug, deploy, and operate their Solidity smart contracts. We collaborated with the OP team in different ways to improve support for the OP community, as well as their own internal usage of the tool.\n\nWe built Hardhat for VSCode, an extension that adds advanced Solidity editing assistance to VSCode. We also repurposed the LSP backing it and built coc-solidity, which provides advanced Solidity editing assistance in Vim as well.",
    displayName: "Hardhat",
    impactDescription:
      "- HH was used to build the OP protocol.\n- The OP team used HH to bootstrap the platform. They built plugins so HH would work with OP, which made it the first dev tool available for OP users.\n- OP team built Smock on top of HH to make contract testing easier.\n- The community used HH to build projects that run on OP.\n- The OP team used HH to operate the protocol.\n- The OP team used HH to deploy the Optimist NFT.\n- The OP team used HH to deploy the Bedrock contracts.\n- Optimism SDK uses HH to operate the protocol.\n- HH is used in teaching materials and guides for OP.\n- The OP community uses Hardhat VSCode and vim's coc-solidity for coding in Solidity.\n\nhttps://nomicfoundation.notion.site/HH-RetroPGF-3-impact-proof-links-38f52d0c59744a6d98642340c1525304",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Holonym is a zero knowledge identity protocol deployed on Optimism. Holonym's mission is to build open source tools for decentralized identity and secure key custody. Our focus is on digital rights, user-centric privacy controls, and transparent governance to accelerate open civics and decentralized science (DeSci). The OP ecosystem is our chosen infra to accomplish this mission.\n\nAlmost 18,000 users have added themselves to the Holonym identity mixer on the OP blockchain. Of these, over ~9000 have minted ZK SBTs proving that they are a real unique person, and not a bot. As part of this work, we've deployed smart contracts such as ZK SBT proof smart contracts, a large anonymity set, example issuers in rust, a DeSci identity registry, and privacy relayer contract.",
    displayName: "Holonym",
    impactDescription:
      "The Holonym protocol has provided the following impact:\n\n* 18,000 users verified in an on-chain anonymity set, providing strong user privacy without the risk of biometrics\n* 9,000 ZK SBT proofs of uniqueness minted, reducing the Sybil threat\n* Developer tooling for deploying ZK credentials on Optimism with example issuers for any credential with examples written in rust\n* R&D with post-quantum ZK research company BTQ to upgrade OP ZK circuits with quantum resistance.\n* Open Civics tooling to democracies on-chain with ZK proofs for voting and legal status\n* ZK reputation tooling for DeSci researchers with on-chain OP attestation\n* Snapshot integration to allow for OP DAOs with Holonym support for 1-person, 1-vote strategies. ",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "flink is a consumer app / interface for Farcaster, which has identity ownership stored on-chain on OP mainnet. flink has been responsible for onboarding the majority of Farcaster uses by a wide margin since Farcaster moved to permissionless signups. This has in turn generated revenue for the protocol, all while being a self-funded side project.\n\nflink is differentiated from other clients by providing value to the existing web3 userbase. flink allows for anyone to simply connect a wallet and onboard to Farcaster by registering on OP mainnet. flink also provides rich embeds for users to transact (such as mint NFTs) through flink across a number of chains with the users sharing the links earning referral rewards through supported platforms like Zora and mint.fun.",
    displayName: "flink",
    impactDescription:
      "flink has been built with a focus on crypto-native consumers, many of which have already been a part of the Collective. Therefore, the main contribution is allowing these members to be able to permissionlessly onboard to Farcaster and participate in discussions through a client that is more familiar to their day-to-day web3 experiences. flink also allows for those who onboard to have a richer social experience by providing transaction embeds directly within the client experience for discovery and minting on shared NFTs.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "Mission & Ethos: We simplify grant applications on Optimism, focusing on accessibility for small teams and individual devs. We champion 'cooperation over competition' in public goods. We only get paid if we help a project win a grant.\nScope: Our clients include public goods initiatives and the broader blockchain community benefiting from transparent grant distribution.\nKey Challenges Solved:\nGrant Access: We simplify the often complex grant landscape.\nOpportunity Awareness: We keep clients informed on all grant options.\nEcosystem Growth: We match projects to grants, aiding Optimism's expansion. \nDeep Ties to Ethereum and Optimism: Our roots are deeply embedded in both the Ethereum and Optimism ecosystems, we serve as a conduit, connecting value-aligned projects to OP opportunities.",
    displayName: "Public Goods Grant Management",
    impactDescription:
      "Grant Support: We've been key in securing multiple Optimism Grant proposals, reinforcing our commitment through pro bono support for select applications. \nPartner Success and Ecosystem Amplification: Our strategies have led to significant OP gains for our partners, extending and enhancing the reach of the Optimism ecosystem. \nCommunity Engagement: Our 37 weekly open meetings since February have served as crucial platforms for fostering dialogue and collaborative problem-solving. \nDiverse Collaboration: These meetings have included participation from BrightID, Commons Stack, DAOstar, Giveth, GravityDAO, Metagame, Pairwise, Praise, Regen Score, Token Engineering Academy, Trusted Seed, Unitap, and more, contributing to our collective impact.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "- Our partnership with Zora has led to monthly collective drops, generating so far an impressive 23,000 mints and $26,000 in revenue for artists. \n- Hosted pioneering panels in collaboration with renowned NFT creators like @botfrula, and curating innovative physical and tokenized exhibitions. \n- Tokenized artworks from indigeneous cultures featured at the Carrousel du Louvre, preserving indigenous cultural heritage. \n- We've educated more than 150 artists and connected with over 500 crypto enthusiasts through our free 'Arts and W3B' workshops since late 2022, fostering meaningful connections with influential Latin American NFT artists. \n\n\nNewtro Arts is empowering Latin American artists, preserving cultural heritage, and leaving an enduring legacy in the digital art and blockchain world",
    displayName: "Newtro Arts",
    impactDescription:
      "Through our monthly output of content and workshops, we are steadily onboarding artists to the Zora blockchain. We have already succesfully help migrate 60 top of the line latin american Tezos artists to the Zora blockchain. +23000 mints, +26000 total sales.\nThe Zora team has demonstrated to be deeply satisfied with our efforts, coordination and responsability. A contract has been signed to keep deploying Latin American collective drops in Zora. We are also negotiating a more artistic content related support with Zora.\nWe also won an Energy DAO (Zora blockchain) grant to make our web3 website, actually in early development.\n\nWe have demonstrated to be a well organized, hard working artistic collective, with a true organic relationship with the latin american artistic NFT ecosystem.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "Across is a cross-chain bridge that connects Optimism to other EVM chains, including Ethereum mainnet, Arbitrum One, Polygon, zkSync Era, and Base. Our unique architecture allows users to receive funds in less time and at a lower cost than many other bridges connected to Optimism, including the Optimism canonical bridge. We are also the largest 3rd party bridge in the Optimism ecosystem to use an optimistic settlement mechanism. Across is secured by UMA's Optimistic Oracle, and has withstood multiple attempted attacks without missing a beat. \n\nThe Across DAO also recently voted on Optimism as the second hub for our ACX token. This has led to nearly $500k in sticky TVL migrating to this pool in Velodrome:\nhttps://velodrome.finance/liquidity?query=ac  ",
    displayName: "Across Protocol",
    impactDescription:
      "We are now consistently supporting around $2MM in daily bridge volume heading TO Optimism and have a cumulative volume bridged TO Optimism of $407,991,721. We've seen 89,977 unique users bridging TO Optimism with Across. \n\nIn a direct comparison of bridge fees between third-party bridges, Across saves users between 32 - 75%. This tweet thread by Across founder, Hart Lambur, describes how Across saves users by being extremely gas efficient in design (https://x.com/hal2001/status/1712839125051863252?s=20). \n\nAdditionally, Across consistently provides users with the fastest fill times. In fact, the only competitor that beats across in L2 - L2 fees has a huge time cost tradeoff, which can be seen in the spreadsheet provided in the metrics section below. ",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "TurboETH is a web3 build system that helps developers scaffold a full-stack web3 application in minutes. Instead of manually integrating the protocols and tools that you need into your application, TurboETH lets devs easily pick the tools they want to use via our CLI, and automatically adds the integration alongside helper functions to the project. \n\nWe’ve also launched an open-source web3 component library called BUIDL. The library is an extension of shadcnUI, and gives devs pre-built components for their most common crypto interactions.",
    displayName: "⚡️ TurboETH",
    impactDescription:
      "Our goal is to streamline the full-stack web3 application development process. In our experience, building a full-stack application is often a mess that leaves developers juggling dependencies, SDKs, and APIs. \n\nTurboETH helps application developers by making it extremely easy to add a new decentralized protocol or web3 service to your app. Over the course of this year, we’ve created a go-to destination for builders who want to make the jump from smart contracts to full-stack applications. And with ~80% of our builders being new to crypto or more junior developers, we believe that TurboETH is not only increasing the number of active builders in the Optimism Collective, but also helping to retain developers in their transition from launching contracts to building applications.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Merkly is a multifunctional Omnichain solution, designed to simplify DeFi for individuals of all knowledge levels. \n\nWe aim to familiarize even non-crypto natives with LayerZero, Layer 1 and Layer 2 chains via various tools —  all unified into one Super-App. \n\nOur tools allow users to effortlessly connect and onboard to over 30 different chains (including Optimism), which promotes network growth.\n\nOur current product suite:\n• Gas Refuel: Get native gas tokens on Optimism and +30 chains\n• Bridging of ONFTs/Tokens: Bridge NFTs to Optimism and +30 chains\n• Activity Checker: Discover over 20 Omnichain dApps to interact with\n\nAll our features are harnessing LayerZero's technology to ensure robustness, safety and high performance.",
    displayName: "Merkly",
    impactDescription:
      "Making it easy to connect to almost any chain benefits not only end-users, but also native dApps and the network itself.\n\nFor end-users:\nOnboarding them seamlessly to Optimism and other chains, allowing them to try out any dApp residing on the network. Our 'Checker' introduces them to a comprehensive list of apps to discover.\n\nFor Optimism:\nThis ultimately promotes network activity and traffic on the native chain, proven by our impact metrics.\n\nMerkly has:\n• 2620 daily active users transacting on Optimism \n• Over 6000 daily transactions on Optimism\n• Over 139K unique addresses transacting on Optimism in the last 90 days\n\nWhile also being the #9 most used dApp on Optimism.\n\nCohesive breakdown of metrics: https://docs.google.com/document/d/1sadllTl9EY4Llb-4tuyKFkV5f2pwxy4Es66oCiUZ4VU/edit\n",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "Llama Risk assesses asset risks in DeFi, notably stablecoins, RWAs, and liquid staking derivatives. Our main aim is to keep Optimism and Ethereum users informed of these risks.\n\nOur contributions to the Optimism ecosystem have been marked by vital collaborations. Partnering with Curve DAO, we assessed the risks of their gauges on Optimism. Similarly, our collaboration with Prisma Finance enabled us to highlight risks for LSD assets such as stETH, rETH, and various other LSDs on Optimism.\n\nThrough our efforts in sharing on-chain asset data and associated risks, Llama Risk actively empowers the Optimism community, aiding users in making informed choices.\n",
    displayName: "Llama Risk",
    impactDescription:
      "Llama Risk actively evaluates DeFi asset risks, especially stablecoins and liquid staking derivatives, within the Optimism ecosystem. We've assessed the system architectures for these assets, allowing users a simple way to understand protocols/tokens design.\n\nOur proactive insights have led to timely warnings for teams about design flaws and potential risks, ensuring the ecosystem remains robust and safe for DeFi users. Through collaborations with Curve DAO and Prisma Finance, we've demonstrated our commitment by assessing the risks of assets like stETH and rETH on Optimism.\n\nBy consistently sharing in-depth data and risk assessments, Llama Risk strengthens the Optimism community, guiding users and teams toward informed decisions.\n",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Web3Native is a public good project that manages one of the largest Web3 Grants databases. With the grants database, web3 startups can identify the possible funding routes for their projects in a single platform.  The web3Native team thus helps Web3 founders \n\n1) go-to grants database. Find out grants by several categories, blockchains, tags and apply to the most promising ones. \n\n2) Accelerator database: Similar to grants, our team also gathered data on Web3 support programs like accelerators and incubators. \n\n3) Advisory: Help projects identify the perfect grants. We don't charge any fees for our services. Its public good.\n\n4) VC List: 174+ crypto-focused VCs to apply for funding. This also lists portfolio startups, network founders so that applicants can identify warm contact methods.",
    displayName: "Web3Native",
    impactDescription:
      "We help projects with our knowledge and expertise in the grants field, free of cost. To this extent, monthly more than 11750 users on the site find grant programs that could benefit their project.\n\nA few of the startups that we have advised have also gained grants from OP. For example Robo labs was one of the projects we referred to apply for OP grants.\n\nThe voluntary nature of the project and no fee involved means we can only dedicate limited resources to our efforts. Hence we never properly documented the number of projects that have secured grants directly or indirectly through help from Web3 Native.\n\nOur accelerator and VC lists provide projects with additional options to get support when grants might not be the best route to get funding.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "We are a team of researchers and developers, dedicated to the Ethereum ecosystem. We are recognized for having partnered with some of the most successful and promising projects operating on Optimism, such as Yearn, Connext and HAI; and have collaborated closely with the Optimism team for several projects (Smock and our soon-TBA Prophet).\n\nWe believe that true DeFi should be open, permissionless, and decentralized. To realize this vision, we have contributed to the creation of public goods over time. For retroPGF3, we're submitting our set (12) of freely available open-source libraries and tools that facilitate the secure process of creating protocols for permissionless finance. These tools meet the highest security standards and industry best practices.",
    displayName: "Wonderland",
    impactDescription:
      "Our contributions have had a positive impact on builders scene, being used by developers on Ethereum, Optimism, and any other EVM ecosystem.\n\nWe have built great utilities such as our Solidity Hardhat Boilerplate to public good protocols such as Sidechain Oracles; but our list extends to 12 projects and tools ready to use.\n\nWe are proud that several of our repositories reach hundreds of stars and dozens of forks, as well as dozens and hundreds of dependencies from our libraries, which motivates us to continue pursuing what the future of finance and Web3 should be: permissionless, open-source, and decentralized.\n\nMore details are in our Notion page, attached to this application.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "- We organize events about web3 and blockchain in universities, mention and invite new users to Optimism's public discord.\n\n- We organize technical workshops on blockchain, L2, Optimism for the developer community.\n\n- We create educational content about optimism, to understand more about its governance, op stack, tools to support more web3 creators.\n\n",
    displayName: "Andino - Talent in technology",
    impactDescription:
      "We conducted a full day workshop on the optimism ecosystem and its opportunities where participants were taught the benefits of using the optimism network to build Dapps, grant opportunities, grants and funding.\n\nWe were able to onboard new users with a small airdrop of 5$ in OP, to mine a NFT and have OP tokens. \n\nOn the other hand, we have conducted a university competition on business ideas and development of blockchain projects where 10 projects are using the Ethereum network and Optimism. \n\nWe are focused on onboarding new builders so we organize hackathons and collaborate with universities, coorporate, foundations to bring new projects on the network.\n\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Blocktrend has been a contributor to the Taiwanese community's understanding of the Optimism ecosystem since early 2022. Through our original content, podcasts, and communication, it has simplified complex blockchain concepts and promoted governance participation.\n\nTaiwan's crypto participants view Blocktrend as a leading advocate for advancing Web3 public goods funding mechanism and actively promoting community governance participation. Our efforts have played a crucial role in bridging the gap between the Chinese-speaking audience and the world of Web3, making it an essential resource for those interested in blockchain technology and Optimism.",
    displayName: "Blocktrend (區塊勢)",
    impactDescription:
      "My contributions have had a substantial impact on the Optimism Collective in Chinese community. I authored various articles and engaged in podcasting to amplify the importance of the digital public goods, encouraging users to actively participate in Optimism ecosystem. Additionally, I explored RetroPGF concepts, underlining its commitment to supporting public goods.\n\nFor example, my extensive coverage of RetroPGF included an article on 'Simulated Voting.' This aimed to provide readers with a firsthand understanding of the challenges faced by badgeholders when evaluating 195 projects within a tight timeframe. Additionally, I underscored the distinction between retroactive funding, which rewards based on outcomes, and traditional investments, which are based on expectations of future impact.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "We believe we've made the following contributions:\n\n-Raised awareness for OP Stack\n-Assisted in onboarding new users and keeping them informed\n-Presented on-chain tools\n-Monitored security-related news and alerted the community\n-Promoted the bedrock upgrade\n-Advocated for the emergence of BASE\n-Promoted Optimism-related podcasts\n\nOptimismGuru was founded one year ago. At that time, Optimism stood out as one of the most promising chains, but it lacked the number of users it deserved. The Layer2 concept was new, and people approached it cautiously. Market conditions were also unfavorable, but another critical factor was the absence of centralized information sources.\n\nOptimismGuru was created to provide consistent and reliable information to users, accelerating the onboarding process.",
    displayName: "OptimismGuru",
    impactDescription:
      "-Raised awareness for OP Stack\n-Assisted in onboarding new users and keeping them informed\n-Presented on-chain tools\n-Monitored security-related news and alerted the community\n-Promoted the bedrock upgrade\n-Advocated for the emergence of BASE\n-Promoted Optimism-related podcasts\n\nApart from the stated contributions above, we have connected with the communities of university students in Bogazici University, ITU and Marmara University in Turkey and raised awareness about blockchain and Optimism network. We don't have a tangible proof of this contribution but some of the students participated in the blockchain clubs in their schools, some of them invested in the chain and some of them started working with us in the blockchain community management field!",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "Proofivy has provided scientists at the Lab for Germinal Biology at Utrecht University (https://heesters.gitlab.io/) tools to safeguard their IP and data using Optimism.\n\nAdditionally iPhone users have used Proofivy to commit data hashes to Optimism without needing a web3 wallet.\n\nIn both cases users have been able to safeguard IP and use Optimism with easy to use apps.",
    displayName: "Proofivy",
    impactDescription:
      "Proofivy has provided a novel crypto application, onchain IP, for Optimism users.\nProofivy has onboarded scientists to Optimism. Feedback from them has been great.\n\nProofivy's iPhone app has expended the reach of Optimism to users without a crypto wallet.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Grappa aims to be the base and immutable layer for settling derivatives with expiries, e.g. options, spreads and exotic options, on all EVM chains. By having a shared settlement layer, Grappa makes sure different option products have minimum friction when it comes to liquidity exchange.\n\nBy being the base layer, Grappa will focusing on bridging liquidity between protocols, building cross chain engines, and liquidity exchange layer on top of all engines. This will help all option projects on Optimism with better user experience.",
    displayName: "Grappa Finance",
    impactDescription:
      'We believe that we need to re-build DeFi from scratch, which involves re-building lots of "shared infrastructure" in common that can be shared between protocols, which are immutable, secure, and work as a "primitive".\n\nGrappa aims to be the base immutable layer for options, and allows everyone to build option engines that can easily be connected to other products, result in a better liquidity access, and overall better UX for all option protocols.\n',
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "Tockable is a zero-code platform that allows creators to create/test/publish their own **Dynamic** NFT minting dapps on OP, where minters can design and mint their desired tokens, instead of getting some random JPGs.\nIn Tockable, creators only upload their own image layers (instead of random PFPs). According to the layers, Tockable produces a suitable online-app that allows users to select and compose their desired design before minting.\nCurrently, the market of traditional NFTs (random-static jpgs) has no more demand. On the other hand, the creation of dynamic and creative NFTs is currently only limited to developers. Tockable intends to make this possibility more easily available to the public and creators\n",
    displayName: "Tockable.xyz",
    impactDescription:
      "Talkable is a newly launched platform that is completing its testing stages and has not yet reached the mainnet stage. Hence, its impact on Optimism Collective has not yet been determined, and unfortunately, we cannot provide details in this regard at the moment.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "Foundry is a robust, fast, and modular toolkit for Ethereum application development, written in Rust. It comprises several components: Forge, an Ethereum testing framework, Cast, a versatile tool for interacting with EVM smart contracts, sending transactions, and retrieving chain data; Anvil, a local Ethereum node akin to Ganache and Hardhat Network; and Chisel, a Solidity REPL. \nFoundry is designed to be highly configurable, it supports fast and flexible compilation pipelines, automatic Solidity compiler version detection and installation and caching and parallel compilation, among other features. \nTests can be written in Solidity. It offers fast fuzz testing with shrinking of inputs and printing of counter-examples. \nFoundry also provides fast remote RPC forking mode",
    displayName: "foundry",
    impactDescription:
      "Optimism's smart contracts are currently tested in Foundry. As the premiere Solidity testing tool, smart contract products built on OP Mainnet and other OP Stack chains are also tested with Foundry. We think Foundry as critical infrastructure for the OP ecosystem's in-so far success and for the future.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Being optimistic without humor is like being pessimistic without the ability to make everyone around you deeply depressed. If the goal is to build a thriving, happy Optimism community, it is certainly going to require some funny stuff. Otherwise, we’re going to end up with a bunch of depressed builders who wonder why the heck they are working so hard in a bear market when they could just strike up a Faustian deal with Wells Fargo, Google, or Facebook.\n\nThe Rug’s content has been offered for free via near-daily Twitter posts, and more recently, self-published articles on Paragraph that only require a free subscription to read. Prior to using Paragraph, The Rug published its articles on Mirror, and has used Optimism for minting NFTs of the articles on both platforms since February 2022. \n",
    displayName: "The Rug",
    impactDescription:
      "We have evidence that The Rug has made a positive impact on Optimists. As early adopters on mirror.xyz, we procured a custom subdomain (therug.mirror.xyz) and were off to the races. We’ve been minting exclusively on Optimism since February 7th, 2022, with 92 satirical news articles, over 625 limited edition collects, generating 1.27 ETH selling at .002 ETH for each NFT. \n\nThe Rug directly enhances end-user adoption of Optimism by driving the collection of NFTs on-chain. Indirectly, The Rug is building an Optimisitc community through humor and satire, making poignant observations about crypto, and enhancing the experience of DeFi users more broadly. ",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "RadicalxChange Foundation works to sketch the shape of tomorrow's institutions. We work not only with technologists, but also with academics, governments, and civil society to inspire concrete, yet big-thinking experiments that help unlock possibilities for a fairer society. Our wok has been instrumental in not only inspiring, but also proving out the viability of using techniques like quadratic funding and quadratic voting in real situations of governance. Today we are doing fundamental research in currency systems, data regulation / exchange systems, AI governance and more. We are helping to lead a multi-institution initiative focused on rethinking institutions of property, from land to IP. We are collaborating with major artists and to bring partial common ownership to the art world!",
    displayName: "RadicalxChange Foundation",
    impactDescription:
      "The PCOArt system we're building will bring new attention to Optimism. Our pathbreaking work in quadratic funding, soul bound tokens, and more has left positive impacts on the general culture of Optimism Collective. We expect our work to continue to enrich this ecosystem and are proud to support it!",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Yoki Finance has built a Web3 Dollar-Cost-Averaging app as a public good. It is an open, gasless, and free solution that could be used by retail users, projects, and devs.\n\nThe \n\nThe application creates an auto-buy smart contract for the user and automates the swaps according to the chosen frequency, sum, and pair.",
    displayName: "Yoki Finance",
    impactDescription:
      "We have created a framework that could be used across the Optimims ecosystem.\n\nThe use cases could include (but are not exhausted) the following:\n- Project website integration with specific ERC-20 asset\n- Wallet integration to provide users with DCA opportunity\n- DEX integration to provide users with DCA opportunity",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Our newsletter focuses on Optimism and its governance, providing key information about L2 solutions. Our purpose is to educate and guide a wider audience on the Optimism ecosystem and the overall concept of L2. We seek to be a trusted source of knowledge in the community, fostering a deeper understanding of how Optimism improves the scalability of Ethereum and how L2 impacts the blockchain ecosystem at large. Our mission is to ensure that community members are informed and empowered to participate in this exciting technological development, driving the adoption of scalability solutions like Optimism and promoting decentralized governance",
    displayName: "Encriptados",
    impactDescription:
      "When publishing, uploading or writing articles about Optimism, L2, RetroPGF and others, the content can reach more people than the newsletter can reach. This information, being in a newsletter, can be transformed into a Twitter thread and thus share more information and reach many more people.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Token Engineering (TE) is a new crypto-native discipline combining computer science, economics, game theory, data science, and more. It is relevant for any protocol or DApp aiming for a successful token network. In this early stage of the field, it’s a problem for projects to find the right experts, and it’s challenging for token engineers to acquire and prove expertise. \nSince October 2022, TE Academy has built a comprehensive study program for aspiring token engineers available as a public good, and brought TE to major crypto events. Today, more than 3000 students are building their professional careers with NFT proofs on Optimism. For the first time in history, we are witnessing the emergence of a new engineering discipline on-chain - on the OP Mainnet!",
    displayName: "Token Engineering Academy",
    impactDescription:
      "Since October 2022, TE Academy’s comprehensive study programs have brought over 3000 active users to the Optimism Collective (A, B). \nAfter months of studying, students have minted 1000+ NFT proofs reflecting personal achievements. Students keep these account-bound NFTs forever (C).\nWe’ve launched a new course in Sept 2023 specifically on Optimism NFTs & “NFT-based Reputation in Web3” (D).\nTE Academy brings diversity to the Optimism Collective by facilitating 46 peer-2-peer study groups across 14 languages (E).\nOur #TEWeeklyReads newsletter shares the most relevant token engineering developments with 5K+ subscribers with an 40% open rate, and features Optimism in every edition (F).\nOptimism ambassador Fuji AR’s TE Academy feature was also awarded first place by the Optimism community (G).",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Woosh is a payments dApp where you can send funds to anyone who doesn't have a wallet. We automatically create a wallet for new users when they claim the funds someone sent them. We use ERC-4337 to abstract away as much of the complexities of crypto as possible. We sponsor all of the users transactions with ZeroDev's paymaster. The funds from this grant will help pay for future users transactions.",
    displayName: "Woosh",
    impactDescription:
      "Through the approach of Woosh, we are not only introducing a user-friendly payments dApp but also actively fostering the expansion of the Optimism Collective. By simplifying crypto complexities through the utilization of ERC-4337 and sponsoring user transactions via ZeroDev's paymaster, we are effectively onboarding non-crypto users onto the Optimism network. The funds from this grant will not only facilitate the seamless operation of our dApp but also contribute to the continued growth and adoption of the Optimism ecosystem, thereby amplifying its impact and reach within the global community.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Interface is a consumer app that enables discover of onchain activity and content. We have been contributing to Optimism primarily by 1) enhancing discoverability of content created on Mirror and Zora protocol; 2) driving activity to corresponding platforms and chains (Optimism, Base, Zora); 3) providing a distribution channel for artists creating on top of Optimism, Base, Zora; 4) creating own onchain content.",
    displayName: "Interface",
    impactDescription:
      "Interface has been the go-to place for Mirror article explorations since the feature launch in June this year. Users get notified when there favourite creators drop new publications, while also have a feed of recommended articles to explore. Besides, we have been supporting Base on Mirror from day one.\n\nWhen it comes to other media types, the new cryptomedia feed has been getting good traction despite being a very new feature. Users get to explore and be first to mint the most interesting and relevant content, that they otherwise might not have discovered at all. At the same time, Interface serves as a distribution channel for creators that are now able to reach new audiences.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "The OP Stack is built to be modular, and allows any EL to plug as long as it's following the spec. We proceeded to adjust Reth, a new EL for Ethereum, to be compatible with the OP Stack by adding support for Deposit transactions, the new Engine API modifications and more. This brings down OP Stack chain sizes down by >5x and provides improved runtime performance which we have yet to benchmark concretely vs OP Mainnet.\n\nhttps://github.com/paradigmxyz/reth/pull/4377",
    displayName: "OP Reth",
    impactDescription:
      "These contributions will hopefully enable a more performant OP Stack which will ultimately allow the Optimism Collective to scale its vision to the masses. We intend to continue maintaining this work and make sure that it keeps up with any changes that the OP Stack has over the next years.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "We have consistently been strong advocates and enthusiastic supporters of the OP ecosystem, as well as all the endeavors being developed within it. \nOur commitment includes keeping users informed through tweets, threads, and mirrored posts, ensuring comprehensive coverage of updates, news, campaigns, and the network's ongoing progress.",
    displayName: "Alpha Insiders",
    impactDescription:
      "We have consistently been strong advocates and enthusiastic supporters of the OP ecosystem, as well as all the endeavors being developed within it. \nOur commitment includes keeping users informed through tweets, threads, and mirrored posts, ensuring comprehensive coverage of updates, news, campaigns, and the network's ongoing progress.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "We recently launched Gaslite Drop.\n\nGaslite Drop is a smart contract and dapp designed to facilitate hyper efficient bulk transfers of ERC20, ERC721, and Native Network Tokens.\n\nGaslite Drop is entirely open source and welcomes community contributions.\n\nThis is our first public good of many that has been deployed on Optimism..",
    displayName: "Gaslite",
    impactDescription:
      "Gaslite Drop improves the the experience of rewarding and incentivizing your community.\n\nWe allow user's to effortlessly, safely, and efficiently facilitate transfers to their end users.\n\nThrough our easy to use UI and highly optimized Yul based airdrop contract anyone can bulk transfer assets to anyone.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "With the high volume of threats targeting the OP Collective in 2022, ChainPatrol set out to reduce these threats and protect the Optimism community. \n\nChainPatrol's solution tracks phishing threats and prevents Optimism users from having their wallets drained.\n\nChainPatrol started protection for the Optimism Collective in December 2022 and has since blocked 502 Online Threats in Total.\n\nChainPatrol turned on our auto-detection systems and began reporting malicious URLs to our Wallet Network to have threats blocked in minutes versus days. (Coverage to 30+Million Users of MetaMask, Coinbase Wallet, Phantom, and 20+ Wallets).\n\nChainPatrol also manages the tracking and full takedown process with domain hosting providers and social platforms;  X/Twitter, Discord, Telegram, YouTube and Reddit.\n",
    displayName:
      "ChainPatrol - Real Time Security protecting the OP Collective",
    impactDescription:
      "Early detection and fast response to online threats across leading Crypto Wallets protects the OP Collective and the wider crypto community from losing millions in digital asset value.\n\nChainPatrols Platform automates off-chain monitoring, saving the Trust & Safety, and Community moderators time with reporting, and takedown activities.\n\nChainPatrol is an added defence layer and takedown system mitigating the financial cost and impact of weekly wallet drainer and phishing attacks.\n\nChainPatrol data protects millions of users through leading crypto wallets. Visitors to the malicious site on both desktop and mobile devices will be shown a warning, within minutes of the threats detection.\n\nChainPatrol Public Security Portal and Discord Bot make it easy for community members to report threats",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "We've addressed the scarcity of accessible and credible web3 resources by crafting educational series specific to Optimism's layer 2 solutions, making it easier for users and developers to make informed choices. To combat the issue of centralized information, our comprehensive and unbiased articles offer a well-rounded view of Optimism's capabilities and ecosystem. Lastly, our outreach has been instrumental in raising awareness and accelerating the adoption of Optimism, ensuring that a wider audience understands its transformative potential. ",
    displayName: "Bankless Publishing",
    impactDescription:
      "We've published 32 on-chain articles in our Crypto Basics Series, demystifying layer 2 complexities, leading to informed choices for projects building on Optimism. By minting NFTs of this series on Optimism, we’ve demonstrated OP's scalability and utility, enticing developers and users alike. Our outreach has extended to a global scale with over 3 million reads (on all our BP content) across 168 countries, boosting Optimism's brand recognition and usage worldwide. The hOPe Series, available as free mints on Optimism, has enriched our community’s understanding of the ecosystem’s nuances, accelerating its adoption. Optimism-focused newsletters further supported this objective. Beneficiaries range from novice users to developers and orgs contemplating L2 solutions.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "At Optimism Español we have continued to work tirelessly during these months to continue spreading the Optimism Vision and the benefits of OP Mainnet to as many people in Latin America as possible.\n\nAfter having benefited during the RPGF2 round, we have not given up and we continue to press the accelerator, thus reinforcing our commitment to the entire Optimism Collective.\n\nAmong the activities we carry out are: translations of articles and newsletters, creation of original content, Twitter Spaces with different communities in LATAM, technical workshops, IRL talks, and presence at events.",
    displayName: "Optimism Español",
    impactDescription:
      "We value the importance of the OP Stack and have been actively working to spread its knowledge. We organize technical workshops in Spanish to empower more developers building on Optimism.\n\nTo boost governance in LATAM, we delegated 50% of our treasury to delegates from the region. We have participated in talks, and in face-to-face events, and translations to bring governance news to Latin America.\n\nWe want more people to know and use Optimism. We have organized Twitter Spaces with communities in several countries. We represented Optimism at the ETH Argentina conference and collaborated in translating Subli's - The Optimist, a newsletter about the Superchain.\n\nWe are committed to promoting Optimism in LATAM, offering education, and participating in governance.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "EAS has been natively integrated into the OP Stack codebase and linked by two predeploy addresses for registering schemas and making attestations onchain or offchain. All future OP Stack chains automatically inherit the contracts at Genesis. \n\nThese contracts unlock new opportunities for builders passionate about identity, reputation, governance, voting, social & beyond.\n\nDid you know?\n- EAS powers the AttestationStation V1\n- RetroPGF profiles & badgeholders are attested to using EAS\n- Gitcoin Passport uses EAS to attest to stamps & scores on OP\n- Base uses the predeploy contracts\n+ more use cases\n\nWe've also contributed:\n- An OP Attestation Explorer\n- An SDK + API to get devs building faster\n- No-code tools for making schemas & attestations\n- Educational content & docs for attestations",
    displayName: "Ethereum Attestation Service",
    impactDescription:
      "EAS has been natively integrated into the core OP Stack infrastructure as two predeploy addresses and has positioned OP as the ecosystem leader for attestations. \n\nEAS has enabled:\n- RetroPGF profiles to be attested to\n- OP Badgeholders to be attested to\n- Gitcoin Passports to push their offchain stamps & scores onchain to Optimism.\n- Guild to query OP attestations using the EAS GraphQL API and gate communities/chats.\n- Base to provide attestations to their builders by using the predeploy contracts\n- Attestations to be verified on the OP explorer\n- Builders to build faster with our comprehensive docs\n+ more\n\nAttestations are inspiring builders to explore new use cases around identity, reputation systems, governance, registries, voting, social networks, and more throughout the Superchain. ",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "UTU Protocol has deployed on Optimism to allow Optimism users to review and endorse any arbitrary web domain or blockchain address with a portion of their reputation (UTT) and see on-chain endorsements and feedback (video, text, stars, badges) about the same from their personal social networks. When UTT-staked endorsements help others find services they like (and also endorse with their UTT), the original endorsers earns reputation and $UTU rewards.\n\nUTU on Optimism also lets D-apps built on Optimism integrate UTU's on-chain feedback and reputation mechanism natively in their product on Optimism, staking UTT (our reputation token) and collecting $UTU rewards on OP for staked endorsements that help others get good outcomes.",
    displayName: "UTU",
    impactDescription:
      "UTU lets OP D-apps natively integrate UTU's API/SDK as an on-chain feedback & reputation mechanism, staking UTT (our reputation token) & collecting $UTU rewards, both on OP. UTU helps their users connect, send, swap, stake, and borrow with confidence. UTU brings its own ecosystem of partners (65+), devs (30+) and projects (7+) building on/with UTU, to OP.\n\nOP Users can review and endorse any web domain or blockchain address on OP and see on-chain endorsements and feedback about the same from their social networks. OP users have access to feedback & UTT Endorsements left by UTU users on other chains. Users can and earn UTT and UTU Coin on OP for their contributions to good outcomes for others, based on their endorsements. UTU brings users (1k mainnet, 10k testnet) and community ~20k.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "Made it easy to manage token-gated communities:\nWe provide a simple & easy platform for managing token-gated communities. In total, we support 53k communities across 26+ networks. Collab.Land's support for Optimism since Dec 2021 has facilitated the growth of 253 OP communities.\n\nEncouraged adoption & awareness of Optimism:\nCollab.Land is the most popular token-gating community platform on Optimism. We airdropped 515M COLLAB to 97k+ users, including 62.6M COLLAB to 46 communities on OP. Many users bridged ETH and communities deployed SAFE multisigs to receive tokens. Our newsletters on Substack share project updates; we required communities to publish COLLAB token claim proposals on Mirror & many users collected those posts on OP.\n\nCrypto Culture:\nVideos promoting crypto community culture.",
    displayName: "Collab.Land",
    impactDescription:
      "## Community Token Gating & encouraging Optimism adoption\n### Optimism mainnet\n- 243 communities \n- 352 Optimism TGRs\n- launched OP gating Dec 2021\n### BASE\n- 17 communities\n- 20 BASE TGRs\n- BASE gating went live Sept 2023\n\n## Token Claim\n- 97k+ wallets airdropped 515M COLLAB on OP\n- airdropped 67.6M COLLAB to 46 communities on OP\n    - including Yield Guild Games SEA, Bankless DAO, and Clipper\n- 112k wallets currently holding COLLAB on Optimism \n\n## Optimism Awareness & Usage\n### DAO Announcements \n- Mirror\n    - 18k+ Mirror NFT collects on OP\n    - 6k+ subs\n### Collab.Land News \n- Substack newsletter sharing updates in the Collab.Land ecosystem and beyond\n    - 76k Newsletters delivered\n    - 43k read\n    - 5k+ subs\n### Lets Form Group - crypto community culture\n- 6k+ Youtube views",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "\nBridging VitaDAO to Optimism carries significant benefits for the Optimism community. By integrating the $VITA token, Optimism showcases its adaptability to diverse projects, enhancing its position as a versatile layer 2 solution. VitaDAO's primary focus is on funding early-stage longevity research. By facilitating this bridge, the Optimism community gains the opportunity to govern a longevity DAO. This empowers the community to actively participate in decisions related to longevity research funding, fostering collective responsibility. In essence, this integration not only strengthens Optimism's ecosystem but also provides its community with a unique role in shaping the future of longevity research.",
    displayName: "VitaDAO",
    impactDescription:
      "\nBridging VitaDAO to Optimism carries significant benefits for the Optimism community. By integrating the $VITA token, Optimism showcases its adaptability to diverse projects, enhancing its position as a versatile layer 2 solution. VitaDAO's primary focus is on funding early-stage longevity research. By facilitating this bridge, the Optimism community gains the opportunity to govern a longevity DAO. This empowers the community to actively participate in decisions related to longevity research funding, fostering collective responsibility. In essence, this integration not only strengthens Optimism's ecosystem but also provides its community with a unique role in shaping the future of longevity research.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "We have built and launched VMEX Finance. A lending protocol that uses isolated pools to support the responsible expansion of collateral in DeFi. Our focus is to enable staked LP & vault positions as collateral — giving users an easy way to borrow against their unique assets. \n\nSo far, we have partnered and/or built support for Beethoven & Aura, Velodrome, Yearn,  Curve, and Beefy\n\nOptimism projects may struggle to get protocol and deposit assets listed on lending markets due to having more “complex” assets. VMEX provides a live sandbox for assets to build a track record as quality collateral.\n\nOur goal is to be the go-to partner for protocols that want their assets listed on a lending protocol and to provide users a safe and reliable place to borrow against their staked LP and vault assets",
    displayName: "VMEX Finance",
    impactDescription:
      "We created an opportunity for Optimism protocols, who otherwise wouldn’t be able to, to get their protocol and deposit assets listed on a lending protocol. Additionally, VMEX is a reliable & risk focused place for users to borrow against and maximize rewards on their staked LP and vault assets. This adds desired utility that is beneficial to both the protocols and users.\n\nSo far we have built out support for Beethoven, Aura, Velodrome, Yearn, Curve, and Beefy LP / Vault positions and have more in the works! \n\nAlthough we may have a small base of TVL now, we are just starting to ramp up our marketing and plan to roll out an incentives program to onboard new users",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "JEFE TOKEN makes significant contributions within the Optimism ecosystem by seamlessly integrating Optimism's layer 2 blockchain technology into web3 E-sports. Through this integration as rewards & the optimism explorer API communication, allows JEFE TOKEN to bridge communities & layer 1 chains, providing a mobile game. Leveraging the power of JEFE TOKEN in OPTIMISM, it pushes the boundaries of scalability & efficiency while fostering immersive gaming within the Multiverse of jefe zombie on iOS & Android. JEFE TOKEN is at the forefront of this dynamic convergence, uniting the worlds of blockchain, art, & community creating a new era of web3 gaming, setting the stage for a groundbreaking & vibrant gaming ecosystem & social impact  with virtual reality & augmented gaming tech with JEFE OP. ",
    displayName: "JEFE TOKEN",
    impactDescription:
      "JEFE TOKEN advances in the Optimism ecosystem with our Layer 2 smart contract deployment. We keep our vibrant community informed through TikTok live sessions, showcasing the impact of uniting assets across gaming and communities.\n\nOur commitment extends to educating users weekly on blockchain development within the Optimism stack, empowering our community.\n\nWeekly rewards in JEFE Optimism tokens bridge our Layer 2 blockchain to existing contracts, enhancing the gaming experience. These tokens unlock exclusive Multiverse mobile game, JEFE Zombie, skins, using Optimism's attributes for additional points.\n\nJEFE TOKEN redefines traditional gaming, creating a seamless and rewarding experience in the Optimism ecosystem, merging technology, community, and innovation.",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "Earlier this year, IntoTheBlock (ITB) added Optimism to its analytics platform. The release included analytics for Optimism, Base, and related Op Stack projects. Specifically, ITB Optimism analytics include over 50+ indicators covering 30+ Optimism-native tokens. \nITB’s investment for incorporating Optimism into its platform was approximately $490,000 including infrastructure, engineering, research and marketing resources:\n●\tData infrastructure and the ETL pipelines to index the Optimism blockchain. \n●\tComputation infrastructure used to calculate the indicators regularly. \n●\tEngineering resources required to build the data, analytics, APIs and frontend interfaces. \n●\tResearch resources used to model the indicators. \n●\tMarketing resources used to regularly publish content.",
    displayName: "IntoTheBlock Optimism Analytics",
    impactDescription:
      "IntoTheBlock (ITB) has built analytics for 30+ projects building on top of Optimism mainnet and Base. These indicators include key metrics regarding network activity, performance and overall activity. By offering these metrics and promoting them we have helped create both retail and institutional demand for Optimism, receiving positive feedback and users looking to contribute to the Optimism collective.\nIntoTheBlock has extensively shared Optimism research through marketing avenues. IntoTheBlock’s research team conducted two webinars focused on the Optimism and Base ecosystems with hundreds of attendees. Several indicators regarding Optimism were shared in the ITB newsletter with 30k+ subscribers. Multiple tweets about Optimism were shared with ITB’s audience of 50k+ followers.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "As the premier native lending protocol on Optimism, Sonne Finance has significantly bolstered the Optimism ecosystem, solidifying our status as the world's largest OP lending market. Our collaboration with Velodrome Finance stands as a testament to innovation, illustrating how Velodrome can serve as a liquidity hub, inspiring other protocols to launch on Optimism. Embodying the true spirit of \"optimism\", we've championed community growth: from assisting newcomers with wallet setups, sharing knowledge about other protocols, to helping developers aspiring to make their mark on Optimism.\n\n",
    displayName: "Sonne Finance ",
    impactDescription:
      "A year since its inception, Sonne Finance has soared to become the 6th largest protocol on Optimism, boasting a TVL of $29M (source) and leading as the top lending protocol with $42M in Total Borrows. We've seen 6,400 unique wallets stake SONNE, and our footprint extends to Base with an impressive $8M TVL. Together with Velodrome, we've not only championed native solutions on Optimism but also paved the way by demonstrating how to launch on Velodrome, Optimism's liquidity center, even open-sourcing our process for all.",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "We recently released a data tool called cryo. cryo is the easiest and fastest way to extract datasets from Optimism nodes into standard formats like parquet or csv.\n\n- cryo can extract more than 30 types of datasets from any Optimism-based node, including contracts, erc20 transfers, state diffs, and address appearances\n\n- cryo can be used from the command line, from rust, or from python. In each case, cryo is the fastest tool for bulk data extraction thanks to use of rust and modern data engineering best practices\n\n- cryo makes it feasible for individuals to run an entire crypto analysis pipeline on their laptop instead of depending on 3rd party services\n\n- cryo is 100% free and open source under an unrestricted Apache/MIT license. You can do pretty much anything you want with it",
    displayName: "cryo",
    impactDescription:
      "Until recently, most people believed that the only way to analyze historical crypto data was by using centralized, closed-source, proprietary infra like Dune or BigQuery. However, cryo makes it easy for anyone to run a complete open-source crypto analysis pipeline on their own laptop. This presents a huge cost savings and shifts the process back toward the crypto principles of decentralization and open-source.\n\nEven though cryo is still in beta, many teams have integrated it into their backend infra. This includes data platforms (CoinMetrics), security firms (shield3), news outlets (TheBlock), MEV teams (private), and on-chain protocols (Zora).\n\ncryo also powers the Paradigm Data Portal, which is the only place to download complete open-source historical crypto datasets without sign-up.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "Nimbus is a client implementation for both Ethereum’s consensus layer and execution layer that strives to be as lightweight as possible in terms of resources used. This allows it to perform well on embedded systems, embedded devices – including Raspberry Pis and mobile devices.\n\nHowever, resource-restricted hardware is not the only thing Nimbus is good for. Its low resource consumption makes it easy to run Nimbus efficiently in L2 networks with higher throughput that may require additional workloads on the same server.\n\nNimbus is trying to accelerate the development of L2 protocols such as OP through the ongoing work on EIP-4844.",
    displayName: "Nimbus",
    impactDescription:
      "We have collaborated with the Optimism team on the design and implementation of Ethereum Improvement Proposal (EIP) 4844, which aims to reduce transaction fees by up to 100x. We aim to enable Optimism to realise its full potential when it comes to improving the scalability and cost-effectiveness of the network.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Contributed to UX research for multiple Applications on OP. These deep dives into the applications experience resulted in improvements and valuable feedback for those apps/teams.\n\nI included images and solutions to issues / potential improvements I found. I believe it's important to provide solutions to the bugs found.\n\nProjects I did a review for can be seen on the github ecosystem contributions issues. \n- Hop Exchange UX Audit\n- PoolTogether UX Audit\n- Beefy UX Audit",
    displayName: "Squirtle0x",
    impactDescription:
      "UX is something that can be overlooked in web3 applications, as we have seen repeatedly in the past couple years. Frontends that give users access to incredible DeFi services do tend to be geared towards power users and lack intuitive user flows.\n\nBy reviewing apps UX the impact I have is to simply provide a better experience for people of all levels using these apps.\n\nIf a user who has never used DeFi before lands on a page and notices UI bugs and confusing interactions the trust in the underlying tech can be tarnished. Even if the tech under the food is incredible it won't matter because the first impression was not a 10/10.",
    pwCategory: "User Experience & Adoption",
  },
  {
    contributionDescription:
      "The wallet user experience for interacting with Layer 2s was a major hinderance to their adoption. By default, wallets only supported mainnet or required users to manually add an RPC to interact with L2s. Wallet balances were siloed by network, causing friction when using multiple chains and leading many users to perceive their OP assets as secondary to their assets on mainnet.\n\nSince 2021, Rainbow Wallet has prioritized its support for L2 networks and introduced new design patterns that dramatically improved their usability. Rainbow was first to offer native L2 support (without having to manually add RPCs), implement frictionless in-app swapping and bridging between networks, and establish a multinetwork UI that consolidates mainnet and L2 assets - now the UX standard for many wallets.",
    displayName: "Rainbow Wallet",
    impactDescription:
      "- Rainbow's multi-network UI and native L2 token and NFT support improved UX for OP users, which, only recently, became the industry standard.\n- Rainbow has evangelized Optimism to users and creators, helping drive a 295% increase in Rainbow Wallet interactions with OP Stack chains since July\n- Today, 34% of Rainbow's connections, 40% of RainbowRouter’s USD volume and 70% of bridges are to OP stack chains. \n- 28% of distinct Rainbow users transact on OP stack chains (+62% since January), surpassing the proportion of users on mainnet - 18.6%. \n- “Rainbow World,” Rainbow’s contribution to “Onchain summer,” was minted 10k+ times, remains the 2nd highest traded NFT on Base, continues to drive onchain actions via the character creator and brought new cool users to OP Collective's NFT scene",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Synapse Labs has built on top of the OP Stack key new pieces of infrastructure as well as migrated key pieces of the Synapse vision to the Superchain. More specifically Synapse has helped : \n\n- Research and develop novel ways to incorporate multi-chain into the Superchain vision  \n- Create Better RPC infrastructure, and indexing as a public good through OmniRPC\n- Development of SYN OP Stack, an implementation of the OP Stack with a built in native bridge\n- The deployment of the first SYN OP Stack chain, Synapse Chain, an Optimism L2\n- Education and Developer support for new developers to build on top of and expand the Superchain ecosystem\n",
    displayName: "Synapse Labs",
    impactDescription:
      "Synapse Labs is driving more developers to the Optimism ecosystem and making it the center of all Layer 2 activity. So far Synapse labs has:\n\n-Created a developer framework that makes it easier than ever to deploy a chain with a native bridge \n-Offers open source solutions for explorers and and indexing services\n-Deployed the first SYN OP Stack chain, Synapse Chain\n~2m transactions on Synapse chain Testnet with > 2k addresses\nEncouraged projects to move to the Optimism ecosystem\n",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Interport simplifies the process for capital migration from other network towards Optimism. \nIt allows for directional bridge or cross-chain swaps which are performered via meta-aggregation router and hence guarantee the best rate. \nInterport is using own stable pools to perform bridging of USDT and USDC, as well as route cross-chain swaps.\n\nInterport solves two major problems for users who want to migrate capital to Optimism. \n1. Allowing for easy, fast and secure bridging. \n2. Finding the best route for any swap. \n\nTherefore, users may easily trade any token from any supported chain to any token on Optimism in one simple transaction.",
    displayName: "Interport Finance",
    impactDescription:
      "As a result of Interport activity and contribution on Optimsm networks, users are able to access Optimism ecosystem with no obstacles for capital migration. \n\nSo far Interport helped 3200 unique wallet addresses to migrate capital to Optimism with total amount of 25,500,000 USD.\nBeing live for less than 2 months and without much of marketing exposure yet. \n\nAs a result of own stable coin pools, Interport also creates more of sticky TVL on Optimism network and contributes to daily on chain trading volumes.",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "We produced a Q3 report on Optimism analyzing fundamental metrics including:\nfinancial metrics (mcap, supply, inflation, revenue, staking yield) network metrics (active/new addresses, transactions, fees, avg block times), ecosystem (TVL USD/OP, active vs new contracts, DeFi vs NFT activity, decentralization (active validators, delegator stake, Nakamoto coefficient). This report was sent to 350,000 crypto native builders and institutional investors. \nWe also completed comprehensive retrospectives incentive analyses \nWe also built and maintained subgraphs at the network level and for individual ecosystem projects. ",
    displayName: "Messari",
    impactDescription:
      "The actionable insights generated from the quarterly report informs existing stakeholders on the economic, financial, and social health of Optimism, whether it’s a surge in transaction volume across a certain market or the implications of a major upgrade or governance decision. In addition, by reaching most of the top crypto native builders and institutional investors in the space it increases the likelihood of more projects building on Optimism while bringing more capital to the ecosystem. \n\nThe incentive analysis provided strategic insights into the successes and shortcomings of the historical incentives in order to inform future OP distributions \n\nThe subgraphs provide valuable community infrastructure to access important on-chain data ",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      'Optimism Turkey is a volunteer community that encourages Turkish communities to use the Optimism network by promoting the Optimism ecosystem and creating content loyal to the "Optimistic Vision" philosophy.\n\nWe engage in various activities focused on the Optimism network and its projects, including producing videos about Optimism native protocols, promoting Optimism by participating in events, helping organize events like the Onchain Summit, creating content on topics specific to Optimism such as the OPStack and Superchain ecosystem, encouraging the use of the network, and translating all of Optimism\'s publications into Turkish.\n',
    displayName: "Optimism Türkiye",
    impactDescription:
      "We have become the first and only Turkish resource for those who want to contribute to the Optimism and Superchain ecosystem in Turkey. We have helped people make developments in the ecosystem through these resources. \n\nWe created Spaces and facilitated access to the ecosystem by translating resources such as Op Radio, Optimism Weekly Recap, Governance Cycles, and The Optimistic Newsletter into Turkish. We also shared knowledge by addressing important topics such as Optimism Governance and Op Labs.\n\nWith content produced by 11 people, we believed in the Optimistic Vision and worked to share this vision. We became the only local Optimism native community in Turkey, contributed to the organization of events such as the Onchain Summit, and shot videos reaching thousands of people.\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Pin Save is a decentralized image, video sharing and content aggregation platform where users can not only control the content but also the platform itself.\n\n1. The decentralized feed reinforces the discovery of content and feedback.\n2. Decentralized Identity (ERC-725), which provides anonymity and data protection.\n3. Upgradeable, resilient, and more open decentralized storage.\n4. Smart contracts to securely serve web experiences directly to users.",
    displayName: "Pin Save - decentralized Pinterest",
    impactDescription:
      "Pin Save contributions collectively contribute to a stronger and more user-centric community within the Optimism Collective. By empowering users, enhancing privacy and security, and providing a resilient infrastructure, Pin Save has become a valuable platform for decentralized image and content sharing. The impact of your contributions has transformed Pin Save into a trusted and engaging platform, benefiting both users and the Optimism Collective as a whole.\nPrimarily, the integration of Decentralized Identity (ERC-725) within Pin Save has provided users with enhanced anonymity and data protection. This crucial feature fosters trust and privacy within the platform, giving users peace of mind when it comes to sharing and interacting with their personal information.",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      'BrightID enables individuals to authenticate themselves as unique through the creation and analysis of a social graph by those who already know them. It requires no personal data from users other than the anonymous graph of connections.\n\nBrightID is a public good that protects the access of individuals to other public goods.\n\n*It has been used widely in the Ethereum community & in applications in the Optimism Ecosystem.\n\n*It was the first verification used by Gitcoin Grants, and helped develop the "trust bonus" which became Gitcoin passport. This includes the GG18 round run in Optimism.\n\n*It is the only Sybil-resistant attestation used by CLR.fund for its MACI protected Quadratic voting.\n\n*BrightID protects the Optimism Gas Tap of Unitap helping onboard brand new users.\n',
    displayName: "BrightID",
    impactDescription:
      "BrightID has been securing Optimism Collective member projects against Sybil-attacks.\n\nUnder the idea that identity is a human right, It was one of the first executions to give people ownership over their identity and give everyone the potential access to the baseline rights of access to public goods. Its development has been guided by three principles: \n\nPrivacy: BrightID doesn’t record any personally identifying information.\nAccessibility: Everyone in the world can join, participate and get their fair share of rights.\nOpenness: Everything about the public good is open to the public, to use, or to steward.\n\n100,000+ unique individuals have created their profile and 16 apps have integrated BrightID as a non-intrusive alternative to KYC to “prove uniqueness”.\n",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "Having chosen several directions: Education, Media, DAO, we created the largest Russian-speaking community of the Optimism ecosystem.\n- Education\nWe created educational courses - Optimism School for aspiring Contributors. These courses include 5+ hours of video material and notes.\n- Media \nOrganized AMA sessions with the largest RU-media on Telegram (20k followers). Also held local AMAs with the project's ambassadors, and actively developed a Twitter account with 20+ threads.\n- DAO: \n at the time of filling out the application - we are trusted by 93 people with their votes totaling 38k and these numbers are growing every day.\n\nCreators (Discord's names): \n- dragunovski (Ambassador)\n- zefirium.eth (Ambassador in training) \n- romstedi (Influencer & DAO creator) \n",
    displayName: "Optimism_CIS",
    impactDescription:
      "- Collective Governance: at the time of filling out the application - we are trusted by 93 people with their votes totaling 38k and these numbers are growing every day.\n- End User Experience & Adoption: AMA sessions with Influencers reaching over 50k users. Creating educational material with over 1k views and writing Twitter posts. \n\n* CIS - union of nations, comprising 9 countries with a total population of more than 236 millions people",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We have built an Optimism Community Dashboard to serve the Community. By having all the latest Optimism-related social feeds, blogs, on-chain metrics and access to dapps themselves, community members can quickly stay informed and interact with the Optimism ecosystem.\nOur complete proposal was published on Optimism Grants here: https://app.charmverse.io/op-grants/page-13585052320942648\nWe were redirected to RPGF's through feedback.",
    displayName: "Mike-Alphaday",
    impactDescription:
      "We envision the Optimism dashboard being the go-to resource for community members since the entire Optimism ecosystem is aggregated into one UI on Alphaday. This makes it a very attractive on-boarding tool for new developers as the dashboard will contain beginner resource material, documentation, grants, bounties, open positions in community projects, on-chain tools and much more.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Mechanism Library: Extensive catalogue of coordination mechanims & case studies (including OP mechanisms) that serves as a go-to hub for a diverse audience.\n\nMechanism Impact Measurement: Forkable workbook to model ROI of mechanisms, including cost of capital & demand forecasting. Employed by Gitcoin (OP Stack user) to model staking mechanisms.\n\nMechanism Canvas: Visual template for designing systems in a way that ensures shared understanding of system architecture & goals.\n\n7 seminars (online & IRL) teaching tools & practical strategies for designing better mechanism design.\n\nOpen Source Primitives:\nSlashing Engine to solve sybil attacks in Gitcoin Passport & other claim verification problems\nSmart Treaties to enable Zuzalu & other communities to scale through bilateral staking commitment",
    displayName: "Mechanism Institute",
    impactDescription:
      'The Mechanism Library enhances understanding of how mechanisms can solve problems critical to OP Collective, such as governance, public goods funding, and value capture. It also promotes OP-specific case studies: the dual-house governance sytem, attestation station, and airdrop.\n\nThe Mechanism Impact Measurement tool has empowered enabled Gitcoin (OP Stack user) to make data-driven decisions in designing their staking mechanics. This example that can be utilized by other OP Stack users & by Optimism itself.\n\nThe Mechanism Canvas & Seminars fill an educational gap, fostering better-informed development & design choices by mechanism designers.\n\n"Slashing Engine" & "Smart Treaties" can inspire innovations that drive utility of OP based tools & communities, starting with Gitcoin & Zuzalu.',
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Given that much of the content surrounding Optimism is primarily in English, a German-focused resource fills a gap, that I consider important. Currently, I have about 60 members in my community that I educate about L2s and that bought and delegated OP because of me. My plan is to extend the knowledge that I share on web3ma.de to add more value = impact. \n\nAdditionally, I act as a delegate and currently represent 58 addresses. By regularly voting on proposals, I believe I contribute to the health and robustness of OP's governance. I do this because I believe in Optimism, not because I'm trying to get a grant :) ",
    displayName: "web3made",
    impactDescription:
      "The measurable impact that I have created is 56 people buying OP token and delegating them to my address 0xtassilo.eth. The impact that is not measurable is how I helped them to do so and helped them understand Optimism as a network and all its possibilities (i.e. using velodrome)",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We currently have 3 tools available for Optimism:\n1. Perpetual Comparison page of Node Providers for Optimism Mainnet\nContinuous latencies & errors in 1-minute intervals \nGlobal, Continental, Regional x 30min, 24h, 10days, 30days\nSynthetic monitoring optimized for Web3 (similar to Datadog)\n\n2. GNC (Global Node Comparison)\nAd hoc latencies for “any” 2 Optimism endpoints submitted by the user\nFrom 27 global locations in 30 seconds\nCompatible with Optimism\n\n3. Directory of 45 providers that support Optimism networks & Library of 30+ Optimism public endpoints\n",
    displayName: "CompareNodes",
    impactDescription:
      "Our tools bolster the Optimism ecosystem by enhancing transparency and decision-making, facilitating daily data updates. Promoting decentralization is central to our contribution, allowing diverse providers, including smaller ones, to be visible and considered equally, fostering an inclusive ecosystem. Our independent efforts have expanded provider listings beyond official Optimism documentation, offering broader insights and choices, aiding companies in making informed decisions for building on Optimism.\n45 Providers listed on CompareNodes while only 15 in official Optimism docs",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Being one of the first APAC-focused communities to drive awareness and builders growth for Base and OP ecosystem by leveraging our existing 2,000+ builders network in APAC DAO and our sister community ABC Station of 13K developers through a well curated education workshop and office hours series.",
    displayName: "APAC DAO",
    impactDescription:
      "Generate awareness and strong interest in building on Base - one of the most important partnering ecosystems to Optimism. With a combined approach of education, office hours, AMA and community engagement, we were able to gather in total 200+ audience (150+ for workshop and 100+ for office hours)  to understand about how to build on BASE and demonstrate their use cases on Base.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "1. retroPGF Content Bounty Program\nThe Ambassador program executed a mission proposal to create content for retroPGF round 2 recipients in order to drive awareness for retroPGF on Optimism. Ambassadors were able to 4x-12x all milestones while generating over 1.6m views across Twitter and Youtube. We consider these accomplishments as going above and beyond the mission proposal and are therefore including it in our retroPGF application\n2. Project Marketing Support: CryptoRefills & Clique\nThe Ambassador program partnered with two projects to provide marketing support for those projects\n\nMore Details:\nhttps://docs.google.com/document/d/1dhzGsDPLmBjJNoJZqHWcU98YxCn7aTvQpDB3CqL-Xb4/edit?usp=sharing\n\nAbout Ambassadors: https://community.optimism.io/docs/contribute/contribution-path/Ambassador-req",
    displayName: "Optimism Ambassadors",
    impactDescription:
      "The Ambassador program executed a mission proposal to create content for retroPGF round 2 recipients in order to drive awareness for retroPGF on Optimism. Ambassadors were able to 4x - 12x all milestones while generating over 1.6m views across Twitter and Youtube. We consider these accomplishments as going above and beyond the mission proposal and are therefore including it in our retroPGF application. \n\nIn addition to this we have provided marketing support for two projects (Clique and CryptoRefills). The CryptoRefills marketing support provided much needed marketing support to a project whom recently launched on Optimism.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "2 things: E2PG and RLPS (hosted nodes optimized for indexers)\n\nE2PG is an open source Ethereum to Postgres indexer. It connects to an Ethereum source, parses blocks, transactions, and logs and maps data onto PG tables. A single E2PG can index events across many L2s into a single Postgres database. E2PG connects to Ethereum by 1 of 3 ways: JSON RPC API, full node file system (fast), or using RLPS (slower than full node but faster than JSON RPC).\n\nRLPS is an HTTP API that delivers compressed RLP data for: blocks, transactions, and logs designed specifically for indexers. Index Supply hosted RLPS runs on many chains including the following OP L2s: 10, 420, 8453, and 84531. Index Supply operates a full nodes (op-geth, op-node) for each hosted RLPS API.",
    displayName: "Index Supply",
    impactDescription:
      "E2PG has enabled several projects (popular NFT websites, erc4337 wallet, MUD games) to index data across many OP L2 chains.\n\nRLPS was one of the first hosted node providers for the bedrock release. Since then we've made it dead simple to boot up an E2PG indexer and have it be connected to Optimism and Base to start indexing data across those chains. To my knowledge, E2PG + RLPS is the quickest way to get data from multiple L2 chains into a Postgres database. I don't believe any of the hosted API providers are as easy to setup or are as fast as RLPS to index historical data.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Zuzalu has significantly aided the Ethereum ecosystem by 1) addressing critical crypto challenges and bridging with technologies like AI and Synthetic Biology; 2) organizing mini-hackathons for open-source projects; 3) offering an open-source guide for \"pop-up\" village setups—already adopted by four communities; 4) serving as a practical testing site for industry projects like 0xParc's ZuPass and PSE's ZuStamps; and 5) using RetroPGF with Hypercerts to devise sustainable financing models for Zuzalu's impact.",
    displayName: "Zuzalu",
    impactDescription:
      "Zuzalu addresses intricate crypto and tech challenges, disseminating insights through 80+ virtual talks. Our mini-hackathons foster open-source tool development, and our playbook guides web3 communities in creating real-life hubs, of which four have already been created and there are another two that have been planned. Serving as an innovation lab, we test projects like ZuPass for wider adoption like for DevConnect. The Hypercerts RPGF experiment saw over 235 addresses funding 21.10 ETH, rewarding volunteer work. Meanwhile, Tripsha launched a novel open-source pop-up cities ticketing solution with crypto payments used by over 280 people. We have heard from many participants that Zuzalu was both life and career changing. In a way that catapulted people forward many years in their career. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We’ve partnered with over 25+ artists across 87 music releases on Optimism. \n\nThese releases have done over 59 ETH in volume across the network including several culturally significant albums.\n\nWe've developed and implemented several new minting mechanisms including:\n\n- Splits - We’ve instantiated 50+ splits contracts\n- Mint All - A contract to mint multiple collections for TK’s “Eternal Garden”\n- Lottery - A randomizer for WesGhost EP “Faceless”\n- Albums - An onchain album contract for Daniel Allan’s project “Duality”\n\nNew technology needs culture to drive adoption. Music is at the heart of popular culture and has the potential to drive meaningful adoption to the Optimism Collective. ",
    displayName: "Coop Records Music",
    impactDescription:
      "We have brought a significant amount of music culture to Optimism and the wider OP Stack.\n\nBeyond onboarding artists - we've championed the adoption of L2 as the primary home for minting and collecting music onchain.\n\nWe've hosted events across Devcon, ETHCC, ETH Denver,  ETH Tokyo, NFT NYC and NFT LA to champion onchain artists.\n",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "Our goal is to educate the Arab speaking community about crypto, public goods and the Optimistic vision. By offering free educational content, we expose our community to the power of this innovative technology. Our efforts expand beyond content creation, we also gamify and reward the experience to encourage our community to take action onchain and learn by doing various tasks including swaps, bridging, minting, and participating in DeFi. This is important because the bans that exist in many Arab speaking countries limit access to this type of education and keep our community behind. We’re proud to share that many of our community members have grown into devs, builders, and web3 educators. ",
    displayName: "MrCrypto Arabic",
    impactDescription:
      "Our impact extends beyond theoretical knowledge. We actively participate in OP governance as a delegate for our community and onchain through our educational quests and activities. Our work also empowers community members to grow and become their own agents of change in the ecosystem. \n\nOur delegation wallet address : 0x6a5cC02b7dA4ad7db68688b92836aD10e053b1fE",
    pwCategory: "International & Multilingual Support",
  },
  {
    contributionDescription:
      "DexKit's contributions aligned with Optimism's mission of creating an accessible and sustainable Ethereum ecosystem. Through DexAppBuilder, we made DApp development accessible with a user-friendly, no-code/low-code environment, thereby contributing to empowering more users and communities to transition to Optimism. Our open-source principles promoted decentralization and inclusivity, aligning with Optimism's values. By integrating DeFi and NFTs via DexAppBuilder, we enhanced Optimism's utility, maintaining Optimism’s vision for cost-effective Ethereum capabilities. We also cultivated partnerships to ensure growth and long-term sustainability. DexKit played a pivotal role in optimizing Optimism's development, expanding its user base, and promoting accessibility and decentralization.",
    displayName: "DexKit",
    impactDescription:
      "DexKit's contributions to Optimism Collective are centered on our shared mission: advancing public goods and sustainability within the Ethereum community. DexAppBuilder, our flagship product, is designed for the common good. We've open-sourced various DexAppBuilder features on NPM, expanding access to valuable Ethereum and Web3 development tools, benefiting the entire community. Additionally, we promote DexAppBuilder within the developer community, encouraging contributions to its development and the Web3 ecosystem. By simplifying DApp development, driving innovation through open source and supporting the decentralized communities while fostering a developer community, we contribute to Ethereum's sustainability and the Collective's goal of promoting an impactful and profitable ecosystem.\n",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "15M Brazilians own crypto assets, however the lack of crypto-related subjects in regular school materials underscores a gap in the conventional curriculum.\n\nWe aim to increase safety and awareness around web3, and offer students hope and the technological tools to build a better future.\n\nHence, we've created a ReFi fundamentals 2h workshop and a ReFi entrepreneurship 12-week program aimed at public school students from 13-17. \n\nWe're focusing on public schools to make sure this technology can benefit traditionally underserved communities. \n\nWe're aiming at high school students to provide them with different perspectives for the future. \n\nBnE is the first and most successful educational initiative that brings Web3 content through the ReFi lens to regular public schools in Brazil.",
    displayName: "Blockchain na Escola",
    impactDescription:
      "Results achieved in the last 12 months:\n\n- Created a 12-week ReFi course and 2h blockchain fundamentals workshop for public school students between 13-18 years old\n- Raised awareness around web3 through workshops for 500+ Brazilian public schools students with a focus on ReFi \n- Raised awareness around web3 use cases among entrepreneurs on talks at Suape’s Industrial Portuary Complex and the Bahia Expo event, organized by SEBRAE.\n- Minted over 30K NFT certificates from courses created in the 101.xyz platform\n- Certified 80 students in the blockchain fundamentals workshop in \n- Sent our education token ($NOS) to 50 students (no financial value) \n- Started conversations with the Education Department from the Bahia state to institutionalize our blockchain curriculum at public schools",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Seamless Protocol is the first, native, decentralized lending protocol on Base. In one month of being live, it has grown to be the largest native liquidity market, enabling users to supply and borrow USDbC, ETH, and cbETH (with more assets underway). Seamless opens up a new form of borrowing—integrated liquidity markets—which are isolated, smart contract-to-smart contract markets for undercollateralized, yet permissionless, borrowing. \n\nInstead of using onchain credit scores or CeFi structures, Seamless uses an innovative architecture where funds are abstracted and maintained by smart contracts, preventing any user from running away with the funds. In addition to Aave-like borrowing, borrowers may also select strategies to amplify their LST exposure for up to 4x (starting with cbETH).",
    displayName: "Seamless Protocol",
    impactDescription:
      'Seamless sets the foundation of Base by being the first native lending protocol. It pushes the boundaries of the latest technologies by using abstracted smart contracts and isolated liquidity pools to bring higher capital efficiency (up to 4x exposure with just 1x collateral). This fuses the value props of typical lending pools with typical vault strategies into a single, better UX app.\n\nAdditionally, Seamless has soulbound token points (called OG Points) where usage is rewarded with non-transferrable tokens to represent loyalty and "OG-ness," opening the door for even more innovative utility in the ecosystem.',
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "Ezkl is an open-source engine for doing inference for deep learning models and other computational graphs in a zk-snark (ZKML). It can be used from a Jupyter notebook, Python, Javascript, or the command line. It has brought a wave of new developers from Python, AI/ML, and data science because it lets them run the models they build with, effectively on-chain. And it all verifies on Optimism. ",
    displayName: "EZKL",
    impactDescription:
      "We've helped teach developers about ZK and build AI/ML models with verifiers that work on Optimism. Whether it is defi, on-chain games, identity, or something else, writing a few lines of Python and seeing the proof run and verify gives an aha experience that helps people get excited about what is possible on Optimism and on-chain in general.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Eventcaster is the social calendar and meetups app built on Farcaster. Farcasters use it to stay up-to-date one events shared through the app, as well as find and host Farcaster meetups in their city.\n\nThrough Eventcaster I co-organize many of the meetups in the community, and they have helped our community become strong. I also run a small grants program to fund local Farcaster meetups.",
    displayName: "Eventcaster",
    impactDescription:
      "I've co-organized most of the meetups this year within the Farcaster community including the ETHDenver (400 ppl), NFT NYC (150 ppl), EthCC (200 ppl), ETHNY (100 ppl) as well as many dozens of smaller meetups in cities around the world.\n\nI've also helped raise more than $30k to fund meetups within the community. Some of them have been individual event crowdfunds, but about ~$10k of that is a small grants program for local meetups that I started and run.\n\nEventcaster was also one of the very first Farcaster apps and bots, and is still one of the most widely used ones. I've also helped a handful of other Farcaster builders think through their apps based on the learnings from Eventcaster.",
    pwCategory: "User Experience & Adoption",
  },
  {
    contributionDescription:
      "As an education and information medium, we've been following Optimism's progress closely and have detailed it in numerous articles.\n\nVery early on (in April 2022) we offered a comprehensive guide to our community, entitled \"Optimism: the first optimistic rollups solution to improve Ethereum (ETH) scalability\". This enabled them to discover the ecosystem and understand how it works, as well as its advantages.\n\nAfterwards, we covered a number of news items, such as the $150 million fundraising in March 2022, the airdrop in June 2022, or more technical topics like the improvements brought about by the Bedrock update. We also reported on the network's successes, with articles on the number of active addresses and the number of transactions.",
    displayName: "Cryptoast",
    impactDescription:
      "Thanks to our various articles, we've enabled the French-speaking community to discover Optimism through a medium in which they have full confidence.\n\nWe've enabled them to understand how Optimism works and its relevance to today's challenges, to learn how to interact with the ecosystem, and to follow the project's news on a regular basis.\n\nWe also covered the launch of the token to highlight its potential interest for investors and regular DeFi users.\n\nWe are likely to have redirected our community of 10 million readers (in 2022) towards Optimism in a neutral, objective but enthusiastic way. ",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "We would like to receive RetroPGF for our ERC-6551 tooling. \nWe have built a website called tokenbound.world that let's you create new ERC-6551 NFTs, deploy existing NFTs into an ERC-6551, and transfer assets to them instantly. \n\nWe've completed a lot of the requirements for RFG-7: Tooling for 6551 - Tokenbound accounts. Building a no-code user interface that allows a NFT creator to:\n\nCreate a net new collection with tokenbound accounts or turn any of their collections on OP Chains into tokenbound accounts\n\nIssue tokens to any tokenbound accounts associated with their collection\n\nWe are the only place where you can create new Tokenbound accounts on Optimism. \n\nWe also created a subgraph for ERC-6551\n\n\n\n\n\n\n",
    displayName: "ERC-6551 Tooling",
    impactDescription:
      "We completed the RFG-7 for ERC-6551 no code tooling. We are the only place in which you can create a net new TBA collection on Optimism and Base. \n\nWe also have built tooling to turn existing NFTs into TBAs on Optimism and Base. \n\nWe have spent significant time building this out and designing the UX to help kickoff the creation of more ERC-6551 NFTs.\n\nWe are still working on go to market, but wanted to apply for RPG as we have completed the RFG.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "- Decentralized Fees Earning Limit Orders. First Limit orders on optimism \n- KROM/OP Pool + KROM / WETH Pool \n- Pleasant UI and UX \n- Liqiuidity Mining \n- Airdrop\n- Swap feature \n- True Web3: Opensourced all code, Decentralized, run by DAO Governance\n- DAO Treasury is 4/5 multisignature contract ",
    displayName: "Kromatika Finance",
    impactDescription:
      'Kromatika has deployed Limit Orders (FELO)  and a Swap Aggregator on OP.\n\nBy using UniV3 liquidity and Keeper smart contracts, we automate limit trades, eliminating price slippage, BOT attacks and swap fees. To date : \n- $3.6M in limit orders,\n- Average $924/order\n- Between 1 & 9% LP fees on top of their trades.\n\nIt boasts an impressive market fit with 60-70% of new users becoming returning users!\nThe MetaDex Aggregator is an "aggregator of aggregators" searching for the deepest liquidity pools with lowest slippage to provide the best instant swap rates to users.\nGasless Swap will also be released soon (using Biconomy relayers) as part of the Gov Fund received.\n\nWithout any VCs/ICO rounds, Kromatika is organically growing, expanding its suite of products and among top 10 DEXs by TVL. ',
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "Native to Optimism from day 1 and one of the first teams to release a smart wallet with Account Abstraction. Offers on-chain recovery contacts, paying gas in stablecoin, and one click dapps. Built the Candide core contracts as 4337 compliant based on Safe and wrote the Social Recovery Module. Deployed the first verifying paymaster contract with an open source backend. Launched Voltaire, a fast python Bundler client written in Python. Progress on mempool decentralization and censorship resistance. Built AbstractionKit, the TS library to easily build smart wallets.\n\nEnd-to-end open source, and 100% built for the global public good. ",
    displayName: "Candide",
    impactDescription:
      "Candide raised the bar for wallet UX and safety without compromising on self-custody. Candide Wallet codebase has been leveraged by several teams including versawallet.io mobile client, bananawallet.xyz base accounts and openfort.xyz account recovery module. Voltaire, a vital infrastructure, is being used by major RPC providers LlamaNodes, BlockPi, and BlockNative to offer AA as a Service and is provided as a free endpoint instance on testnets. The AbstractionKit SDK finds utility among a growing number of independent developers and notable companies like picnicinvestimentos.com and getjoin.io",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Public Nouns is funding experiments in the Public Goods space and creating value.  Optimism was included from the start to be an important part of this mission.\n\nPublic Nouns (https://publicnouns.wtf/) exists to promote, fund, and proliferate aligned projects that focus on serving our public.\n\nPublic Nouns launched at the end of Sep 2022, and has raised over 200 ETH in donations via auctions of Public Nouns.\n\nAlong with some other Public Goods aligned entities in the space, Optimism was brought in as a founding Public Nouns organization!  Optimism Public Nouns have one of three amazing OPossum heads.\n\nIf you are interested in Public Goods and you are also an Optimism fan, the Public Nouns community is for you!  Maybe it’ll even have a OPossum head!",
    displayName: "Public Nouns",
    impactDescription:
      "Public Nouns expanded awareness of both Optimism and Public Goods via leveraging the very popular Nouns DAO mechanism and helped linked OP to PG forever.   \n\nAlong with some other Public Goods aligned entities in the space, Optimism was brought in as a founding Public Nouns organization!  Optimism Public Nouns have one of three amazing OPossum heads.  \n\nThe OPossum headed Public Nouns are a representation of this!\n",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "For OP rollup client diversity, I created Hildr project which implemented OP rollup client with Java. It already supported Bedrock mainnet, testnet and Base mainnet, testnet. It is the third rollup client implementation besides the official Go version and a16z Rust version.",
    displayName: "grapebaba",
    impactDescription:
      "AFAIK OP stack is the first L2 rollup which support and encourage client diversity, which is important for decentralized. A16Z team build Magi which is the first non official client written   in Rust. Then we build Hildr which is the second non official client written in Java. Hildr and Magi makes OP stack client diversity far ahead of other L2 teams.",
    pwCategory: "Security & Cross-Chain Solutions",
  },
  {
    contributionDescription:
      "We successfully produced two pivotal conferences in Paris and Berlin, attended by 400 and 350 individuals respectively. These events encompassed a diverse group of builders, protocol developers, scholars, and the general populace, raising awareness of public goods funding, within and beyond web3. The events are truly a space to showcase research and development in the public goods funding space. We co-produced the Public Goods Week at Zuzalu Montenegro, creating a nexus for web3 public goods leaders, catalyzing fresh partnerships and collaborations. Additionally, our Berlin residency provided an oasis for public goods builders, granting them unparalleled access to leading protocols in the EVM landscape including Optimism, and the freedom to ideate away from traditional startup pressures.",
    displayName: "Funding the Commons",
    impactDescription:
      "Our Berlin residency addressed a critical void, offering public goods builders a collaborative sanctuary to innovate, creating ideal conditions for collaborative production of public goods. This environment incubated numerous new projects (see reference links), and enabled collaborations to emerge. Our residency, Zuzalu PG week, and our conferences in Paris and Berlin confronted the challenge of work duplication. Many innovators building in isolation often duplicate efforts. Gathering in a physical domain, they discovered synergies, triggering newfound collaborations. This not only optimized individual projects but also infused efficiency within the broader web3 ecosystem. With notable relevance to Optimism, Laura (@0xyNaMu) developed an Optimism impact evaluation framework.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "roll-op is a script that makes it trivial for any developer to spin up an OP stack rollup, both for dev and production use.\n\nThe script lets you configure and run your own rollup by running only two or three commands. It uses a single well-documented config file.\n\nAdditionally, it supports EIP-4337 AA infrastructure (bundler + paymaster) and helps you automatically subsidize gas for transactions that match certain criteria.\n\nSpinning a rollup on Goerli is as simple as:\n\n> git clone git@github.com:0xFableOrg/roll-op.git\n> cd roll-op\n> cp conf.toml.example conf.toml\n# conf.toml: uncomment Goerli section, add your keys & rpc\n> ./rollop setup --yes\n> ./rollop --preset=prod --conf=conf.toml l2\n\nMore info: https://twitter.com/norswap/status/1707188816455622899",
    displayName: "roll-op",
    impactDescription:
      "Roll-op was used in the EthCon Seoul hackathon in order to implement an on-chain rollup-as-a-service provider: users could request a rollup via an on-chain transaction, and providers could accept the offer, deploy the rollup and make the various contract addresses available on-chain. \n\nThis project (RICRolling — https://github.com/orgs/ricrolling/) won first place as well as prizes from Taiko, Polygon zkEVM and Linea.\n\nThe team at Upnode (https://upnode.org/) has been working closely with us and is integrating roll-op into their node infrastructure.\n\nMultiple teams have been in touch with me about the possibility of using roll-op as a way to self-host their rollapps (I sadly can't disclose because of their current relationships with their Rollup-as-a-Service provider).",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "API3 has deployed a range of oracles to Optimism and Base for their community to utilize. Specifically, this consists of:\n\n- dAPI Price Feeds through market.api3.org\n- The public good API3 QRNG \n- Ability to deploy first-party oracles through chainapi.com \n\nAPI3 DAO would seek a small reward for the deployment of a full-oracle stack to Optimism. ",
    displayName: "API3 DAO ",
    impactDescription:
      "API3 has had little traction on Optimism but has supported Base by deploying API3 QRNG in July and dAPI price feeds in September. These deployments provide builders on Base with the infrastructure required to deploy dApps across core verticles as well as DeFi. Upon deployment we have seen a handful of dApps engage the API3 team looking to utilize the QRNG, as this was an oracle not available on the ecosystem. ",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Web3 is hard to use. Self-custody and interacting directly with the blockchain today is overly complicated for the consumer, leading to the average user losing their funds and quitting the ecosystem. UX today is fraught with “gotchas” and pitfalls.\n\nFire - the Chrome extension that simulates transactions, showing you exactly what will go in and out of your wallet before you sign the contract.\n\nWe protect wallets on Optimism and Base today. We want this number to grow, helping support the Optimism ecosystem as well as onboard new users to it!",
    displayName: "Fire",
    impactDescription:
      "Since February 2023, Fire has conducted over 1 million simulations, providing transparency and control over a users' wallet on the Optimism network. Our Fire Optimism cards had 16,234 minted for our users when onboarding to Fire.\n\nFurthermore, the recent introduction of Base support expands our reach, allowing a broader range of users, projects, and companies to benefit from our services. This addition is a testament to our commitment to innovation and user satisfaction, and it solidifies our impact on the Optimism Collective by contributing to a more inclusive and robust ecosystem.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Umbra has been of the preeminent privacy tools available on Optimism since its launch in March 2022. In that time, is has processed over $50 Million in value. Nearly 13,000 addresses have registered to receive private payments, and more than 53,000 transactions have been occurred. As a tool for private payments, Umbra is especially useful on an L2 network like Optimism, where low fees make the payments use case more tenable than mainnet.\n\nScopeLift, the creators of Umbra, have also contributed to several EIPs to help standardize stealth addresses for all EVM networks. It is our hope these standardization efforts will be the next step to making Stealth Address technology broadly accessible and useful to all in the ecosystem.",
    displayName: "Umbra",
    impactDescription:
      "Umbra provides Optimism uses with a critical piece of privacy infrastructure. It enables privacy conscious entities to use Optimism as a payments network. I has processed over $50 Million in value across more than 53,000 transactions. Close to 13,000 addresses have signed up to receive private payments. It also supports the OP token, allowing the OP governance token to be sent privately on the Optimism network.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "OpTracker is dedicated to providing comprehensive on-chain analytics for Optimism tokens. The site started as a personal project, and I've decided to make it public. It currently tracks all large OP token transactions in real-time, provides a daily history of large OP wallets and historical price history. The website also offers an open API for accessing all the data.",
    displayName: "OpTracker",
    impactDescription:
      "OpTracker allows users to track large OP token transfers in real-time. The site aims to label known OP wallets. All the data is easily accessible through an open API. Users are integrating our price API into their Google Sheets. The site has just recently launched, but I can see the user metrics growing daily.",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "Covalent has provided seamless access to realtime data for developers, analysts, and applications on the OP Stack. Since November 2021, Covalent has served as a key data infrastructure provider for Optimism, indexing OP Mainnet, OP Sepolia, OP Goerli, four OP Chains (Base, Zora, Public Goods Network, Mode), and six OP Stack Forks (opBNB, Mantle, Metis, Boba, Kinto, Loot Chain).\n\nOur Unified API provides transparency and visibility into assets across all supported OP Stack chains, while Increment serves as a BI Tool, enabling visualization of data and the extraction of valuable insights.\n\nThis allows developers and analysts to save time and resources and lets them focus on building applications and conducting analyses without worrying about the complexities of onchain data infrastructure.",
    displayName: "Covalent",
    impactDescription:
      "Covalent's onchain data infrastructure has empowered over 559 monthly developers/applications actively building on the Superchain using our Unified API, resulting in 5,291,511 monthly API Calls.\n\nCovalent's tooling has been adopted by many applications within the Optimism ecosystem, including Aave, Bware Labs, Chainlink, Coin98, Curve, Gnosis Safe, Infura, Koinly, KyberSwap, LI.FI, Matcha, NodeReal, QuickNode, Rabby, Raleon, Rainbow, Rotki, Skytale, Tally, Tokensoft, tofuNFT, Utopia Labs, XDEFI, Zapper, and more, enabling them to provide better services to their users.\n\nWith our unified approach to fetch data from OP Mainnet, Base, Zora, PGN, and Mode, developers who build on one OP Chain supported by Covalent can also easily expand to other OP Chains, reaching millions of potential users.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "WhatsABI is a public good for making EVM bytecode more useful and usable on all EVM-based chains, such as mainnet and OP Stack chains.\n\nThe guiding purpose for WhatsABI is to improve decentralization, transparency, and user safety by reducing our dependence on proprietary frontends to EVM contracts. \n\nWhatsABI a permissively-licensed TypeScript library that is perfect for building better contract explorers (a better Etherscan), transaction builders (Safe Wallet), smarter wallets (MetaMask, Zapper), and for doing security research. It is designed to be small, fast, and easily embedded in wallets or runnable locally with any provider.\n\nMany tools already use WhatsABI: gnosis/zodiac-pilot, paradigmxyz/rivet, ondora.xyz, monobase.xyz, ethcmd.com, notar-cli, abi.w1nt3r.xyz, and more!",
    displayName: "WhatsABI",
    impactDescription:
      "The features that WhatsABI offers are important for all EVM-powered blockchains, including those under the Optimism Collective.\n\nMany of the tools that already use WhatsABI are operating on OP Stack powered chains: Rivet, Zodiac, Ondora, etc.\n\nBy using WhatsABI, all of these tools get many features out of the box: Easy fetching of ABIs from verified contracts, extracting ABIs from unverified contracts, detecting and resolving proxies, and more. (See Github project page for more details.)\n\nAnyone building generalized frontends (like block explorers) knows how hard it is to do these things reliably. One example: Resolving proxy contracts. There's many kinds (EIP-1967, GnosisSafeProxy, ZeppelinOSProxy, PROXIABLE, DiamondProxy, and more)—WhatsABI detects and resolves all of them!",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Our Optimism contributions are tailor-made for the Mexican audience, exclusively in Spanish. We've achieved:\n\n- Informative Twitter Spaces boosting Optimism's awareness\n- Twitter threads designed to onboard new users and promote the Optimistic Road to Ethereum Mexico 2023\n- A virtual workshop about Optimism\n- A significant highlight at Ethereum Mexico 2023, our star event in Mexico City featuring a talk by Mark Tyneway\n\nNotably, we exceeded the objectives of our proposed mission during Season 4 (Optimistic Road to Ethereum México The Event), amplifying Optimism's reach and influence.",
    displayName: "Ethereum Mexico",
    impactDescription:
      "We heightened awareness within the Mexican community by having Optimism as a prominent sponsor of Ethereum Mexico 2023. Mark Tyneway's insightful talk on the future of blockchain technology piqued interest and extended an invitation to engage with the Collective.\n\nIn Season 4, we actively participated in a mission, exceeding the expected impact. While we committed to 4 events, we went above and beyond, supporting local communities in organizing a total of 12 events across 9 diverse cities. Additionally, we exceeded expectations with more X threads and X Spaces than initially projected. Our efforts resonated, amplifying Optimism's presence and reach.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Decentragora is an OP-native project focused on open-source tools and accessibility for the benefit of the public. We actively contribute to the OP stack by building open-source tech and maintaining an open space focused on impact over profit.\n\nThe technology we build is for anyone from newcomers to shadowy super coders. Our organization has been an entry point for anyone interested in Web3 and technology. That's why it's free— for maximum accessibility for the public! (Learn more here) \n\nWe strive for access and inclusivity, welcoming newcomers and experienced coders. Our tools include:\nMembership NFT contract\nSmart contract deployer\nAttestation tool.\nGas faucet & educational content.\n\nOur office space is where we onboard locals and work with students interested in tech development.\n",
    displayName: "DecentrAgora",
    impactDescription:
      "Since we focus on developing open technology and maintaining equal access for anyone.\nWe develop user-friendly tools for the Optimistic collective.\n\nSmart contracts and repositories open-sourced\nHosted meetups and educational sessions for Web3\nCreated & distributed educational material that is free to the public\nRepresented and publicized the collective in our community\n\nOur Gas Faucet provides free ETH for first-time transactions. Our EVM Gas Station dApp monitors network prices and estimates costs for L1 and L2 networks.\n\nAnyone can use our technology & access resources that onboard them directly to Optimism.\nWe provide resources beyond our office doors; our technology is open source. We aim to foster infinite positive-sum games by lowering the entry barrier for adopting Optimism.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "The Department of Decentralization is a collective of people from various crypto- and blockchain communities in and around Berlin. The group assembled to organize events like ETHBerlin, Protocol Berg, or GoerliCon and has been providing infrastructure such as the Goerli and now the Holešky testnet.\n\nWe aim to be an agnostic vehicle to drive adoption, educate newcomers, and raise awareness of the challenges and benefits of decentralization and open-source software.\n\nOptimism benefits from public infrastructure such as the Goerli testnet, which has been the primary layer-1 for the optimistic Goerli testnet in the past year.  In addition, the Optimism Foundation has been represented at the past year's ETHBerlin and Protocol Berg.",
    displayName: "Department of Decentralization",
    impactDescription:
      "The Goerli testnet is still the most frequented public Ethereum testnet by all metrics, seeing more than 240 million transactions and 28 million active accounts. The optimistic Goerli testnet has seen 30 million transactions with over 4 million active accounts. The events we organize host roughly 1000 hackers and attendees. Our social media community has 11k followers.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      'We are an education resource hub for Ethereum in El Salvador. Our achievements include an in-person conference, a university partnership to teach solidity, and an active Twitter. \n\nIn-person conference: \n\nEth-Volcano launch event was in May 2023, and approximately 80 people attended from around the country, Central America, and North America!  \n\nSpeaking topics included but weren\'t limited to Ethereum origins, L2s role in the ecosystem, and the most anticipated talk: Legal Hour, the new El Salvador Digital Asset Regulation.\n\nUniversity Partnership:\n\nWe partnered with La Universidad de Matias of El Salvador and Eth-Kipu to teach "Ethereum Developer Pack". A Salvadoran smart-contract developer leads the instruction. 28 people attended. \n\nTwitter:\nWe engage in education spaces and content. ',
    displayName: "Eth-Volcano",
    impactDescription:
      'Our primary focus has been to bring Ethereum education awareness in a country that is already familiar with the word "Bitcoin." Our efforts sought to demystify and introduce the impact that smart contracts currently have and could later have in the future. \n\nWe have aimed to inspire Salvadorans that they, too, can be part of this future.  By working on being a trusted source of information, knowledge, and guidepost, we have laid the groundwork for El Salvador to learn to adopt smart contracts and continue their journey to learn Ethereum. \n\nAs a result of our efforts:\n28 new developers are undergoing Ethereum Developer Pack\n\nEth-Volcano (Spaces) Talks Total:\n2477 total attendees \n\nEth-Volcano X impressions Total:\n295,400 impressions with 406 followers ',
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "The following resource categories and their respective links are great examples of GoPlus Security’s Contributions.\nCase Studies:\nThe following key case studies showcase how specific projects and companies tied to the Optimism ecosystem have benefited from the GoPlus Security API services:\n\n1. [TokenPocket](https://goplussecurity.medium.com/tokenpocket-a-secure-and-simple-multi-chain-wallet-cebc5591f1d5) use case.\n2. [ApeSpace](https://goplussecurity.medium.com/apespace-the-ultimate-crypto-analytics-platform-for-all-traders-fe4d08c66fda) use case.\n3. [DexCheck](https://goplussecurity.medium.com/dexcheck-the-next-generation-data-analytics-platform-for-defi-and-nft-8ee29ec2d6b0) use case. \n\nArticles & Publications:\nhttps://goplussecurity.medium.com/",
    displayName: "GoPlus Security",
    impactDescription:
      "Daily Token Detection Count for Each Access Point. \nThe top 4 in this realm have had the highest usage of GoPlus Security’s API services in consecutive order:\n1. [DEXTools](https://www.dextools.io/app/en/pairs): a cryptocurrency-related platform and toolset that is multi-chain, Optimism included.\n2. [DEX Screener](https://dexscreener.com/): a powerful price analysis platform that is multi-chain, Optimism included.\n3. [OKX](https://www.okx.com/): an innovative cryptocurrency exchange and wallet that is multi-chain, Optimism included.\n4. [Bitget Wallet](https://web3.bitget.com/en) (Formerly known as BitKeep): a world-class multi-chain crypto wallet, Optimism included. \n\n",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "We have built a registry of more than 300 open source software projects building on Optimism, and created a series of composable impact metrics based on projects' onchain and off-chain work. This makes it easy to track projects' developer activity, onchain user base, and contribution to OP sequencer fees. \n\nThe registry is free, fully open source, and an important building block for reviewing projects, creating RPGF3 Lists, and assisting voters.",
    displayName: "Open Source Observer",
    impactDescription:
      "Open Source Observer helps OP citizens make smart grant funding decisions! We've created a strong foundation for measuring the activity and impact of open source software contributions in the Ethereum ecosystem. Although our data and analytics platform is less than 3 months old, we've already had outsized impact by helping badgeholders screen RPGF3 applicants, develop \"lists\" of RPGF projects based on impact metrics, and learn more about any project with a Github or smart contract address. ",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "- Supported Optimism from day 1, being one of the first (if not first) data platform to track it\n- Collected data for Optimism's DeFi projects, which was used by the Optimism Foundation to distribute grants and by Optimism's users to track projects on Optimism\n- Launched LlamaZip, a router optimized for Optimism that saved Optimism's users lots of fees\n- Launched LlamaSwap, which has routed >734M volume on Optimism and Base (13.3bn volume across all chains)\n- Launched LlamaSearch, helping users avoid getting their wallet drained on phishing sites\n- Launched LlamaPay on Optimism, used by some projects to pay salaries, vest tokens or simply distribute tokens.\n- We maintain a list of free APIs, including our prices API, which are used by many projects on Optimism on their app/infrastructure",
    displayName: "DefiLlama",
    impactDescription:
      "- Helped optimism gov decide on what grants to give and track ecosystem and impact of grants.\n- 1M monthly users use us to discover protocols on Optimism (and other chains), track yields on Optimism, evaluate protocols, track chain metrics...\n- LlamaSwap has routed >734M of volume on Optimism (672M) and Base (62M)\n- LlamaZip has done >70k transactions, reducing costs for optimism's users\n- Projects on optimism/base that use our APIs (mainly price api): pancakeswap, granary, mean finance, qidao, gamma, baseswap, ankr, revert finance... This infra that we maintain allows them to deliver their products/protocols to optimism users\n- LlamaPay on Optimism has been used by Premia, PoolTogether, Velodrome... for their operations\n- Over 10k daily users on our extension",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "I invested substantial time creating an Optimism Governance Dashboard on Dune that enables real-time tracking of proposals, participation statistics, voting trends, and delegate activity to promote transparency in Optimism's on-chain governance. My dashboard visualizes key metrics like total proposals, votes cast, voter involvement over time, top delegate voting power and participation ratios, inactive delegate counts, and underrated but active delegates. It allows querying single-delegate's voting histories and power changes. I also created tables summarizing all proposals and delegate profiles for easy reference.",
    displayName: "satorrr",
    impactDescription:
      "My Optimism Governance Dashboard has provided tangible benefits to governance participants by enabling more informed and effective participation. By centralizing critical data like voting trends, delegate activity, and proposals, it helps voters make educated delegate selections. This drives accountability and quality governance output. The dashboard also benefits new governance participants by making the process transparent and accessible. My dashboard empowers the Optimism community to analyze governance systematically. Specific groups benefiting include voters, delegates, and projects building in the ecosystem who require effective governance for operational success.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Block explorers provide vital infrastructure, transparency, and data availability to all blockchain users. Blockscout brings an open-source ethos and community-driven development to the Optimism explorer ecosystem. Over the past 6 months Blockscout has continued to improve and optimize the Optimism explorer for OP mainnet and testnet (Goerli & Sepolia) instances. \n\nIn June 2023 we updated to the latest 5.2.0 version and deployed a new UI, which includes several new L2 relevant views, account features for users, and an app marketplace for projects on Optimism. In September we introduced the OP Sepolia instance, currently the only fully-functional explorer instance available for the OP Sepolia chain. Blockscout APIs (both RPC and REST API) are available for Optimism developers and projects.",
    displayName: "Blockscout Block Explorer",
    impactDescription:
      "Blockscout impacts Optimism users across the board. Developers use Blockscout's APIs to incorporate chain data into their applications, deploy and debug on testnets, or verify contracts on-chain through the front-end interface. Projects use Blockscout to highlight their apps on the app marketplace and monitor and check interactions with their contracts. Everyone can use the explorer to check & confirm details of their transactions and holdings, create private and public tags, and inspect anything that happens on the Optimism network.  \n\nBlockscout is open source and can be modified and customized for the Optimism Collective. We have worked with the collective to create new views, quickly spin up testnets, and develop new features requested by users. ",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "solidity-analyzer is deeply integrated into foundry which is increasingly becoming more popular and adoption among devs because of its ability to allow writing tests in solidity itself and because it is really fast in running tests and compiling too. But the tooling around it is not yet very mature. \n\nAn LSP server that works with foundry projects will provide devs with important features like:\n1. Diagnostics: compiler errors, warnings, informationals, etc.\n2. Formatting: with `forge fmt`\n3. Outline: the birds eye view of the file including contract names, functions, state variables,e tc.\n4. Code navigation: jump to definitions, implemetations, references, etc.\n5. Inlay hints, autocompletes\n6. And many more LSP features\n\nOut of the mentioned features, first 3 are already implemented.",
    displayName: "solidity-analyzer",
    impactDescription:
      "Optimism VM is also an EVM implementation and thus any developments in solidity ecosystem has its impact on anything that uses EVM too. Many of the projects already deployed on optimism were developed with solidity and foundry. Thus, any contributions to the DX of solidity and foundry impacts optimism too.\n\nA note on impact metrics:\nThis is a new project and in development. I have been using it for diagnostics on my own personal and work projects. Anyone wanting to use it needs to clone and build the server locally with `cargo install --git` and hence I am listing github clones and cloners as metrics as a proxy to amount of people that might have tried it. I am not actively promoting it, just building it.",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "Since 2018, we have been organizing the Ethereum Community Conference (EthCC) every year, which has become the world's leading conference on Ethereum, focusing on technology and the community. At Ethereum France, we believe that sharing and transmitting knowledge is the most efficient way to develop a positive and fertile ecosystem.\n\nDuring EthCC[6], a track was dedicated to \"rollups,\" which highlighted Optimism's unique contributions to enhancing Ethereum's scalability.",
    displayName: "Ethereum France",
    impactDescription:
      "With more than 5,000 attendees and 300 events during the EthCCWeek, EthCC contributes to the discovery and adoption of the Optimism ecosystem.\n\nEthCC[6] highlighted several important communications for the Optimism ecosystem:\n* Retroactive Public Goods Funding, Jonas Seiferth - Optimism\n* Fault Proofs on Optimism with Cannon, Joshua Gutow - OP Labs\n* Bootstrapping a bi-cameral governance system, Justine Humenansky - The Optimism Collective",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We’re an autonomous collective helping enhance the security of the Ethereum ecosystem and those who contribute to its long-term success. We’ve taken a public-good approach to security research, putting our skills in favor of the community. So far funded by grants from the Ethereum Foundation, we conducted security reviews, responsibly disclosed vulnerabilities, and produced free educational material in articles, interviews, videos, talks, workshops and challenges. We engaged with LATAM communities, sponsoring meetups and hosting events for web3 devs and security researchers. Our work wasn’t exclusive to the Optimism Collective, yet it contributed to educating security researchers and developers on security topics that are relevant for Optimism-based applications to stay safe.",
    displayName: "The Red Guild",
    impactDescription:
      'We’re not limited to Ethereum; L2s like OP are an integral part of the Ethereum ecosystem as well. All our content intends to appeal the collective, because it is aimed at devs and security researchers that may belong to the collective, who are interested in securing Optimism-based apps.\n\nIn the past we\'ve examined OP’s bridge security measures, showing differences with Arbitrum in strategies to prevent gas grieving attacks. And reported a relevant security issue in a public security contest.\n\nThanks to the 2-day conference “GEERS: Blockchain edition” we hosted in Argentina, over 250 people from various cities learned about OP for the first time. The topic was featured at least twice in the talks. Particularly in a talk by Joxes on "The Importance of Participatory Roles in Governance".',
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Downstream is a game, with logic and state all controlled by smart contracts. The game design focusses on emergent gameplay where players are guided to write and deploy their own game extensions to the chain. \n\nCurrently deployed to a fork of OP Stack that is settling on goerelli, all code is open source, including smart contracts, backend service and the browser game client.\n\nThe game as a whole represents a significant contribution as a working example of an Autonomous World but there are also many specific, open source,  onchain game primitives implemented including:\n\n  - Session Key signing. \n  - Multiplayer Optimistic Updates. \n  - Automatic Indexing. \n  - Automatic plugin loading.   \n  - Player deployment tools. ",
    displayName: "Downstream",
    impactDescription:
      "Playmint is a leading developer in the growing Autonomous World builder community. We actively engage other builders in the tools and techniques we have developed.\n\nWe speak at hackathons, Ethereum conferences and Autonomous Worlds events about the technical and design challenges we have overcome.\n\nMore than a dozen onchain builders took part in a week-long technical test that demonstrated they could permissionlessy extend downstream.",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      'We are an onchain media collective, dedicated to the creation of educational & engaging content about Ethereum, DAOs, L2s, NFTs, Art & more. We noticed an interesting problem when talking to our community: They wanted to Enjoy Ethereum, but they were fed up with paying high gas fees. We decided to make it part of our mandate to teach our 20,000+ followers about the benefits of using OP chains, & show them how to do it.\n\nWe migrated our daily edition collection "NOMO Nouns" from mainnet to OP, started minting our podcasts as FREE mints on Zora L2 & are launching a DAO on BASE L2 using Nouns Builder. All the while, we\'ve been educating our community about OP on daily Twitter Spaces, weekly pods & educational videos on YT & other socials, making sure they are prepared for a Superchain future.',
    displayName: "The Noun Square Media Collective",
    impactDescription:
      "The success of Ethereum (and by extension, Optimism) depends heavily on our ability to teach people how to use L2's daily, without friction and frustration. This requires us to meet users where they are, solve their specific problems, and educate them in an entertaining, jargon-less way. But unlike a regular online content house, as an onchain collective we have been able to leverage the OP stack in our core infrastructure so that we're not only talking the talk, but walking the walk! Not only have we produced high quality videos, panels & podcasts about Optimism, Zora & BASE, but we have also taken steps to involve our community in actually using these networks to mint our content and our community NFT collections. People learn best by doing, and we are putting that to the test every day.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "Unlock Labs, the creators of Unlock Protocol, will enhance the features and functionality of Events, an application built to bring events onchain on Optimism.\n\nEvents by Unlock Labs is a free and easy way organizers can create events (contracts deployed on Optimism) and share an event details page for 10-10000+ person where users can claim or purchase tickets. Setting up an event takes less than a minute, and it works for both free and paid events.",
    displayName: "Patrick Workman",
    impactDescription:
      "Consumer use cases for Optimism are critical to increasing onboarding, adoption, and usage. Events are an obvious use case for Optimism, enabling people with and without crypto wallets to register for or buy tickets to an event.\n\nLegacy ticketing solutions don’t meet the needs of web3 and crypto event organizers.\n\nEvents by Unlock Labs enables no-code event creation, deploying a smart contract to Optimism that creates tickets that include event details, metadata, and other information relevant to an event. Enhancing the features and functionality of Events allows crypto-centric event organizers using web2 platforms (Eventbrite, Luma, Partiful) to embrace the technology their attendees expect them to champion..",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "We've created 13 reusable modules in our Inverter Open Library, along with 3 workflow templates, allowing projects to easily implement adaptable smart contracts without the hefty investments typically needed for development and audit.\n\nHere are the projects that are currently on testnet and using Inverter to deploy on Optimism:\n- Bloom Network configured an “autonomous bounty payment system” for impact work for its 15K+ non-web3 members. \n- Bonding Curve Research Group has deployed an “investable workstream workflow” to enable bonding curve powered investments for open-source RnD teams without DAO overheads.\n- Crossify is integrating “recurring payroll management workflow” to facilitate subcription management.",
    displayName: "Inverter Network",
    impactDescription:
      "Smart contracts' scalability suffers due to costly, slow development and composability issues, hindering real-world applications. With 152 of 195 countries being developing, reducing blockchain entry barriers is vital for global adoption. Inverter's modular infrastructure significantly cuts down smart contract setup time and running costs for new applications.\n\nWe onboarded projects that are building on Optimism by making it possible to deploy web3 products in an agile way. With Inverter workflows, implementing smart contracts is only configuration process, rather than engineering challenge: \n- No more need to individually finance audits and security protocols \n- No more need for dedicated smart contract team or timely development cycles to implement new features or modify the old ones.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "The Superchain Eco aims to become the primary platform for OP Stack and Superchain information, updates, and insights. We aim to accelerate the adoption and development of the OP stack, aiming to produce more and better Public Goods. The platform provides an overview of the OP Stack Ecosystem, The Superchain Ecosystem and the Ecosystems built on top of it. We are creating overviews, reports, guides, video content and infographics, while leveraging the reach to initiate gatherings between OP Stack builders to increase alignment and coordination.",
    displayName: "Superchain Eco",
    impactDescription:
      "Superchain Eco’s deep OP stack perspective has enriched the Optimism collective by offering comprehensive ecosystem insights, fostering cross-network initiatives, and nurturing a long-term community of engaged builders. Our platform is becoming a hub for education, collaboration, and innovation within the OP stack, propelling both new and existing developers towards enhanced solutions and meaningful participation in the Optimism ecosystem.\n\nWe're also working on creating a easy to access OP-stack metadata registry as prescribed here: https://github.com/ethereum-optimism/op-analytics/issues/249",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Ankr has supported Optimism for the past 2 years for public goods using RPC endpoints. We have supported an average of 2.5-3bil requests per 30 days. Developers have access to 1million RPC requests, per user daily. Websocket access is also available on our premium tiers.",
    displayName: "Ankr",
    impactDescription:
      "Ankr has had an extremely positive impact in the OP developer community, powering numerous dApps and enabling developers access for up to 1million RPC requests per day for free, per user. Ankr also has Websocket access for premium user signup, with no limits.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "The TechNERD program consists of 4 technical support specialists who help developers on every layer of the OP Stack. They directly solve developer pain by answering questions and debugging issues through support tickets and developer channels on our Discord.",
    displayName: "TechNERD Program",
    impactDescription:
      "The TechNERDS expand developer support and bridge technical knowledge gaps. They directly solve developer pain by answering questions, debugging issues via support tickets and dev channels, improve documentation, and making improvements to the code repositories. They're enabling developers to build and thrive on the OP Stack.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We have launched a campaign on QuestN to translate the OP Friday Twitter Threads posted from 1 September to 20 October 2023, which consists of 8 threads over 8 weeks, into various native languages.\n\nThe Optimism Foundation releases a weekly update on the official Optimism Twitter account every Friday. However, these updates are only posted in English.\n\nTo address this, Opti.domains and Bored Town have partnered to launch a campaign on QuestN. The aim is to translate these OP Friday Threads into over 20 languages and compile high-quality translations into the first edition of Bored Post's multi-lingual magazine.\n\nParticipants are tasked with translating an OP Friday Twitter Thread into their native language. They must then share their translation on Twitter to receive rewards.",
    displayName: "OP Friday Twitter Thread Translation Contest",
    impactDescription:
      "Our OP Friday Twitter Thread Translation QuestN Campaign has been a tremendous success, with over 250 submissions, of which more than 170 are qualified as of 22 October 2023.\n\nWe've engaged contributors from over 20 countries to translate the 8 OP Friday Twitter Threads from the Optimism Foundation. These threads span 8 weeks, from 1 September to 20 October 2023.\n\nIn collaboration with Bored Town, we are gathering and compiling these high-quality translations for the first edition of the Bored Post multi-lingual magazine.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Xangle has reinforced Optimism's presence in APAC. We have provided an on-chain analytics dashboard, distributed research, tracked and announced milestones, and built a block explorer for Base. These efforts enhance OP's visibility and value proposition comprehension. Xangle aims to encourage Web2 companies to consider OP as a key player.\n-On-chain analytics: a publicly accessible dashboard with OP’s data, emphasizing its importance to Korean users.\n-Research: institution-grade reports distributed widely, increasing awareness through media channels.\n-Base Block Explorer: an enterprise-grade explorer ensuring transparency and credibility for Base and the OP Stack.\n-Xangle Events: displaying key updates on the OP ecosystem through a publicly available 'Event' service, maximizing usability.",
    displayName: "CrossAngle (“Xangle”)",
    impactDescription:
      "We've significantly expanded OP's brand awareness and educated both Web3 and Web2 B2B users. With a strong reputation in traditional industries, Xangle has introduced OP to both B2C & B2B users.\n-On-chain Analytics: Has attracted 1.3k+ users monthly since APR 2023, emphasizing Optimism's importance.\n-Research: Our reports have reached many users through Xangle and various media & channel partners. Some reports garnered 86k+ views.\n-Base Explorer: While we offer advisory to major Web2s, we emphasized our capability to support an explorer for companies entering to Base, positioning Base as a mainnet partner, thereby encouraging widespread adoption to OP Stack.\n-Event: We've covered 39 OP ecosystem key events with an average of 0.6k views per event, reaching 23.4k general Web3 and B2B users.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "Protofire has developed a Blockchain Learning Path, an opinionated learning path for getting into speed with Blockchain (specially Ethereum). This is a community open initiative that have already supported at least 2,500 developers around the world to learn web3 and start contributing to the ecosystem. https://github.com/protofire/blockchain-learning-path",
    displayName: "Protofire Blockchain Learning Path",
    impactDescription:
      "This is a community open initiative that have already supported at least 2,500 developers around the world to learn web3 and start contributing to the ecosystem. We believe that by being promoted by Optimism RPGF it could have an even larger impact, gauging the attention of more developers, reviewers and contributors.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Iggy Social is a set of free open-source tools that allow any DAO or web3 community to set up their own Web3 Social app, fully controlled by the community, and with useful web3 integrations and features that can bring additional revenue to the community treasury.\n\nIggy Social currently contributes to three projects on the Base network:\n\nBasePunk Chat: Their Web3 Social chat app includes features like posting and commenting, minting posts as NFTs (on Base Network), tipping and sending tokens, NFT launchpad,...\n\nBasebook.xyz - Social NFT Launchpad: Dapp that simplifies NFT creation and social connection between users and artists in one place.\n\nBased Names: BasedNouns is an NFT project on Base Network. They used our tools to launch a special TLD (.based) for their NFT holders.",
    displayName: "Iggy Social - Web3 Social for DAOs",
    impactDescription:
      "Our contributions are open-source Web3 Social tools for DAOs and other web3 communities.\n\nThe impact of these tools is that members of these web3 communities are more actively engaged onchain compared to web2.\n\nMany users have used our tools resulting in on-chain actions on Base Network. Actions like minting a username, minting posts, sending tokens, etc.\n\nWhile our contributions are in their early stage we can see our impact through on-chain metrics:\n\n- Registering a username (web3 domain name).\n- Minting posts as NFTs (this is how users can reward or tip creators of great posts).\n- Creating your own NFT via NFT Launchpad (separate from post NFTs, users can also launch their own NFT collections through the NFT Launchpad).\n",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "We have created special chatbots for the Optimism blockchain, finely tuned to its details. We aim to simplify complex blockchain technology for everyone in the Optimism community, from beginners to experts. These chatbots guide users, answer questions, and make using Optimism easier for everyone, all at no cost. They also assist developers, making blockchain development smoother and fostering growth in the Optimism community.",
    displayName: "Optimism AI",
    impactDescription:
      "Our chatbots were a game-changer for Optimism. In just a week, over 300 people, including newcomers, pros, developers, researchers, and enthusiasts, turned to us. We made finding answers easy, kindling a bright spark of enthusiasm within the Optimism Collective.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Temporal Governance is a groundbreaking approach to cross-chain protocol governance that provides unique benefits to communities that adopt the Optimism Superchain and deploy to multiple OP Stack networks.\n\nThis public good consists of open source Solidity and JavaScript code that enables any online community to govern smart contracts deployed to multiple Ethereum networks. It not only enables cross-chain governance, it also enables developers to fully automate the scheduling and execution of cross-chain proposals once they have been voted on.\n\nUnderpinning its reliability, Temporal Governance has undergone rigorous scrutiny, passing two comprehensive security audits from Halborn Security and Code4rena.\n\nThe Moonwell community has grown by over 2,000 active users on Base by adopting it.",
    displayName: "Moonwell",
    impactDescription:
      "This open-source public good enabled the Moonwell community to expand to the Base L2 and reach over 2,000 new OP stack users, while maintaining our community's high standards for decentralization and trust minimization. \n\nThe Moonwell protocol was successfully activated on Base mainnet August 9th through a cross-chain governance proposal, and since then, our community has successfully passed 7 additional cross-chain proposals.\n\nMoonwell has consistently been in the top 10 TVL projects on Base as measured by DeFi Llama since launch on August 9th.",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "The Synapse DAO has contributed to bridge and onboarding tooling to make it easier to bring assets and users into the ecosystem in the following key ways:\n\n- Maintaining one of the leading on and off ramps for the ecosystem \n- Support and integrations for new OP Stack chains like Base\n- Fast Deposit bridging from any chain into the Optimism ecosystem\n- Research and implementation of new bridging paradigms – launching Concentrated Liquidity\n- Integrations with key ecosystem projects like Olympus, Layer2DAO etc. to increase liquidity. \n",
    displayName: "Synapse DAO",
    impactDescription:
      "The Synapse DAO has brought billions of dollars, hundreds of thousands of users and developers into the ecosystem across many products. Combined with integrations with key ecosystem protocols, synapse helps Optimism become the hub of all layer 2 activity through: \n\n- Bringing over $1.2B into the ecosystem \n- Settling over 1M transactions \n- Introducing 420k new users to Optimism \n- Integrations with ecosystem protocols to increase liquidity and volume \n- Educational and Marketing activities to help users navigate onboarding and discovering applications on Optimism \n",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "Crypto Sapiens featured the Optimism ecosystem in a two part series on Twitter Spaces and expanded the conversations on our newsletter.\n\nThe first piece served as an introduction to Optimism and OP rollups. We co-hosted the event with Bartek of L2BEAT, who kindly shared his wealth of knowledge with our audience about Optimism including computational requirements, scaling models, and RPGF as a community engagement and ecosystem growth tool.\n\nThe second piece expanded on the initial conversation by exploring the OP stack and the projects that are using it. We had three different projects that use the OP stack to build: Mantle, Metis and Goshen. Each provided tons of insights about why they chose Optimism, and encouraged listeners to start building on OP.",
    displayName: "Crypto Sapiens",
    impactDescription:
      "The first conversation on Spaces introducing Optimism and the OP rollups has over 300 downloads with the recap on our newsletter seeing a read rate of 75%. The second conversation on Spaces where we expanded on the OP stack saw a 414% increase with over 1,600 downloads with the newsletter seeing a similar read rate as the first.\n\nWhile we set out to produce high-quality content introducing the Optimism ecosystem, we were not surprised to see the content also be well received by the developer community as evidenced by the audience that was drawn to both events. Having L2BEAT share their insights at the first event, and three accomplished developers and projects at the second event certainly helped influence the programming's success and impact.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "We build bress to make Mirror articles searching and discovery more convenient. Mirror is the most important content platform on Optimism but it lacks the key feature of articles searching. To help readers find Mirror articles easier we build bress. At bress users can browse featured Mirror articles by us, search any Mirror article with keywords, follow Mirror writers, read new published articles.",
    displayName: "Bress",
    impactDescription:
      "At bress our website has served more than 22,139 unique users and has 81,472 total page views , with around 100 daily active users. We help onboard and maintain users for Mirror. Our service reaches users in different countries which means we have a gloable users base.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Flipside has remained a devoted contributor to the Optimism ecosystem and OP Stack. \n\nOur contributions span data, applications, and insights. \n\n*Data*\n\nWe have curated and maintained data for both Optimism and Base.\n\n>Core Optimism & Base data tables (blocks, transactions, event logs, and traces)\n    -All entirely backfilled\n    -Ingesting OP data every 15-20 minutes\n>Curated and dimensional models for various protocols\n> Includes access to API, SDK, and CSV downloads. \n\n*Applications*\n\n>The Optimist Score (science.flipsidecrypto.xyz/optimist) aiding with Optimism's goal of on-chain attestation for the masses.\n    -Code is entirely open-sourced\n    -51,000+ attestations, 41,000+ users all time\n\n> Insights & BI\n   - Community-led analytics on critical Optimism ecosystem developments.",
    displayName: "Flipside Crypto",
    impactDescription:
      "Our contributions have made critical data & infrastructure available to the Optimism & broader blockchain ecosystem for free. Enabling teams to make better decisions and for the Collective to provide the broader community with key network tooling. \n\nAdditionally, our applications & business intelligence have delivered deep insights and raised awareness of important developments within the Optimism ecosystem. These initiatives have helped attract new users and drive usage of the network. \n\nOverall, our contributions have delivered essential tooling, raised awareness of the OP stack, and helped drive adoption & user growth. \n\nWe are thrilled to continue supporting the Optimism Collective and broader community. ",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "DeFi's APY is defined differently for each project, including the measurement period. They may also be incorrect. \n\nTherefore, Optimists cannot compare DeFi with confidence.We encourage them to invest in DeFi by providing APY and ROI based on actual investment results.\n\nTo track actual investment results, we make a deposit in stablecoin pools and calculate APY by profit data obtained from smart-contract.\n\nWe already track the actual investment results of 1612 stablecoin pools and track the most pools compared to other sites. We have 12K X(Twitter) followers.",
    displayName: "Stable.fish",
    impactDescription:
      "We make it easy for investors to invest in DeFi on Optimism and Base by providing real investment results and the same defined APY.\n\nWe are trusted by many Optimism and Base DeFi such as Perpetual Protocol, WOO Network, Overnight , ACyptoS, Sonne, Toros, Gamma and others. We work with them to develop tracking systems and follow each other on X.We contribute to their visibility by publishing the actual performance.\n\nDeFi utilize our content to engage users.\nFor example Perpetual protocol posted our ranking on X. Overnight includes a link to our page on their DApps to let people know how the pool has performed in the past.\n\nhttps://twitter.com/perpprotocol/status/1671609769751134209\n\nhttps://app.overnight.fi/pools\n\nWe have provided APY rankings to the Daily Degen newsletter for over a year.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "2016\n-Open-sourced MiniMe token contract, the foundation of $OP\n\n2017\n-Launched first donation dapp on ETH & maintained it until Rinkeby deprecation\n\n2018\n-Led ScalingNOW! to address Ethereum scaling issues\n-Etherscan is closed source, impeding scaling, so we started OpenSourceBlockExplorersNOW! which led to the creation of Blockscout\n-Spun out Dappnode\n\n2021\n-Launched Giveth.io to support public goods w/ zero-fee donations\n\n2023\n-Added Optimism to Giveth & started rewarding donors w/ GIV on OP \n-Launched GIVpower staking incentives & project boosting on Optimism\n-Ran onboarding campaign, offering OP to verified projects joining Optimism\n-Promoted RetroPGF at 2 conferences w/ General Magic\n-Ran QF round on Optimism w/ 25k DAI of matching\n-Migrated Giveth reputation DAO to Optimism",
    displayName: "Giveth",
    impactDescription:
      "Minime\n-Used by Lido, every AragonOS DAO & many others\n-Forks of Minime (ERC20Snapshot.sol & ERC20Votes.sol) are used by countless DAOs including Optimism. They enable $OP’s DAO governance!\n\nScalingNow!\n-Liam.eth, ex-CEO of OP Labs, and many others attended our free IRL gathering in 2018, undoubtedly leading to better coordination in this niche space. \n\nGiveth Donation App\n-Used by Protocol Guild, Dappnode, Curia & 1000’s of other OSS & traditional nonprofits to market their projects & give them an alternate funding stream outside of RetroPGF\n-We onboarded hundreds of public goods projects to Optimism & now they are part of the Collective 😃\n\nGIVeconomy Migration\n-Our economy rewards every donor & staker with streaming GIV rewards that run until Dec 2026, locking them into Optimism. ",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "The Keccak project started in 2008 for the development of the Keccak hash function,\nwinner of SHA3 competition and used in Ethereum. The project is a multi discipline\neffort of cryptography, software and hardware development. All the developments are\nopen source, no patents and several incentives for 3rd party security analysis. The\nproject is still active for providing improved implementations.",
    displayName: "Keccak hashing",
    impactDescription:
      "The Keccak hash function, and all its derivations, are cryptographic building blocks for\nthe good of the society. We believe that open cryptography is a key technology for the\ndigital society. The security of Keccak is key to the security of Ethereum and of many\nother digital projects. We worked a lot in analyzing its security and encouraged third-\nparty cryptanalysis, with very positive results.\nThe Keccak hash function is one of the most analyzed cryptographic functions, which gives a very high confidence on its security and resistance against all kind of attacks.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Galxe’s self-serve, no-code infrastructure allows developers to easily engage and reward their communities in a seamless way with NFTs. A product that makes it simple for developers on Optimism to engage with global audiences of all kinds from our community of 13 million unique users. A way to effortlessly manage and reward community members. An infrastructure that makes it easy to target users from the more than 3700 other ecosystems that Galxe has partnered with. By using Galxe, Optimism developers have accelerated protocol growth on-chain and off while in parallel curating reward-based loyalty programs on Optimism to identify its most loyal, valuable contributors. Galxe’s developer-friendly infrastructure has powered the growth of many within Optimism’s ecosystem.",
    displayName: "Galxe",
    impactDescription:
      "Galxe’s infrastructure has played a role in developing and expanding the OP Stack ecosystem by integrating Base, Manta Pacific, and Mode Sepolia into the Galxe platform. Furthermore, Galxe’s contribution to the Optimism Quest shined a spotlight on the Optimism ecosystem and its protocols. The Optimism Quest onboarded new users to Optimism and powered protocol retention\n\nSince Galxe integrated Optimism in July 2022, Galxe has directly powered 6,238,175 unique transactions through the Optimism network. In addition, Galxe partners have launched a total of 1296 quests deployed on Optimism via Galxe\n\nBy engaging with Galxe campaigns, users enable themselves to build their identity/reputation within the Optimism ecosystem by collecting Optimism OATs and NFTs among other achievements. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Impersonator has benefitted the following Optimism users:\n- Traders: With impersonator they can log-in to dapps as whale wallets and study how they have setup their positions in detail.\n\n- Dapp users: They can access dapps on-the-go in view-only mode! They no longer have to keep their Metamask or Hardware wallet nearby just to visit the dapp dashboard. Impersonator works without private-keys.\n\n- Developers:\n- They can test how their dapp would respond for users with various token balances\n- Grab the transaction calldata being generated by dapps and simulate it via tenderly",
    displayName: "Impersonator",
    impactDescription:
      "Impersonator has helped developers in the debugging process for their applications, allowing them to test and verify how their dapps work for different categories of users that hold a particular token or NFTs. They can simulate the calldata for transactions on Tenderly or their local node.\n\nImpersonator has high retention of users that visit the website every day. The browser extension has received a significant number of downloads in the past few months. Exact metrics are shared below.",
    pwCategory: "User Experience & Adoption",
  },
  {
    contributionDescription:
      "As a leading identity data provider on Optimism, Clique has issued 1.14M out of total 1.49M attestations on OP AttestationStation, which are then used by major OP ecosystem protocols like Bungee, Tally, BoredTown, Clipper, Synapse, Perpetual, Orbiter, Aloe, Angle, and many others, for purposes like user screening, Sybil resistance, directional incentive issuance, etc. The attestations encompass users' Twitter metrics, GitHub prowess, Discord interactions, and on-chain behaviors.\nWe actively bring technical innovations to the OP ecosystem such as building the first-ever ZKP-based attestations, TEE-based web2 data attestations, as well as identity-based governance processes. In addition, we are an active contributor to the OP governance itself as a part of its protocol delegation program.",
    displayName: "Clique",
    impactDescription:
      "Clique has greatly pushed forward the adoption of on-chain Attestions on OP as the largest attester with >75% of the market share. Our OP Army program in May resulted in 1.2-2.7% of Optimism’s total tx in six weeks. We've substantially aided partner protocols: 350k deposited on Clipper’s LP, 13k accounts for Tally, etc. \nAs OP Army’s goal was to identify experienced web3 users, we’ve discerned ~10k skilled users from 59k participants post rigorous Sybil checks through our collabs with core DeFi and NFT protocols. Our novel AEE (Attestation Exclusive Events) rewards these 10k with added benefits to incentivize more value creation. Clique's current focus is around further expanding attestation use cases on OP by pinpointing DeFi power users and creating credit attestations using CeFi data.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "The web3 community has no efficient way to survey the thoughts of thinkers, builders and users at scale. Additionally, there are only a few ways to organically build knowledge-based reputation on chain.\n\nPonder currently solves both of these issues by deploying social surveys on Farcaster (Optimism), then rewarding respondents with reputation and tokens (Base) based upon the quality and frequency of responses. These surveys enable users to ask important questions of the community, build their personal reputation by answering, and earn rewards while they’re at it.\n\nWe’ve deployed over 95 surveys in 8 months, and have nearly 500 monthly active users.",
    displayName: "Ponder",
    impactDescription:
      "Ponder, which utilizes Optimism (through Farcaster) & Base (for passes/rewards), has:\n\n- Facilitated public discussions among builders on topics that help them grow their products\n\n- Engaged over 1,000 unique respondents, who are now accumulating reputation for their answers\n\n- Driven significant activity on the Farcaster protocol, serving as a space for users to voice their thoughts and understand the broader community's perspective\n\n- Created new active contracts and transactions with accelerating usage week over week\n",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "AMM: Provides decentralized, unified liquidity, two-sided options markets, and composable delta-hedging. It has had 2 major upgrades; Avalon, increased flexibility for LPs, more expiries, 4-5x increased capital efficiency for traders & Newport enabled cash collateral, and perp hedging for increased LP capital efficiency.\n\nOpen-Source UI: Permissionless software for accessing the Lyra Protocol \nVault Contracts: Example that shows how a vault can execute with the protocol. The contracts, and testing/deployment tools are provided by the protocol SDK. The Vaults enable a wide range of strategies to be built with the contracts.\n\nProtocol SDK: A quick way to import the latest deployments, contract abis, and testing tools for anyone trading algorithmically or building on top of Lyra’s liquidity.",
    displayName: "Lyra Finance",
    impactDescription:
      "Lyra solved fundamental problems for traders in defi with unified liquidity, competitive pricing, improved gas costs, and two-sided, reliable option liquidity, offereing LPs passive, risk-adjusted yield, and improved UX by mitigating IL and risk management.\n\nLyra onboarded numerous developers to OP with developer tooling (Javascript SDK, Docs, Grants), and offered stable, reliable options liquidity programmatically. This led to multiple protocols integrating: Polynomial, Brahma, dSquared, dHedge, Torros, Otus Finance, Strands along with trading interfaces: Kwenta, Sharwa Finance (Dede Lend), data providers: Amber Data, Laevitas, and Aggregators: Teal Finance, stradle.xyz. Enhancing the OP Community with education, trading comps, co-marketing, onboarding incentives, and poker tournament ",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "- Changelog\nLaunched a changelog documenting the frequent changes and updates to the grant programs of the Optimism Collective\n\n- Status Overview\nBuilt a status section providing an overview of the different Collective Grants types, their current status (Open for applications, Closed for applications, ...), and upcoming deadlines\n\n- Optimism Grants Calendar\nReleased a grants calendar that goes beyond the scope of the general-purpose Governance Calendar maintained by the Optimism Foundation\n\n- Launched a FAQ section on the website answering questions related to the grant programs\n\n- Produced 8 weekly updates summarizing recent changes and upcoming deadlines, distributed via newsletter and Governance Forum thread\n",
    displayName: "Optimism Grants Changelog",
    impactDescription:
      '- The original idea to build the website came after reading a feedback thread on the forum and getting the impression that many find it difficult to keep up to date with information about grants ("adhering to the deadlines often required navigating a maze of forum posts")\n\n- With more than 7900 unique website visitors and 1840 outbound link clicks in the last 3 months, the site has played a key role in helping many (prospective) grantees, developers and governance participants stay informed about recent updates and upcoming deadlines of the grant programs\n\n- Subscribers to the weekly newsletter include employees from OpenZeppelin, OP Labs, Wakeup Labs, …\n\n- Governance Forum thread has 593 views and a total of 31 likes\n',
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "We are bringing the Nethermind Client to Optimism, thereby supporting client diversity and providing node operators with an alternative client design. The Nethermind execution client is a highly configurable Ethereum node built on .NET, offering high compatibility, performance, high-speed synchronization, and healthy node monitoring. We are bringing all of these features to the Optimism Network and all OP Stack-based chains.",
    displayName: "Nethermind",
    impactDescription:
      "Instead of creating a fork, we're incorporating support for OP Stack directly into the Nethermind Client. This means users can use the same client for all Ethereum and OP Stack chains, ensuring a consistent experience. Additionally, any new features implemented in the client will be immediately available for OP Stack chains.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "I established \"The Optimism Vision Reservoir\", a resource-rich website illuminating Optimism's ethos, values and vision. \n\nAs of Oct10, it includes 42 Entries:\n11 Thematic Pages: In-depth exploration of key concepts or Founders' Insights.\n10 Ressources on \"understanding RPGF\".\n16 Podcast Summaries: 6 from the 'Retro PGF Podcast'  and 10 from 'Delegate Corner'.\n2 Newsletters reviews\n3 Thematic FAQs: Covering RPGF (12), Optimistic Vision (6) and Optimism Collective questions (6).\n\nEach piece enriches the understanding of the Optimistic Vision. The Reservoir archives key discourses on Optimism's long-term goals and presents additional educational contents. ",
    displayName: "Optimism Vision Reservoir",
    impactDescription:
      "Oct 10th :  Over the last 30 days, The Reservoir has averaged 55 unique visitors daily (see 'Quantitative Impact'.)\nThough this number may appear not much, it is honest work ;-) especially given the niche and the limited influx of new entrants. \n'Optimism Vision: Founders Week' campaign on Twitter received attention, with 1649 impressions and 50 likes\n\nThe Reservoir also received endorsements from three other OP media outlets - The Optimistic Academy, Web3explorer, The Optimism Guide - each of which has linked to The Reservoir, a testament to the quality of our content.\n\nBeyond tangible metrics, the heartwarming feedback from the community also speaks about our impact (see 'Qualitative impact')",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "PublicHAUS governs DAOhaus, offering tools like DAOhaus SDK for easier Moloch DAO management. The DAOhaus Monorepo facilitates collaborative development through core, utility, data, and UI libraries. Community engagement is highlighted in events like Haus Party: 12 Days of DAOcember, exploring DAO topics. Community Calls on Discord foster open discussion on DAO/Web 3 topics. The infrastructure and community initiatives drive a collaborative ecosystem, making decentralized governance more accessible and streamlined.",
    displayName: "Public HAUS",
    impactDescription:
      "PublicHAUS enhanced DAOhaus Protocol's scalability and accessibility on Optimism, lowering technical hurdles via DAOhaus SDK. Events and Community Calls spurred engagement, while educational content on various platforms enriched DAO/web3 understanding. Governance simplification empowered individuals, benefiting Optimists and projects seeking decentralized governance. Cross-community collaborations fostered by PublicHAUS's ethos enriched both ecosystems with diverse insights, creating a robust, community-centric protocol essential for decentralized governance.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "We built and actively maintain 🏗 Scaffold-ETH-2 which allows for rapid prototyping and full scale dApp development on Ethereum.  We also provide a free curriculum at 🏃‍♀️ SpeedRunEthereum.com. A hands on, guided series of challenges to learn how to code and deploy smart contracts all while receiving the assistance of our community. We are also giving small grants to up-and-coming high-impact developers. A yolo to 🏰 BuidlGuidl is a yolo to Ethereum and Optimism builders!!!\n\nWe are also building a tool to help with the next round of retropgf voting and project discovery. We weren't picked to be the main tool but we have built a great app and we think it will be a community favorite! ",
    displayName: "🏰 BuidlGuidl",
    impactDescription:
      "BuidlGuidl focuses on developer growth and mentoring. We build tools and educational content to teach the next wave of builders how/what they can build on Ethereum and Optimism. \n\nWe have SpeedRunEthereum.com and Scaffold-ETH-2 as our main offerings but we are also creating lots of handy tools like abi.ninja!\n\nWe are constantly trying new things and building prototypes on the cutting edge.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Alloy, has emerged as a pivotal tool in the Ethereum and EVM-based chains ecosystem, providing high-performance, well-documented, and thoroughly tested libraries for interaction with Ethereum. \n\nInitially developed as ethers-rs and now rebranded and enhanced as Alloy, it has been instrumental in offering robust, efficient, and strongly-typed abstractions for submitting transactions, subscribing and transforming chain data, and interacting with smart contracts in Rust.\n\nThe evolution of Alloy signifies a substantial contribution to the Ethereum ecosystem, ensuring that developers are equipped with a stable, efficient, and powerful toolkit, thereby facilitating the development of secure and scalable applications on Ethereum and other EVM-based chains.",
    displayName: "Alloy",
    impactDescription:
      "Alloy's integration into the Optimism Collective can significantly elevate the development and operational facets of the Optimism Layer 2 scaling solution, providing developers with a robust, efficient, and secure toolkit for Ethereum application development.\nLeveraging Alloy’s high-performance libraries and well-tested components, developers can optimize the runtime performance and security of applications on the Optimism Layer 2.\nThis not only enhances the efficiency and scalability of applications developed on the platform but also potentially attracts a wider developer community, fostering ecosystem growth, and enabling the Optimism Collective to scale its vision and offerings to a broader user base, thereby solidifying its position in the blockchain and Ethereum development space.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Our team has built and continues to maintain a number of valuable info sites, most notably CryptoFees.info and L2Fees.info. These sites have become popular throughout the community for their ability to communicate fundamentals of the blockchain ecosystem and understand the various projects in these ecosystems.\n\nMaintaining these sites requires us to maintain over 100 different adapters to gather data, while collaborating with the respective teams behind these projects. Our team must also work through the ever-growing backlog of new protocols (chains, DeFi protocols, etc) that are aiming to be listed on the site.",
    displayName: "CryptoStats & CryptoFees.info",
    impactDescription:
      "Websites like CryptoFees and L2Fees help users and developers better understand the blockchain ecosystem.\n\nSpecifically, CryptoFees helps understand blockchain revenue for chains like Optimism, which is revenue that partially goes to public goods. Meanwhile, sites like L2Fees highlight the value that rollups like Optimism offer to users via lower fees.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "We have deployed our Distributed Verifiable Random Function (DVRF) service to Optimism, Base, and Mantle mainnets. We are the first VRF solution on Base and Mantle. \n\nWe have deployed our Distributed Oracle Agreement (DORA), or oracle price feeds push-model with historical consistency check, to Rollux mainnet (built on OP stack).\n\nWe are offering free access to our services on mainnet through our Supra Network Activate Program.",
    displayName: "SupraOracles",
    impactDescription:
      "Supra’s DVRF, the first VRF on Base and Mantle, provides fair random numbers for blockchain gaming and casinoFi, aiding developers in powering dapps with on-chain verifiable randomness. Its VRF design, recognized by ACM CCS 2023, ensures low-latency and security. As the lone oracle provider on Rollux, SupraOracles delivers on-chain price updates for 150 data pairs every 30 seconds, attracting dapps for various protocols. Its oracle chain offers real-world, real-time data access via a unified contract on Rollux, simplifying developer interactions.",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "We currently have ~15 Optimism projects that are running an Immunefi bug bounty program. Some notable projects that we have already worked with include Velodrome, Optimism, Synthetix, Extra Finance, etc. Immunefi has also partnered up with Spearbit to provide bug bounty programs across the Optimism ecosystem for mission-critical applications and platforms.\n\nImmunefi is engaged and constantly working with the Optimism foundation and OP labs team to ensure that we’re aligning ourselves with the community’s needs, expectations, and challenges. Immunefi is fully committed to being a core services provider for the OP ecosystem and we intend to keep our incentives aligned with the community so that we can help continue scaling the OP ecosystem in a safe and secure manner.",
    displayName: "Immunefi",
    impactDescription:
      "Immunefi is already working with ~15 Optimism projects ranging from OP Labs itself to major defi protocols deployed on OP such as Synthetix or Velodrome Finance. Immunefi assisted the OP Labs team in identifying and remediating a $2M critical bug bounty within the OP stack. Please refer to the link below and the following impact metrics for additional information. ",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "We've helped teams on Optimism to distribute locked and vesting tokens to their team, investors, and community. \n\nWe've also helped these tokens become more active in governance by enabling locked and vesting tokens to participate in governance. \n\nA specific contribution has been Collab.Land using Hedgey to distribute locked and vesting tokens to their team and investors using our free, onchain token infrastructure. \n\nIn addition to automating the distribution of these tokens to key supporters, Hedgey's contracts have enabled them to also become active in Onchain governance on Collab.Land proposals (via Tally.)\n\nWe don't expecting any funding and don't need it for our operations. Any funding we do get will be put back into Optimism in the form of a grant for new ideas launching on Optimsm",
    displayName: "Hedgey",
    impactDescription:
      "When Collab.Land distributed their team token vesting and investor lockups via Hedgey's contracts, the locked and vesting tokens were given governance rights that could flexibly be delegated and participate in onchain governance via Tally. This helped bring new participants into the collective by allowing the team and investors to delegate/ vote in a way they previously would not have been able to. ",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "1. Another World won OP's hackathon prizes and we keep building it into a game-like digital world where players are 3D avatars to continue their web3/NFT adventures. NFTs are game items usable in players' inventory. Tokens can unlock access and gameplay. \n\n2. Another World is an OP+OP-stack game. NFTs can be acquired as in-game airdrops via Optimism. We built our OP-stack for treasure-hunt battles where players win or lose on-chain items. We also supply in-game $OP airdrops for players who retrieve certain game items.\n\n3. Another World showcases a simplified UX for both web3 and web2 players to enter a 3D world. Web3 players opt-in by typing in ENS at the entry menu while web2 users are free to play using an URL. \n\n4. Our progress and game sample codes are open-source on GitHub.",
    displayName: "Another World",
    impactDescription:
      "1. We are actively alpha-testing an OP + OP-stack powered digital world with web users and gamers on Epic Games Store and HyperPlay.\n\n2. Another World is bringing Bored Ape Yacht Club members and ApeCoin DAO communities into the Superchain ecosystem through a series of game-related activities and received top votes from the ApeCoinDAO community to fund further experiments.\n\n3. We showcased the shortest path from the official website to entering a 3D world using a web browser. Players can experience the gameplay first before using their wallets.\n\n4. Our open-source code samples (such as Unreal Engine in-game airdrop mechanism and paying on L1 for L2 NFT mints) can bring more game devs into the Superchain ecosystem and reduce the friction of L2 tokens.",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "Our contributions to Optimism have been diverse and impactful. We educated individuals on  OP Stack, opChains and attestations, rewarded numerous projects with a NFT, received recognition for our OPStack content and Attestations Tutorial, conducted informative workshops, engaged in interactive Twitter Spaces discussions, and delivered insightful talks to LatAm communities. \n\nAdditionally, we authored articles to shed light on the Optimism ecosystem. These collective efforts have significantly enhanced awareness and understanding within the Optimism community, particularly in Latin America, leaving a substantial and lasting impact.",
    displayName: "Kairos Research",
    impactDescription:
      "Our impact on Optimism has been significant. We educated individuals on OPStack, opChains and attestations, provided NFT to projects with we are building community, and gained recognition for our EAS Tutorial. \n\nOur initiatives, including hosting a DeFi workshop, Twitter Spaces sessions, and delivering informative talks, have all contributed to a deeper understanding of the Optimism ecosystem. In addition, our authored articles have shed light on the ecosystem's various aspects. \n\nThese combined efforts have left a lasting imprint on the Optimism community, particularly within the Latin American region, fostering growth and engagement.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "Conducted an expert review of user experience audit based on Web3 usability guidelines and expert review checkpoints for the following DApps: Curve Finance, Beefy Finance, Velodrome and KyberSwap.\n\nThe aim was to assess the platform's alignment with industry best practices, ensuring a seamless and user-centric experience for all users interacting with Web3 technologies.\nThe review focused on evaluating critical aspects such as platform accessibility, navigation, search functionality, user education, error handling, and the integration of Web3 wallet functionalities. Through a meticulous assessment, several areas were identified that require immediate attention to enhance the overall user experience.\n",
    displayName: "Marko",
    impactDescription:
      "A good app UX may influence people to use other OP Mainnet apps.\nUX Audits help application developers better serve their target audience.\nEvery audit includes suggestions to improve the Web3 experience of the DApp, developers and product owners can use this information to provide better experiences to their users, increase traffic and DApp usage, which should also reflect to positive user adoption. ",
    pwCategory: "User Experience & Adoption",
  },
  {
    contributionDescription:
      "herocast is a Farcaster decentralized social network client for highly engaged power users and people working in web3. Existing features that users enjoy are fast response time, keyboard-navigation, Command Palette, integration with Noun-ish platforms.",
    displayName: "herocast",
    impactDescription:
      "3rd party client diversity on Farcaster helps to expand the Optimism Collective, by bringing a more diverse set of users to Farcaster, which is only deployed on Optimism.\n\n76 Farcaster accounts have been connected to herocast. \nThere are currently 63 herocast users with 20 of those being weekly active.\n \nUsers must have a Farcaster account, so have executed at least one onchain transaction. Users signing up to herocast must add a signer, which happens via an onchain transaction",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      'Optimism Governance Support:\n\nSince inception, Boardroom has integrated the entire governance stack, streamlining governance for voters and standardizing interactions for developers on our SDK and API.\n\n- Snapshot: Initial support for proposals launched with Snapshot and onchain delegation.\n- Onchain Integration: In collaboration with Agora, Boardroom ensured support for upgraded onchain governance contracts, becoming an alternative to vote.optimism.io by Feb 2023.\n- Dashboard: From launch, our Dashboard has supported governance on boardroom.io/optimism.\n\nGovernance Facilitation: \n\nSince August 2022, our "Weekly Recaps" offer a governance-focused summary for the Optimism community, covering key proposals, changes, suggestions, and discussions. This initiative paused from Aug to Oct 2023.',
    displayName: "Boardroom",
    impactDescription:
      'Increased Participation:\nThe initial support for Snapshot proposals and early onchain delegations, and the subsequent onchain integration has expanded the avenues for community participation. By offering an alternative to vote.optimism.io, we\'ve broadened the choices available to voters, driving higher engagement in governance processes.\n\nStandardized Governance Experience:\nBy integrating the entire Optimism governance stack, Boardroom has provided a consistent and user-friendly governance experience for developers accessing standardized data and governance interactions via our APIs and SDK.  \n\nInformed Community:\nOur "Weekly Recaps" initiative has ensured that the Optimism community remains updated on key governance activities.',
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Odos provides optimal routing through and access to over 53 DeFi apps on Base Mainnet and 39 DeFi apps on Optimism Mainnet. This provides users with a massively improved UX where they can specify a desired swap and/or DeFi interaction (e.g. deposit liquidity into Curve) and get access to the best place(s) to execute this action. \n\nAmong Odos' unique tools and contributions are native multi-input and multi-output swaps, efficient complex routing that exports volume across all DEXs on Optimism, and easy access to more advanced DeFi applications like lending protocols, yield optimizers, CDPs, and liquidity provisioning in DEXs. All of this is accessible through Odos' intuitive dApp, as well as through its free public API that is leveraged in many applications across the Optimism ecosystem.",
    displayName: "Odos",
    impactDescription:
      "On user experience and adoption impact, Odos currently provides swapping services to over 50k monthly users doing almost $100M in monthly volume across Base and optimism. In addition to normal swapping, Odos offers convenient multi-input and multi-output swaps, as well as easy access to lots of DeFi applications.\n\nOn the developer ecosystem side of things, the Odos API provides developers an easy and free way to efficiently and effectively access all of the applications in Optimism's DeFi ecosystem. It is the sole swap solution for 5 distinct Optimistic DeFi UIs (listed above), as well as many meta-aggregation platforms. Additionally, integrated DeFi apps can benefit from additional volume for providing good prices without having to attract users directly.",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "Optimism Arabic community helps spread knowledge and educates Arab users about optimism. This aids in attracting new users and developers while also keeping existing ones informed and up-to-date.\nWe have made numerous contributions, including:\n-Creating original articles\n-Creating educational courses\n-Translating articles\n-Managing the Arab community through Telegram and Twitter and respond to all questions and inquiries\n-Organizing events and competitions\n-Designing infographics",
    displayName: "OptimismArabia",
    impactDescription:
      "After implementing successful marketing strategies, we achieved the top position in Google search results for Optimism news in the Arabic language. The majority of our articles/courses rank in the first/second result on the first page of the Google search engine. this made Optimism Arabic website the first news and educational source for Arab users to know about Optimism.\nThis accomplishment has significantly attracted numerous users and developers, enabling them to learn about and actively engage with Optimism.",
    pwCategory: "International & Multilingual Support",
  },
  {
    contributionDescription:
      "At this moment, no one is doing more to support public goods than Optimism RetroPGF. Despite its already immense impact, RetroPGF has yet to reach its full audience. Many potential contributors doing great things for the Optimism ecosystem remain unaware of the opportunities it offers. To bridge this gap we created a community initiative to promote RetroPGF to a wider audience.Our efforts included targeted research & case study generation, educational content creation, active participation in Ethereum events and building an online community. Offline, we sponsored booths at conferences and shared insights on stage. Online, we launched a dedicated Twitter/ X account and newsletter for real-time updates and built a portal showcasing funded projects, case studies and educational resources. ",
    displayName: "RetroPGF Community",
    impactDescription:
      "We sponsored booths at ETHBarcelona and Funding the Commons at EthCC and doing so onboarded 97 new projects that were previously unaware of RetroPGF. Our continuous engagement on social media created a growing community of grassroot enthusiasts spreading the RetroPGF meme. Additionally, our website acts as a hub, providing an overview of all projects that received funding in rounds 1 and 2, as well as in depth case studies and educational resources to get projects excited about what RetroPGF can do and push them to apply to round 3! \n",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Delegate has built a transformative platform for users to secure assets while still enabling participation in NFT airdrop claims, ERC20 token governance, and more.  To date, Delegate has secured over 2300 Optimism wallets and 250 Base wallets. \n\nOur solution is a programmable registry, deployed on Optimism and Base.  Users and institutions link their cold wallets with hot wallets on delegate.xyz, and then the hot wallet can act on behalf of the cold wallet, like crypto power-of-attorney.  This allows users to manage all their assets across multiple wallets simultaneously without touching anything in their vault, enhancing security and efficiency across airdrops, governance, gaming, DeFi, and more.  \n\nDelegate’s registry is fully onchain, enumerable, independent, immutable, and verifiable.",
    displayName: "Delegate",
    impactDescription:
      "Delegate has improved safety, UX, and reputation tooling for the Collective. Users no longer have to connect their cold wallets/vaults/multisigs to unknown websites, they can \"delegate once, use forever\". This reduces phishing risk and creates a safe NFT/DeFi ecosystem on Optimism, just as we've seen on Ethereum. We've also seen greatly improved UX - by safely interacting from a hot wallet or mobile wallet, users can do low-risk onchain activity like voting or gaming on the go. And onchain reputation, which is critical to Optimism Collective governance, is enhanced by identity clusters formed within the registry.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Following Bedrock, Optimism has been working on Next-Gen Fault Proofs and Cannon. We wanted to be part of it by contributing to the Optimism community and help the masses shed some light on Optimism’s advancements in these areas.\n\nWe’ve provided developers an original way to learn about what interactive fraud proofs are, and why Cannon is fraud proof compatible. This resource encompasses challenges, bisection protocol, one step proof verification, and MIPS EVM.\n\nWe've also partnered with the leading French crypto media to produce a video  explaining the Superchain concept targeting end users. Our intent is to clear frequent misconceptions (that we noticed on socials) and facilitate a comprehensive understanding.",
    displayName: "Node Guardians",
    impactDescription:
      "1. Developers' Growth: The devs delved into innovative problem-solving, exploring new avenues and methodologies, necessary for uncovering unexplored possibilities within the Optimism ecosystem.\n \n2. Community Cohesion: Engaged 90+ developers, note that each user on Node Guardians has to connect his Github account to solve quests and this is how the metrics are tracked.\n\n3. Visibility Boost: 35k views and 100+ likes on Twitter, strengthening Optimism Collective's stance in the space.\n\n4. Technology Showcase: The fraud proof challenge highlighted the real-world applicability and efficiency of Optimism's tech.\n\n5. Valuable Feedback: Post-quest, participants had a better understanding of OP's fraud proofs and expressed interest to delve deeper into Optimism.\n\n6. Video - Awareness - no shilling",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "In it's 10 months of existence KryptoSpace has become the go to place if you want to learn something about Ethereum, DeFi or Layer2s in the Czech republic.\nI was a journalist in a Czech business daily trying to bring crypto news & ideas to mainstream media for years.\nTen months ago we started KryptoSpace. The first episode was published the day after the FTX collapsed so we couldn’t have picked a better timing. But even with the bear market the podcast managed to reach over 100k plays in less than 1yr.\nWe have been encouraging listeners to use Layers 2s since 2021 while continuously educating them about all things crypto.\n\nWhat KS covers:\n- Ethereum\n- DeFi\n- L2s (OP, Arb, Base, Zks, Zora..)\n- Education\n- Ideas we build on\nand more\n",
    displayName: "KryptoSpace",
    impactDescription:
      "Even though it covers crypto in general, the emphasis was always on decentralization and the ideas on which Ethereum was built. Ever since Layer 2s emerged, we have been talking about their advantages and encouraging listeners to start using them, with a big emphasis on Optimism and now the Superchain.\n\nAs its very hard to prove the numbers I am sharing with you the badge from my hosting service (Podbean) for reaching 100k+ listeners early October in Link 1.\n\nSince January 2023 the podcasts are also published on business daily www.e15.cz/kryptospace with short accompanying text to get better reach.",
    pwCategory: "International & Multilingual Support",
  },
  {
    contributionDescription:
      "Lemon’s contributions had and impact in different areas. More precisely:\n\n- Social + Education —> Lemon users have an extremely easy way to get exposure to Optimism network + Token usage through our app. Moreover, we are constantly creating new educational content about Web3, Blockchain and all the tokens and networks we list in our app so as to solve any entering barriers for newcomers. You can read more about it in our Educational Content Impact report listed below.\n- Access to Optimism network —> By using our app, users in 7 different Latin American countries can buy, deposit and withdraw OP, ETH and USDT through the Optimism network in just a few clicks.",
    displayName: "Lemon",
    impactDescription:
      "- Extending the knowledge of Optimism as a whole, with the reach that Lemon currently has in Latin America and the different channels to make this happen, it had a huge impact in terms of extending Optimism collective vision to the future.\n- Onboarding thousands of users that most probably did not have a direct access to the Optimism network and ecosystem by providing an easy-to-use fiat on-ramp for trading OP, ETH and USDT on Optimism network.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "RetroPGF Hub is the central hub for Optimists and the broader community to engage, explore, discover, and stay informed about all things related to RetroPGF. \n\nWe are offering a platform for community members to provide supportive comments or suggestions on projects, helping creators determine their eligibility for criteria in RetroPGF3. It serves as a comprehensive learning and discovery space, encapsulating historical context, scope, criteria, nominated projects, result statistics, and reflections in each round of RetroPGF. Whether you're a builder, user, or just curious about RetroPGF, this hub is your gateway to knowledge, collaboration, and community awareness.",
    displayName: "RetroPGF Hub",
    impactDescription:
      "RetroPGF Hub is your platform for discovering and exploring the world of RetroPGF. With its user-friendly interface, it brings both long-standing members and newcomers into the RetroPGF space. By amplifying community voices and governance participation, RetroPGF Hub connects users directly with the Citizens' House, creating a vibrant hub for all things RetroPGF.\n\nThis had a significant impact on the Optimism ecosystem. They provide tangible and intangible benefits to Optimists and badgeholders alike. Users can access deep project information, award results, and statistics, enabling them to make informed decisions and review projects within the current RetroPGF round. This accessibility empowers the community, fosters collaboration, and benefits all those engaged in RetroPGF.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "𝗧𝗟𝗗𝗥\nBuilt a Dune dashboard on ERC4337 Smart Accounts. Provides valuable insight for teams building smart account infrastructure.\n\n𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻\nThis dashboard breaks down \n- Overview statistics  (accounts deployed, monthly transactions .etc)\n- Bundler Performance (marketshare, revenue .etc)\n- Paymaster activity (marketshare, gas spend .etc)\n- Application usage by ERC4337 accounts \n\nIt is currently the most popular Dune dashboard for ERC4337 with 410+ stars. ",
    displayName: "ERC4337 Smart Accounts Dune Dashboard",
    impactDescription:
      "190k+ ERC4337 accounts have been deployed on Optimism and Base, making the Superchain one of the top ecosystems for smart account activity. \n\nMost teams building ERC4337 infrastructure use the data from this dashboard to track the category's growth and inform their strategies.\n\n𝗧𝗲𝘀𝘁𝗶𝗺𝗼𝗻𝗶𝗮𝗹𝘀\n\n“Kofi has substantially contributed to the excitement around Account Abstraction over the last months. Being able to transparently see the continued adoption of Smart Accounts via his Dune Dashboard clearly showed the community the progress this new ecosystem is making.”\nLukas Schor\nFounder of Safe\n\n“Kofi has built the go-to dashboard for all ERC4337 data. I check it all the time!”\nKristof Gazso\nCo-author of EIP4337\nFounder of Pimlico [ERC4337 Bundler and Paymaster provider]",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "EtherScore is a reputation system that uses NFTs to represent Web3 achievements. The system provides badges based on user interactions such as voting in DAOs, swapping or lending coins/NFTs, etc. Users can collect badges to improve their on-chain reputation and build their EtherScore profile. On top of this, Dapps can develop services that require a reputation system, such as curated social networks, fair airdrops/ICOs, DeFi, DAO governance etc. Chainlink and The Graph are used for decentralization and verifiability of our solution.\n\nThe alpha version of EtherScore is live on Mumbai testnet and offers more than 80 badges for users of the most popular Dapps and chains. Of these 80 badges, 13 are related to the Optimism ecosystem, cumulating to 120,000 mints (details in the Impact section).",
    displayName: "EtherScore",
    impactDescription:
      "Out of our total badges, 16% are related to the OP Stack, accounting for 18% of the 687k minted badges.\n\nUser Onboarding and Education: We've incentivized and facilitated new user adoption, promoting actions like utilizing the official bridge and participating in DAO governance.\n\nUser Experience: EtherScore simplifies on-chain activity summaries, enhancing the user experience and making it easier for users to monitor their achievements within the Optimism ecosystem.\n\nSybil Resistance Tool: Our tool has applications such as reputation-based governance and fair reward distribution, promoting inclusivity and fairness.\n\nIn addition, our EtherScore badge collection recognizes and rewards user contributions within the Optimism ecosystem (details of badges with their stats in spreadsheet).",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "As the intermediate language for Vyper, Venom greatly facilitates optimizations resulting in drastically reduced bytecode size and gas usage. Fang can be used to compile Venom IR directly to assembly or EVM bytecode.\n\nVenom offers a reduction in 20 to 30% of the size of the bytecode produced and in equivalent gas savings (up to 3 gas per byte saved, depending on usage patterns).\n\nVenom gives lower-level access to developers and auditors, facilitating the analysis and security auditing of smart contracts.\n\nWhile implemented for Vyper, Venom is language agnostic and can work as an IR for other high level smart contract programming languages.",
    displayName: "Venom & Fang",
    impactDescription:
      "By making it easier to map IR to source code and bytecode, Venom increases the auditability and security of the OP Stack.\n\nThe optimization allowed by Venom and the Fang compiler improve the efficiency of the OP stack by reducing gas usage and contract size, allowing developers to write more complex contracts",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Bankless Ukraine participated in Optimism DAOs Season 4 to create multimedia content in Ukranian langauge. We are young crypto enthusiasts who are passionate about the achievements of the Optimism ecosystem, and we would be happy to share information about your excellent network with Ukrainian-speaking people.",
    displayName: "BanklessUA",
    impactDescription:
      "We were able to help propagate the Optimistic Vision and mission to a community of Ukrainian speakers via:\n\nNewsletters 1.35k views per month. \n\n1. The Bankless Guide to Base \n2. Optimism Provides a Shared Resource For DAOs\n3. The Optimism Collective’s RetroPGF Learning Journey | Layer 2 Review\n4. Welcoming Base\n5. OP Grants Stack: The Wellspring of Regenerative Cryptoeconomics | Layer 2 Review\n6. What Is the Law of Chains?\n7. Optimism Synthesizes a New Economic Paradigm | Layer 2 Review\n8. Hands-On Learning for Optimistic Hearts | BanklessDAO Weekly Rollup\n9. Optimism’s Governance Is Tuned Into Community\n10. From the Ashes of Moloch, Ether’s Phoenix Rises | Layer 2 Review\nAnd more....\n\nAnd Social Media posts 2k+ views and 270+ Engagement \n\n1. Posts on Telegram + X (Twitter) \n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "1) OP Contributions Dashboard: (100+ resources)\nDirect impact for Contribution Idea #12, Ecosystem Project Idea: Ecosystem Contributions Dashboard OP Collective currently lists the contribution ideas on Github repository, which is not an efficient user journey. The dashboard makes the user journey for discovering contribution ideas a breeze. \n\n2) Grants Dashboard: \nA comprehensive database of 290+ projects that have received grants from Optimism. Easy access to beautiful statistical charts about OP Grants\n\n3) Grantee list: (290+ resources)\nGrantee data is scattered across the forum, the Grant3 list gives all the grantee data in one place so that the community members do not have to scan through forum manually \n\n4) Analytics database: Aggregation of Dune and other analytical resources. ",
    displayName: "Optimism Grant Analytics: Grant3",
    impactDescription:
      "Optimism ecosystem and grant analytics helps connect users with Optimism data more effectively and efficiently. The project impacts OP community by structuring grantee data that is scattered across different platforms- forum, Charmverse, Tally and more.\n\nThe current community user journey to discover grantee details is to manually search through forums and read through data. The grantee list makes it very efficient and effective to search through hundreds of grantees. Along with the dashboard that gives you a complete picture of the grants programs.\n\nThe contributions database makes it easy for community members and hopeful contributors to discover contribution ideas more easily. Totally eliminating the need for visiting the GitHub interface, the advanced filters make it more impactful.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "We serve as a platform for builders and participants to contribute to the Optimism Ecosystem. Our dedication lies in onboarding women (non-exclusively) into the Optimism Collective through:\n1. Educational resources, including workshops, newsletter posts, X-spaces, and social media content.\n2. Ongoing 1:1 sessions for the community through a dedicated Telegram group, aimed at addressing questions related to Missions, RetroPGF applications, attestations, becoming delegates, and similar inquiries.\n3. Additionally, we have served as a platform for hosting in-person events related to Optimism, leveraging our economic and organizational resources. \n4. We've also provided financial support for speakers to attend Optimism-related events.",
    displayName: "HER LATAM _ Optimistas Brillando en Blockchain",
    impactDescription:
      "Collective Governance:\nDelegated 45.23% of delegate Brichis's voting power, increasing the votable supply. \nOur community supports 2 active delegates, 2 badgeholders, and 3 former Scholars, now candidates to become Council Members. \nWe've empowered Latin American women with 5 1:1 sessions on becoming delegates.\n\nDeveloper Ecosystem:\nSponsored 80+ scholars, with 4 projects deployed on OP, 2 winning Optimism prizes. \nGuided 2 community members on how to contribute as Optimism documentation translators. \n\nIn Season 4, we excelled in a Mission, exceeding Cohort interest, providing extra 1:1 sessions, and offering RetroPGF3 application guidance.\n\nWe have provided guidance and support for first-time users in the Optimism Ecosystem, helping them navigate transactions and make attestations",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Alchemy's Account Kit is complete toolkit for EVM developers to embed ERC-4337 smart accounts in their apps. Account Kit incorporates: \n\n- Rundler, an open sourced bundler in Rust, tailored to Optimism and Base fee markets\n\n- aa-sdk, an open sourced library to integrate and deploy smart accounts\n\n- Light Account, an open sourced, audited and gas-optimized smart account with factories on Optimism and Base\n\n- Gas Manager, a performant ERC-4337 paymaster \n\nAlchemy has also launched and is working with the community on Ethereum EIP: ERC-6900, a standard for smart accounts and plugins designed to foster open innovation and interoperability. \n\nFinally, Alchemy has produced extensive account abstraction educational content and developer documentation.",
    displayName: "Alchemy",
    impactDescription:
      "While is very early days for account abstraction, Alchemy’s contributions have had a measurable impact on the ecosystem across a number of dimensions. \n\nWallets using our infrastructure have grown to become the leading source of account abstraction transactions (or UserOps) for both Optimism and Base since its launch, with both our bundlers and paymasters for each chain serving the overwhelming majority of UserOps by October 2023. \n\nFinally, our educational content has been accessed by thousands, and spans dozens of blog posts as well as video and other content.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "=>Integration with Our Decentralized Ed-Tech Platform: We have integrated the Optimism (OP) chain into our decentralized ed-tech platform. This integration allows users to seamlessly enroll in courses on our platform using OP chain technology.\n\n=>Offering Courses for OP Chain Projects: In addition to enrollment, we provide specialized courses that teach users how to build projects on the OP chain. These courses not only educate users about the OP chain but also demonstrate the practical benefits it offers.",
    displayName: "Decentraclasses",
    impactDescription:
      "\n=>Increased Transaction Activity: Our integration has led to a significant increase in transaction activity on the OP chain. More users are actively engaging with the network, contributing to its growth.\n\n=>Project Creation on OP Chain: By offering courses that guide users in creating projects on the OP chain, we have empowered individuals to become active participants in the ecosystem. This has fostered a sense of ownership and involvement within the Optimism Collective.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "RetroList provides an alternative to the RetroPGF List Creation UI, using a rubric-based approach to allocate OP to projects. RetroList is open to the public, allowing everyone to create their own lists and contribute to RetroPGF3.\n\nRetroList differs from Supermodular's list creation UI in two major ways:\n1. RetroList utilizes rubric-based scoring\n2. RetroList is open to the public, enabling everyone to create their own lists\n\nRetroList implement a novel approval mechanism to filter out spam efficiently as follows:\n1. Users connect their Twitter and Discord and create a list -> Status: Draft (Hidden)\n2. Our team does a preliminary review -> Status: Qualified (Show only in our UI)\n3. A badgeholder approves the list -> Status: Approved (Usable in the ballot)",
    displayName: "Retrolist | RetroPGF Rubric-based List Creation UI",
    impactDescription:
      "RetroList integrates a rubric-based scoring system, endorsed by the grant council for its efficiency, into RetroPGF 3.\n\nWe have done a market validation on a small group of active contributors and 10+ non-badgeholders are showing interest in creating a list for RetroPGF 3 with RetroList!\n\nOur novel approval mechanism is designed by discussing with badgeholders.\n\nWe have designed 10 rubrics for RetroPGF 3 which 3 of them adopted from the grant council:\n- Grant Council's Builder Rubric\n- Grant Council's Growth Rubric\n- Grant Council's RPC Provider Rubric\n- TVL and Volume Rubric\n- OP Stack Hack Rubric\n- Developer and DAO Tooling Rubric\n- NFT, DAO, and Artist Community Rubric\n- Educational, Research and Content Rubric\n- Open Source Contribution Rubric\n- Dashboard and Analytics Rubric",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Bankless Africa has played a pivotal role in creating awareness and accelerating the understanding and adoption of Optimism across Africa. Our efforts have been instrumental in educating and onboarding everyday Africans to the Optimism ecosystem by fervently promoting and propagating the optimistic vision, technology and community.",
    displayName: "Bankless Africa",
    impactDescription:
      "Education and Awareness\nBankless Africa educated new and existing audience about the Optimism collective through diverse channels, reaching over 3,000 audience across Africa and beyond. Content covered Optimism basics, technology, benefits and usage, fostering a positive outlook for the Op collective in Africa\n\nOnboarding through IRL Meetups\nBankless Africa hosted over 4 meet ups across African cities/villages in Nigeria, Ghana and Kenya focused specifically on effective onboarding. Attendees were showed how to create wallets, add op network and engage in simple transactions such as transfers and minting nfts\n\nCommunity Building \nBankless Africa fostered an Op-centric community by engaging community members in informative AMAs and empowering members to participate in the collective",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We've successfully launched our foundational governed liquidity layer and are committed to elevating it further with continuous enhancements and expansions. Our deployment offers a seamless liquidity flow that rewards both liquidity providers and veSCALE token holders. In addition to our cutting-edge technology, we're dedicated to providing an educational series that empowers users in navigating our product and the broader DeFi landscape.",
    displayName: "Equalizer",
    impactDescription:
      "We have begun onboarding new users to the base chain and are actively nurturing relationships with various projects, all the while educating the user base about the systems available for on-chain use. Our efforts have met with considerable success in aiding new on-chain users in comprehending the DEFI ecosystem and providing liquidity to network users.",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "Fast, free, and built for web3 contributors, Taxman is a quick and easy tool to calculate DAO income taxes.\n\nTaxman was built in BanklessDAO, a landing place for new web3 contributors.  One of the biggest surprises facing new contributors is the tax liability they take on when accepting tokens for their work. The 2021 tax season was especially bad, as token prices fell by 80-90%, leaving contributors with a hefty, surprise tax bill and reduced ability to pay.  Many contributors walked away from the space entirely.\n\nTo solve this, Taxman allows anyone to calculate their DAO income taxes in their own fiat currency in 10 minutes.  DAO contributors can set aside taxes as they earn, avoiding a surprise tax bill, giving them piece of mind to continue contributing to they web3 projects they love.",
    displayName: "Taxman: The Web3 Income Tax Helper ",
    impactDescription:
      "Taxman helped many DAO contributors (especially at BanklessDAO) calculate their tax liability while they earned, reducing stress during tax season.  This reduced stress smooths out the contribution process, encouraging contributors to keep contributing year after year.  \n\nMany contributors at BanklessDAO who used Taxman are working on education and awareness projects for the Optimism Collective.  Taxman supports these contributors so they can do their best work for the collective.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Season 4 has been an inflection point for the grants program, during which the review process went from a system that worked in theory to a system that is strengthened by practice.\n\nOn average, the Cycles in Season 4 saw a nearly 30% increase in proposals relative to Season 3 Cycles. There were more than 350 total proposals processed by the Grants Council in Season 4, relative to approximately 150 proposals processed in Season 3.\n\nThe Council scaled its process to accommodate the growing demand for Optimism grants. Each sub-committee refined rubrics tailored to the goal of Intent 2 (Innovating on Novel Applications), and the reviewers learned how to provide robust, yet efficient reviews to manage substantial growth.  We also piloted demand-based granting through the RFG program.",
    displayName: "Optimism Grants Council Season 4",
    impactDescription:
      "The council was able to create a more streamlined and consistent process for proposers, set a pace for grant distributions, and define clear expectations for grant applicants.  The council was able to generate meaningful requests for grants that ranged from audit services and RPC capacity to cross chain interoperability research.  Overall, the grants council has reduced the workload of Token House delegates, enabling them to focus their energies on high-impact votes.\n",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Supranational develops and maintains 'blst', a BLS12-381 signature library used by all Ethereum consensus clients. blst is high-performance and has undergone audits and formal verification, helping to ensure the security and scalability of Ethereum. It is also the cryptography library used to enable EIP-4844, which will allow rollups like Optimisim to achieve improved scalability and throughput.",
    displayName: "blst Cryptography Library",
    impactDescription:
      "'blst' is the cryptography library used to enable EIP-4844, which will allow rollups like Optimisim to achieve improved scalability and throughput. Further, blst can be used to power BLS signature account abstraction which will enable more secure and scalable ways of executing and aggregating transactions.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "UNWA support onchain music artists like San Holo, Rohki, TK, Daniel Allan... / labels like Coop Records, Ziggy Ziggy... in Sound.xyz on Optimism not only in financial but also in helping them understand collectors thinking.\n\nWhat we have done atm:\n\n- Top 4 curators leaderboard (revenue referrals in Sound) which helped artists get financial through their onchain music & brought music lovers to Sound on Optimism.\n- Top 3 mints driven which helped artists bring thousand tracks to fan.\n- UNWA members are top1 - 10 collectors in many music projects / artists which funded artists in their onchain journey.\n\nWe did many educational talking & sharing about onchain music in not only our community but also in many communities in VN. We believe music onchain could bring a good impact to crypto space.",
    displayName: "UNWA",
    impactDescription:
      "- Top 4 curators leader board (top 4 revenue referral in Sound): ~ 5 ETH in total volume\n- Top 3 mints driven: ~ 3200 nft music tracks for more than 50 projects / artists\n- Top 6 in number of artists supporting: 53 projects / artists in Sound.\n- UNWA members are top1 - top 10 collectors in many  projects / artists: Top1 San Holo, Top 5 TK, Top 7 Rohki, Top 5 Sadye, Top 1 High Tropics, Top 4 Sarah Phillips... (link below)\n- We brought hundred of new people to Music Web3 on Sound. Couldnt track the exact number because many didnt mint through our ref links. But for example 30+ of them are using UNWA behind their name to show our music sharing culture (the last link below ***)",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "I built and maintain seedle.finance. It's a tool for tracking performance and managing Uniswap V3 positions. With Seedle, LPs can easily see the fee APYs, net gains (including impermanent losses), and full transaction history of the positions (incl. gas fees). Also, they can use Seedle to swap & add liquidity to positions easily.",
    displayName: "Seedle",
    impactDescription:
      "* Seedle added support for Optimism as soon as Uniswap V3 launched on Optimism.\n* It was also one of the first UIs that showed positions across networks, which promoted Optimism for LPs who haven't discovered it before.\n* Seedle also includes gas costs when calculating position gains, this helps LPs to choose between mainnet and L2s when deploying their liquidity.",
    pwCategory: "User Experience & Adoption",
  },
  {
    contributionDescription:
      "We launched our new version on Optimism and have pool to earn donations for Coin Center, The Protocol Guild, and Gitcoin Grants. Contributors deposit tokens into JustCause Pools which in turn deposit them into lending protocols. The interest earned is donated to the cause associated with the Pool. When Contributors need access to their funds they simply withdraw their original deposit and the interest accrued is left behind for the cause. We have almost $30k USD deposited in our first few weeks. ",
    displayName: "JustCause",
    impactDescription:
      "JustCause is a state-of-the-art crowdfunding app that allows users to contribute to public goods, important charitable organizations, community projects, and numerous other causes, all while confidently preserving their initial deposit and fostering community goodwill.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Frens is a social messaging app for onchain friends (iOS/Android). We’ve built a private messaging app that natively supports token-gating, crypto transactions, Farcaster (auth, identity, content), and Zora network NFTs.\n\nHow onchain communities use Frens:\n- The Farcaster community used Frens to organize grassroots meetups and conferences (e.g. Farcon, ETH Denver, NFT.NYC, EthCC)\n- The Purple DAO community used Frens to discuss proposals\n- The Orange DAO community used Frens to coordinate DAO retreats and meet ups at conferences (e.g. ETH Denver, EthCC)\n- Farcaster sub-communities have formed on Frens like the FC chess club, Eventcasters, and fundraising advice\n- A16z CSS 23 founders use Frens to communicate privately in founders-only groups",
    displayName: "Frens",
    impactDescription:
      "Frens pushes the boundaries of crypto-enabled consumer user experiences:\n- When a user shares a link to Farcaster, they see an interactive embed they can like and reshare — without leaving the chat\n- When a user shares a link to Eventcaster, they can RSVP to the event without leaving the chat\n- View NFT activity of group members within chat (supports Eth Mainnet and Zora network)\n- Discover and join NFT-gated groups\n- Token-gated location sharing at conferences and events\n\nIn the past 12 months:\n- The Farcaster community used Frens to coordinate FarCon in Boston (Farcaster unconference), community meetups at Eth Denver, NFT NYC, and EthCC\n- Orange DAO used Frens to coordinate 2 strategic IRL retreats\n- Founders in the a16z CSS 23 cohort used Frens to create founder-NFT-gated group chats",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "We have contributed to Optimism by building a no. of products/tools for the collective and larger web3 community on top of Optimism\n\n1. Delegate Dashboard - We have indexed 1.5k delegates and their activity on forum and off/on chain voting system and is being updated daily. It's used to hold delegates accountable, improve visibility and help tokenholders discover candidates.\n\n2. Onchain DAO Delegate Registry - Delegate info is scattered across different gov. frontends. To solve this, we built an onchain registry of delegates on Optimism to store all delegate info. \n\n3. Karma GAP (Grantee Accountability Protocol) - It's difficult for community to keep track of grantees and their progress. We built protocol on Optimism+EAS to help grantees post updates, hold them accountable and build rep. ",
    displayName: "Karma",
    impactDescription:
      "The impact of the products and tools we have built are:\n \n1. Delegate dashboard: It is primarily used for looking up detailed activity metrics. No other tool aggregates activity across voting systems and forum. Delegates on Optimism forum regularly post their Karma's profile link to show their activity.\n\n2. DAO Delegate Registry: Karma has already integrated the Delegate Registry into all our dashboards for various DAOs. Delegates across different DAOs are starting to register their information onchain.\n\n3. Karma GAP - We soft launched GAP and grantees are starting to post milestone updates onchain.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Prior to RainbowKit, building a “Connect Wallet” experience was big overhead and required frequent maintenance for developers.  For users, connecting to dapps was a convoluted and unstable experience. Particularly, switching between networks caused friction that often blocked users from experimenting with L2s like Optimism. \n\nWe built RainbowKit to be the best connect-to-wallet experience for users and the best integration experience for developers. RainbowKit makes connecting your wallet and switching networks a smooth, reliable and enjoyable experience. RainbowKit is fast, easy and highly customizable for developers to install and maintain.\n\nRainbow built RainbowKit to be an open-source public good. Rainbow does not track data or monetize from the SDK. ",
    displayName: "RainbowKit",
    impactDescription:
      "- RainbowKit's (RK) fast, easy and highly customizable set up has made it easier for developers to build and deploy dapps on multiple networks. \n-RK has become the leading \"Connect Wallet\" SDK, powering 27% of top 100 dapps across chains, including Optimism, Base, and Zora's native web properties and Optimism's official starter kit.\n- RK is committed to supporting OP Stack chains out of the box, adding Zora Chain and Base at launch with all network branding.\n- RK network management improvements make switching, connecting and signing transactions with OP chains easy and reliable for users. Users are 39% more likely to complete transaction on OP chain in dapps that use RK vs other connectors. Users are 139% more likely to switch networks after completing a transaction in RK dapps. ",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Besides covering Optimism related projects in our newsletter, we are midway through publishing a research series on Optimism RetroPGF Round 2:\n- Part 1: Breaking down the exact behavior of grant recipients (holding/selling/untraceable) and providing an open-source dashboard with their movements\n- Part 2: Diving into more detail for some of the recipients\n- Part 3: Our assessment of the RetroPGF and our recommendations for Optimism governance\n\nAdditionally, we have just kickstarted a research series on Modular Blockchain Architecture that breaks down the wider thesis on scaling blockchains, especially Ethereum. Find our initial intro piece here: https://chronicle.castlecapital.vc/p/modular-thesis-scaling-web3-rollups",
    displayName: "Castle Capital",
    impactDescription:
      "Our research publications educate and inform the space about many important topics, with a focus on both governance and technology helping to scale blockchains, allowing for new break-though applications. \n\nOur audience has been completely built in the bear market of 2023 meaning our reach is completely organic and made up of participants who have remained in the space this entire time.\n\nOur main objectives within the web3 space, which also applies to the Optimism ecosystem, are to provide educational insights, accountability, and transparency, and be an all-around valuable organization for the industry.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "We help protocols, service providers, and DAOs on Optimism participate in, track, and benefit from standards for DAO metadata, proposals, governance, grants, regulatory compliance, and more.\n\nOur direct contributions to Optimism include: \n1. authoring EIP-4824,\n2. deploying and maintaining the EIP-4824 contracts, subgraphs, and explorer for Optimism,\n3. simplifying daoURI creation by building supporting infrastructure,\n4. engaging 20+ DAOs and tools on Optimism, with the Optimism Collective, ShapeShift, Unlock Protocol, Snapshot X, and LXDAO committing to adopt EIP-4824, and\n5. authoring standards on grants management and attestations. \n\nOur collaborative efforts have streamlined governance on Optimism and positioned DAOstar’s standards as key drivers for the ecosystem's DAO strategy.",
    displayName: "EIP-4824/ DAOstar",
    impactDescription:
      "Adoption: 4 DAOs on Optimism have already adopted EIP-4824. The adoption by Snapshot ensures that future DAOs using the framework on Optimism will automatically comply with EIP-4824. \n\nEngagement: We collected feedback from the 20+ projects on Optimism, ensuring that the implementation of EIP-4824 aligns with community needs. \n\nAccess: Our technical infrastructure improvements (contract upgrades, integrations with Snapshot & Boardroom, the explorer for Optimism, etc.) have made the adoption of EIP-4824 on Optimism easier. \n\nInnovation: Our work on attestations, grants, delegations, and regulatory interoperability take inspiration from EIP-4824. Multiple Optimism projects including Gitcoin, Tally, OpenZepplin, EAS, Agora, and others are involved in the projects. ",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Synthetix, an open-source DeFi protocol, enables developers to create derivative protocols on Optimism by leveraging its robust liquidity and infrastructure. As the #1 protocol on Optimism by TVL, Synthetix helps to onboard high-value DeFi developers, protocols, and users into the Optimism collective. Synthetix was the first protocol to launch on Optimism and has a long history of working alongside the Optimism to support the collective.\n\nWe have already assisted in onboarding a significant number of developers and protocols to Optimism and aim to maintain this momentum with our upcoming V3 release. \n\nIn addition to the successes of Synthetix at the protocol level, we have also nurtured a community that serves as a breeding ground for users contributing to the OP Collective.\n",
    displayName: "Synthetix",
    impactDescription:
      "Synthetix's presence on Optimism significantly contributes to the growth and vibrancy of the ecosystem. By providing liquidity and infrastructure, it enables the seamless creation of derivative protocols, attracting a broader developer and user base to Optimism.\n\nSynthetix has onboarded and supported ecosystem developers and projects, including Kwenta, Polynomial, Lyra, Thales, dHEDGE/Toros, Rage Trade, and more.\n\nOur community has established itself as a hub of open-source developers, data scientists, and value-adding users contributing to the OP Stack. Examples include:\n- Identified issues that led to OP Stack sequencer upgrades\n- Developer tooling (Cannon and Synpress)\n- Decentralized frontend innovations\n- Open-source indexer from Polynomial \n- Dune Dashboards and OP Data Analysis\n",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "Pocket provides RPCs for Optimism developers via its decentralised node network.  Our noderunners have provided over 11.5 Billion relays to Optimism since June 2022.  \nWe have started integrating OP Stack chains by supporting BASE (136 Million relays since August 2023). \nWe also provide a dedicated public endpoint for Optimism free of charge to end users.\n\nFor developers, we provide a generous free tier up to 100,000 relays per day.  Our decentralised network enjoys near perfect uptime.",
    displayName: "Pocket Network",
    impactDescription:
      "- Enabling developers to build applications on top of Optimism and make 11.5 Billion calls to the Optimism blockchain\n- Providing end-users a public endpoint for Optimism that enjoys near perfect uptime and provides a decentralised RPC connection for their wallet.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Frame is a web3 platform that provides a secure, system-wide interface to your chains and accounts, enabling any browser, command-line, or native application to leverage OP chains.\n\nFrame's local RPC has proven to be a useful tool for developers, giving them easy and secure access to OP chains, improving the developer experience.\n\nFrame ships with both Optimism and Base as default chains. As a Base launch partner, we provided users with access to both Base Goerli and Base Mainnet from day one.\n\nWe also support both Optimism and Base via Pylon, our new infrastructure initiative which services a large and growing number of requests to OP chains every month.\n\nOmnichain routing in Frame greatly improves the OP user experience by allowing dapps to route to multiple chains in parallel.",
    displayName: "Frame",
    impactDescription:
      "Frame is working to improve the OP ecosystem by simplifying access and enhancing the developer experience. Frame's system-wide interface expands the OP ecosystem beyond the browser, allowing diverse software and use cases to utilize it.\n\nDevelopers use Frame's local RPC to facilitate secure access to OP chains for deployment and other operations. \n\nWith the launch of Pylon, we're now servicing hundreds of millions of requests to OP chains every month, striving to provide all users with a private connection to OP chains.\n\nOmnichain routing in Frame allows dapps to interact with multiple chains in parallel, streamlining user operations across a superchain ecosystem.\n\nFrame's contributions are driven by the feedback from our community as we continue to address the needs of the OP ecosystem.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "WOOFi has driven a consistent stream of new users into Optimism, now responsible for $64M of assets crosschain swapped into the ecosystem. In doing so, we have flooded Optimism with more unique active wallets and allowed native protocols to reach new audiences.\n\nWOOFi has provided leading single-sided yield for the OP token. We enabled users to lend their OP tokens to a professional market maker and earn hassle-free yield without impermanent loss making it a more enticing asset to own.\n\nWOOFi has generated $400M+ trading volume with as little as 6 supported assets and $1M in TVL. This unmatched capital efficiency has made WOOFi a revered liquidity source in Optimism’s DEX landscape, empowering traders with best pricing and accounting for 10% of the entire network's daily DEX volume.  \n",
    displayName: "WOOFi",
    impactDescription:
      "Optimism Specific\n\n$400M+ trading volume (~10% of daily Optimism DEX volume)\nResponsible for $64M of assets cross-chain swapped (442,551 tx)\nLeading single-sided yield on OP \nSupported withdrawals and deposits on our centralized exchange WOO X \nRanked #7 of all Optimism dapps by MAU\nRebated $12,500 to aggregators\nLed a quest which brought 30k+ onchain\nRan a campaign with Cyberconnect rewarding 10,000 Optimism users\nWOOFi Pro built on OP Stack\nRanked #7 by MAU on Optimism \n \nBase Specific\n\nAchieved $14M+ trading volume\nRanked #9 Base dapps by MAU\nFacilitated $1M of assets cross-chain swapped in and out of Base\nBecame the first project to use an embedded Layer3 quest to bring users into Base\nOne of the earliest adopters of Base testnet (March 16th) and Mainnet (August 15th)",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "Rollup.codes serves as an open-source developer tool, providing devs with clarity on the differences between various rollups and their stacks. The website gives information on gas costs, custom precompiles, native precompiles support, system contracts, properties of the native L1 ⇔ L2 messaging protocol provided by the given rollup.\n\nCurrently, rollup.codes supports Optimism, Arbitrum, Polygon zkEVM and zkSync.",
    displayName: "Rollup.codes",
    impactDescription:
      "EVM implementations in rollups are not the same. There is no single EVM standard and each rollup has its specifics and intricacies, such as custom precompiles, opcodes etc.\n\nFor rollup developers, this info is usually hard to find and they have to dive deep into the rollups codebase, as documentation is more often than not - unsatisfactory. Rollup.codes is a comprehensive website showcasing each rollup's most important developers' information. Our goal is for it to become the go-to place for rollup developers.\n\nRollup.codes helps developers leveraging the OP stack understand the differences between the OP stack and the Ethereum EVM, as well as between the OP stack and other rollups.\n\nSince launch, we've had 1100 unique users over the past 2.5 months.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "The Ethernaut is a community-driven capture-the-flag wargame that challenges developers of all levels to break smart contracts while learning common solidity vulnerabilities maintained by OpenZeppelin. Each level is a gamified experience where a smart contract needs to be 'hacked'. It is 100% open source and all levels are contributions made by other players.\n\nIn the last 2-years we have added 5 new levels, done a complete redesign of the UI, added support for multiple networks incl. Goerli-Optimism, translated the game into 10 languages, added a leaderboard feature and refactored the GitHub repository to host discussions and technical support.\n\nWe believe that The Ethernaut is essential in the the training of developers across the Ethereum ecosystem including the Optimism network.",
    displayName: "The Ethernaut",
    impactDescription:
      "The Ethernaut is a hub for developers to understand smart contract security. It is also a key resource for new blockchain security researchers entering the field.\n\nIn the game, players’ skills are measured and recognized through a public leaderboard where they can link their contact details and build a reputation. Each network has its own leaderboard.\n\nThe game is always expanding with a current total of 29 distinct levels, where in each one of them, the player is engaged in a gamified experience that involves researching and exploiting a vulnerability in the contract.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "The Optimism Resource Center consolidates more than 100 resources related to Optimism governance on a single website. Previously, those resources were scattered across a range of locations such as the Community Hub, Governance Forum, Mirror, Charmverse, Notion, and GitHub. This fragmentation made it challenging to find relevant information.\n\nSome of the most popular features of the Optimism Resource Center are the popover previews that are displayed when you hover over a linked page (just like in Wikipedia), and the graph view that allows you to visually explore the connections between the governance resources.\n \nWe also opened 5 pull requests (3 merged) to the official Community Hub repo to fix outdated information we found while searching for resources to include in the site.",
    displayName: "Optimism Resource Center",
    impactDescription:
      'By bringing together all resources related to Optimism governance, the center simplifies the process of finding information, making it easier and more time-efficient for governance participants and users alike.\n\nIn October alone (Oct 1st - 23rd), the site has reached 665 unique visitors and 3465 page views. \n\nWe are particularly proud to hear about many OP Labs contributors using the site: Maurelian mentioned on Farcaster that the Optimism Resource Center “is blowing up in the OP Labs slack”, Michael Silberling praised it as "insanely cool", and Harper shared that "we are all stoked".\n',
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Optinames has leveraged CCIP Read (ERC-3668) to successfully expand ENS on L2 (Optimism), resulting in a significantly more cost-effective method for acquiring ENS domains compared to Eth mainnet.\n\nSince August 10, 2022, OP-Mainnet users have been able to acquire ENS names without any associated costs, marking a significant departure from mainnet fees. Our strategy ensures a fee-free experience (zero registration fees and no renewals) while keeping initial registration gas costs to a minimum in contrast to Ethereum. Furthermore, these subnames are seamlessly integrated with the ENS infrastructure and are fully compatible with a wide array of popular wallets, including Metamask, Coinbase Wallet, Trust Wallet, Uniswap Wallet, Rainbow Wallet, as well as libraries such as Web3.js and ethers.js",
    displayName: "OptiNames | ENS on Optimism 🔴",
    impactDescription:
      "1. A substantial 7,615 Optimism users have successfully acquired ENS names via Optinames.\n\n2. Optinames has played a pivotal role in facilitating the registration of a remarkable 25,357 ENS names on OP Mainnet.\n\nThese statistics highlight the tangible impact of Optinames in making ENS names accessible and widely adopted on the Optimism network, enhancing the user experience and contributing to the growth of the ecosystem.\n",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Fe is a high-level language for the EVM. It is heavily inspired by Rust and implemented in it too. You can use Fe to write smart contracts for Ethereum or any EVM-equivalent platform. Developers who have come to appreciate Rust will enjoy many of the features currently supported by Fe.",
    displayName: "Fe",
    impactDescription:
      "Since the Fe compiler targets EVM, developers can write Fe code for Ethereum or any EVM-equivalent platform. Fe support's a number features that developers have come to love. That list includes things like, enums and pattern matching, libraries and modules, a standard library, traits, built-in testing, and more. By improving languages we are able to improve the ecosystem as a whole.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Secureum Bootcamp Epoch Infinity (Jan'22 onwards) has a 3-phase — LEARN-RACE-CARE — process. Participants LEARN for free from prior Secureum content and external resources. RACEs are open-and-free smart contract security quizzes, created by Secureum Mentors who are leading external security researchers, meant to educate & evaluate aspiring smart contract security auditors & developers as they LEARN basics of Ethereum, Solidity, smart contract security vulnerabilities & exploits. CAREs are smart contract security workshops with collaborating partners. This RetroPGF application is for Secureum Bootcamp Epoch Infinity RACE contributions towards increasing the quality and quantity of Ethereum/Optimism security talent.",
    displayName: "Secureum",
    impactDescription:
      "Thousands of aspiring auditors have participated in free RACEs held every month since Jan'22 (avg ~200/RACE in 2023). Top-32 leaderboards were published & NFTs awarded for reputation. This continues to build Ethereum security community & talent in a permissionless & inclusive manner.\n\nRACEs designed by external researchers (2023: Joran+Goncalo @ ConsenSys Diligence, Nurit @ Certora,  Jon @ Veridise, Hickupp, Josselin @ ToB, Pashov, Hari @ Spearbit, Noah @ Spearbit and Tincho @ Red Guild) bring different perspectives & help enhance the social layer of Ethereum security by encouraging interactions.\n\nRACEs help participants get better at security, assess themselves and achieve greater success at audits, become security-minded developers or get hired by leading Ethereum security projects.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Self-custodian is important for existing blockchain users, Keyring provides a secure and cost-effective hardware wallet for Optimism ecosystem.\nPeople are already familiar with the traditional debit/credit card, Keyring uses the similar solution for hardware wallet, which improves the user experience when onboarding traditional users to blockchain.\nKeyring brings this financial card experience to Optimism, features include transfer and receive ETH and ERC20, interact with dApps. Demo video: https://youtu.be/MpCItSCYDTY",
    displayName: "Keyring",
    impactDescription:
      "1. Traditional users who are not familiar with crypto hardware wallets choose Keyring for holding their assets on Ethereum and Optimism, because of our security, similar debit card experience, and lower costs.\n2. Crypto users in Optimism Collective get an alternative solution to self-custodian their on-chain assets and interact with dApps. \n3. Application developers review our code and learn about how to use smart card to integrate with blockchains.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      'We launched the 1st Augmented Bonding Curve (ABC) for the Token Engineering Commons (TEC) in 2021, and $TEC has maintained parity with ETH in a bear market (only down 12% vs ETH) while the ABC collected $300k via swapping fees for TE Public Goods. This economic model is a significant milestone towards "Impact = Profit".\n\nIn 2023 we deployed Aragon OS & our CommonsDAO tools to Optimism, enabling truly decentralized DAOs on Optimism. Tao Voting features Delegation and "Wait for Quiet" to prevent last-minute vote manipulation. ABCswap.xyz enables communities to launch and interact with their own ABC, providing a no-code solution to launch economic systems like friend.tech.\n\nOur Conviction Voting model has been adopted by notable projects like Gitcoin, Giveth, TEC, 1Hive, BrightID, and more.',
    displayName: "Commons Stack",
    impactDescription:
      "For direct impact, we are actively building on Optimism. We have ported to Optimism the Aragon OS client which is the safest DAO tooling that exists. Thousands of DAOs have used this tooling to manage billions of USD in crypto and well known DAOs are already using it to migrate to Optimism.\n\nWe also deployed all the infrastructure needed by communities to launch the same economic model the TEC has (the ABC), without the need for a developer. Optimism is now the only network where this no-code solution can be used. \n\nMore indirectly, our open source research on Augmented Bonding Curves and Conviction Voting has been a public good for the Ethereum and web3 community. The ABC was charging mint and burn fees years before friend.tech launched with a similar mechanism. ",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Awesome Optimism Repository is one of the “Ecosystem Project Ideas” in the Optimism Collective Ecosystem Contributions” repository. We took the lead in creating and contributing to the repository, where we added, updated, and organized content to create a curated and comprehensive list of resources related to Optimism Ecosystem. \n\nThe repository includes a wide range of resources that will be helpful for developers and enthusiasts. You can find everything from analytics, research articles, tutorial videos, development tools and open-source projects in the Optimism ecosystem. ",
    displayName: "Awesome Optimism",
    impactDescription:
      "Awesome Optimism comprises over 150 awesome resources covering diverse categories within the Optimism Ecosystem. It serves as a hub for developers and enthusiasts looking for relevant information and tools. The repository is also featured on multiple Optimism community resources, including Web3explorer. \n\nAwesome Optimism offers visibility and recognition for projects or community resources contributing to the Optimism ecosystem. Community contributions are also actively encouraged to foster a vibrant and collaborative environment around Optimism. ",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "Golden Boys ($GOLD) isn't just another DeFi project; it's a sanctuary for seasoned DeFi enthusiasts, developers, and marketers. Led by the renowned whale, Humpy, and featuring web3 experts from Consensys, Balancer, Badger, and Aura, we're not just here for the short game. We've weathered DeFi's ups and downs and are committed to building something enduring.\n\nOur mission transcends just building products; we aim to cultivate a vibrant, supportive community on Base. \n\nWhy are we so dedicated, even working below our usual rates? Because we've found a home—a place free from the \"wen moon\" mentality, where newcomers eager to learn can truly flourish. We're not just managing the waves of BS; we're setting a new standard for what a DeFi community can be.",
    displayName: "Golden Boys (GOLD)",
    impactDescription:
      "1. Developer Ecosystem growth\nThe Golden Boys project has brought 6 Web3 developers (representing the full stack) into the Optimism ecosystem. Our development team have contributed to Balancer, Badger, and other leading DeFi protocols. The launch of Golden Boys on Base has crystallized our activity on the OP stack and created a committed team of developers who are new to the Optimism Collective. We are excited to help build the DeFi ecosystem on Base.\n\nEnd User Experience & Adoption\nGolden Boys has brought hundreds of new users to Base. Many of these members bridged to Base the first time to participate. Our project has developed the deepest WETH/USDC liquidity on Base, a necessary asset to future growth on Base. \n\nA major DeFi player, Humpy, has also come to Base as our founder.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "The creation of Gitcoin Passport itself is a key contribution to Optimism and the broader Ethereum ecosystem, offering identity management tools that enhance security and trust. \n\nIt's an easy-to-use tool for Optimism developers seeking to protect their projects from bots and Sybils. \n\nFurthermore, we launched Onchain Stamps on the OP Mainnet, using Ethereum Attestation Service for Sybil-resistant identity. This has significantly bolstered trust in Optimism, driving the majority of attestations in OP's Attestation Station and data availability for everyone in the OP ecosystem.\n\nWe've also fortified OP token programs with partners like ShapeShift, Tide, and Bankless Academy, using anti-Sybil tech to disqualify rogue addresses, preserving ecosystem integrity.",
    displayName: "Gitcoin Passport",
    impactDescription:
      "Our team at Gitcoin Passport has bolstered Optimism's security and trust. We deployed Onchain Stamps for Sybil-resistant identity, leading to ~ 13,000 Passports pushed onchain to OP. We've also been instrumental in OP incentive programs like ShapeShift’s, disqualifying over 5,700 Sybil-linked addresses and saving 45,000+ OP tokens. Our efforts extend to campaigns with Tide and Bankless Academy, creating a safer, more robust Optimism. The impact benefits developers, users, and companies involved in token incentives.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "Optimism remains the top priority in dForce’s multichain expansion strategy. We have deployed a complete set of DeFi protocols on Optimism, including stablecoin, lending, trading, and bridge since 2021.\n\nToday, USX records a total supply of 11m with $146m cumulative trading volume as of September 2023.\n\ndForce Lending is now the 4th largest lending protocol and the 3rd largest holder of wstETH on Optimism.",
    displayName: "dForce",
    impactDescription:
      "dForce aims to become a leading platform for LSD lending on Optimism. In Feb 2023, we collaborated with Lido to reward wstETH lending activities and became the 4th largest holder of wstETH on Optimism. Recently, dForce DAO has approved for Rocket Pool’s rETH to be used as collateral on Optimism with the hope to offer users the choice between different LSD assets to facilitate their investment strategies.\n\nWe also received two grants from Optimism in Phase 1 and Cycle 11. The grants were utilized to incentivize lending and trading via various liquidity mining campaigns and to offer bribes for USX/USDC on Velodrome.",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "Invest in Music championed the development of Optimism since its launch on Sound.xyz, in June.\n \nWe onboarded our audience to the Optimism Collective through our newsletter, podcast, and posts on X. \n\nOur blog posts and podcasts were collected on Optimism via Mirror and Spinamp. \n\nWe’re the only media outlet in onchain music that created Optimism content consistently. \n\nWe helped artists navigate the L2 space, guiding them through the grant and retro applications.\n\nInvest in Music is one of the top drivers of mints to music on Optimism - we referred more than 200 mints across 76 unique songs.\n\nWe’re the 4th largest curator on Sound.xyz\n\nWe launched an Optimism Onchain Curator program - giving our community 1000 OP per month for driving mints, volume, artists, and content on Optimism. ",
    displayName: "Invest in Music",
    impactDescription:
      "We amplified the most important artists and albums on Optimism via our newsletter, Mirror & X posts.\n\nWe drove mints, volume, and users.\n\nWe educated the community about the Optimism Collective and helped position it as a forefront player in music.\n\nWe encouraged artists to mint their music and receive retroactive funding for their contributions to Optimism.  \n\nThrough our Mirror, we drove hundreds of mints to Optimism. We have 12K subscribers and 2.3K Invest in Music pass holders. \n\nOptimism Onchain Curator Program\n\nWe drove 370 mints, 0.67 ETH volume, and onboarded five artists, creating great content every step of the way.\n\nPartnerships\n\nWe work closely with projects such as Mirror, First Mate, Spinamp, and Collect Pods, who prioritized their Optimism integration at our request.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "1. Launched a landmark OP Stack Rollup for Ethereum creators\n2. Supported tools like Opensea, Rainbow, and Mint Fun on Zora Network.\n3. Built native support for OP Mainnet, Base, PGN, and integrated with Nouns Builder platform.\n4. Onboarded developers and new apps like Titles to the OP Stack.\n5. Introduced new users to Ethereum and artists from non-EVM ecosystems like Tezos.\n6. Collaborated on commemorative mints like Optimistic Zorb (58k mints) and Base Day One (154k mints).\n7. Championed Conduit, facilitating others to launch on OP.\n8. Organized an OP Stack MEV competition, offering ETH prizes.\n9. Exclusively supported the OP Stack, not other L2s.",
    displayName: "ZORA",
    impactDescription:
      "Given the strength of Zora's brand and community, a lot of the value we provide is qualitative. That said, we have some notable metrics below:\n\n1. Zora Network has grown to 2.5M transactions per month\n2. Over 385,000 addresses bridged\n3. Averaging 8% of Share of Total L2 Fee Revenue Across OP Stack Chains\n4. Hosted the ETHGlobal Superhack \n\n+++",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "The Remix Chinese community can localize Remix IDE into Chinese, providing a user-friendly interface and experience for Chinese users. This enables easier usage of Remix IDE for OP network development and debugging.\nThe community can provide Chinese documentation, tutorial videos, and articles on Remix IDE, helping Chinese users understand OP network development tools, smart contract writing, and deployment methods. This lowers the entry barrier and promotes wider adoption and participation.\nCustomized IDE services can be offered to Chinese teams, helping them tailor and optimize Remix IDE for specific application scenarios and business needs on the OP network.",
    displayName: "Remix CC",
    impactDescription:
      "The contributions of the Remix Chinese community can help lower the entry barrier for Chinese users to participate in OP network development, enabling OP developers to engage more effectively in the construction of the OP network, and promoting the flourishing development of the OP network.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Over the last three years Republik Rupiah has been one of the primary voices in Indonesia, educating people on blockchain technology, with a strong focus on the Ethereum Ecosystem. Not only were we one of the first voices to educate in this space in the country, but we also taught what layer two's were before any were created.\n\nWe have done this by walking new people through the ecosystem and also existing communities through an educational journey. We were one of the first voices to cover Optimism and the OP tech stack. We encouraged people to participate in the ecosystem from a very early stage and made detailed educational content on how to interact with the platform, including adding the chain to existing wallets and bridging assets, as well as using the dApps that had migrated.",
    displayName: "Republik Rupiah",
    impactDescription:
      "Over the last few years we have systematically built and educated a loyal following and community in Indonesia. This community is aware and loyal to the Ethereum values and have detailed knowledge of the importance and role that the OP Stack brings to this vision.\n\nWe have had at a minimum over 130k individual video views on Optimism content and millions more around the Ethereum ecosystem and over 1.5 million online impressions of Optimism and the OP logo. Our community was waiting for optimism and have participated in its rise.\n\nOur education has directly resulted in Indonesians and speakers of the Indonesian language become activity involved in the collective, transferred value on chain, participated in governance decisions, held the OP token and participated in airdrop activities.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "indexed.xyz is an open, decoded, and CC0-licensed dataset that allows anyone to freely download, copy, and analyze chain data (including OP-stack chains like Zora and Base) without any restriction. By adopting a local-first approach, we enable builders to leverage their local storage and compute, making it easier and more affordable to work with crypto data, all while providing more flexibility and control.\n\nWithout indexed.xyz, builders otherwise have to use cloud platforms that drive lock-in, offer limited flexibility, and charge expensive query compute and/or storage fees. These platforms don't support many newer OP-stack chains, requiring builders to run a node to access the data they need to power analytics on their app or at the (multi-)chain level.\n\n",
    displayName: "indexed.xyz",
    impactDescription:
      "The main benefit of indexed.xyz is that it increases data accessibility for OP chains, taking on all of the cost and complexity of indexing, decoding, and hosting multiple blockchains' worth of data.\n\nindexed.xyz's local-first model enables developers to use their existing storage and compute (eg. laptops) and work offline. This makes possible large-scale analytics that would otherwise be prohibitively expensive, which is especially important in enhancing accessibility for resource-limited teams (eg. other public goods, those in developing regions).\n\nAccessible and cost-effective Superchain data via indexed.xyz makes OP-stack chains more attractive to builders and enables better decision-making across the ecosystem, contributing to the growth & success of the Optimism Collective.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "IDriss is a community focused on building tools and consumer apps around strong crypto use cases like SocialFi. One of the products is an open-source browser extension enabling crypto transfers directly from Twitter. Since its launch in early 2022, the extension has grown to 80k weekly users and has been stress-tested with over 500k transactions.\n\nDuring the last Gitcoin GG18 round, IDriss has successfully onboarded grantees to receive donations on OP via the Twitter extension. A total of 377 unique donors made impressive 1,186 donations to 155 grantees.\n\nFollowing the successful Gitcoin pilot, IDriss expanded the initiative by consolidating all the major PGF mechanisms (Gitcoin, Giveth, RetroPGF, CLR.fund, DAO Drops) and enabling perpetual donations to 700+ grantees on OP.",
    displayName: "IDriss",
    impactDescription:
      "Quoting Optimism’s documentation, “Funding public goods drives growth — and therefore network revenues — from the ground up”. \n\nOur project improves discoverability and stimulates donations to public goods on OP by putting them in front of 80k users of the IDriss extension. Moreover, issuance of attestations helps bootstrap the growth of the Attestation Station.\n\nMetrics on OP during Gitcoin GG18:\n\n-  1186 total donations\n-  377 unique donors\n-  155 unique grantees received donations\n\nReactions from grantees and donors were overwhelmingly positive, as evidenced by the collection of reactions on Twitter within the first 24 hours post launch.\n\nTaking the next step and launching the meta-infinite PGF round opened doors for a larger and more diverse group of 700+ grantees to receive donations.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "The Ethereum Name Service (ENS) is a well established solution that allows for users to use human readable names, greatly enhancing the user experience, however it’s primarily based on L1 Ethereum and has limited support for L2s. We have developed a plug-and-play system (currently open source code and a demo app) where anyone with an ENS name can offer subnames, such as tom.avid.eth, on any OP Stack L2. Or work represents the first and only no-code plug-and-play system to allow anyone to configure their ENS name to offer subnames on OP Stack chains. We have also contributed to the overall research and development of ENS, and in particular ENS on OP Stack L2s by demonstrating the ability to register not only subnames but second level .eth names as well, such as vitalik.eth.",
    displayName: "Unruggable Names",
    impactDescription:
      "We have worked to support ENS on OP Stack L2s by enabling anyone with an ENS name to offer subnames on L2s, e.g. tom.avid.eth. We have created and shared publicly our working open source code, including smart contracts and a front end demo showing a custom ENS subname registration system on OP Stack. We have also worked to develop the long term roadmap of ENS on L2s including registrations of .eth second level names, such as vitalik.eth. We have consistently advocated and shared our demos and open source code in the ENS community, including attending the weekly ENS DAO ecosystem call and attended Ethereum conferences this year including Eth Denver, Eth Waterloo, Eth CC, where we have engaged in onboarding developers to ENS and to using ENS on OP Stack L2s using our open source codebase. ",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "We've launched Opti.domains, a singularity-interoperable domain linking every identity and wallet. We're collaborating with Bored Town for .town domain adoption.\n\nOpti.domains represents a breakthrough in ENS technology, being the first to integrate domain names with Ethereum Attestation Service (EAS) systems.\n\nAll of our domain name holders are HIGH-QUALITY users since they are required to link their Twitter and Discord to mint the domain name. These connections are attested publicly on EAS.\n\nULTIMATELY, WE'RE THE FIRST TO OFFER PUBLIC ACCESS TO THE WEB3 WALLET <-> WEB2 SOCIAL PROFILE CONNECTION DATA, OPEN FOR PERMISSIONLESS QUERYING!\n\nLastly, we have contributed to the adoption of ENS on the Layer 2 standard by forking and making contributions to core libraries.",
    displayName: "Opti.domains | Connecting Web2&3 with ENS + Attestation",
    impactDescription:
      "Since we require all our minters to link their Twitter and Discord accounts, WE ARE THE FIRST TO PROVIDE PUBLIC ACCESS TO THE WEB3 WALLET <-> WEB2 SOCIAL PROFILE CONNECTION DATA, AVAILABLE FOR PERMISSIONLESS QUERYING!\n\nAs of October 23rd, there are 11,861 attestations from 732 unique attestors, and 512 users have minted .town domain names.\n\nOpti.domains has made the connection data between the following entities available to the public:\n1. ETH Wallet Address\n2. Twitter\n3. Discord\n4. Google\n5. Microsoft\n6. GitHub\n7. LinkedIn\n8. Line\n9. Aptos Wallet\n10. Sui Wallet\n11. Freedom Wallet\n\nThis data is valuable and has various use cases, such as identifying a wallet address for a campaign on Twitter, providing Sybil protection, and verifying identities for the Optimism Citizen House.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "- Development and maintenance of the IPFS protocols and specifications.\n- Operation of two major IPFS gateways.\n- Production of one major IPFS implementation (kubo).\n- Advocacy, governance work, and clear specifications with an open and legitimate process to support the wider community.\n- Documentation and code examples to help people use IPFS.\n- Bringing IPFS to browsers, browser engines, and in cURL so as to support better dApps and bridge web2 over.",
    displayName: "IPFS",
    impactDescription:
      "IPFS is a system for moving data across decentralized networks, with >11M weekly users and 250K public p2p nodes. Highlights:\n\n1. Off-chain storage. IPFS provides verifiable, off-chain storage, often used to reduce on-chain needs in Ethereum & Optimism. Examples: TrueBlocks (local IPFS-based index for EVM chains, built with grants from OP & EF), Snapshot (IPFS-based off-chain voting).\n\n2. Go-to distribution network for fully decentralized third-party app frontends (for gaming, DeFi, & more). We run gateway services that serve 900M requests/wk, and added native IPFS support to browsers like Chromium & Brave.\n\n3. NFT metadata gold standard. Over 115M NFTs are stored on IPFS, including leading platforms OpenSea (which supports Optimism NFTs), Rarible, and Zora.\n",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Ethers.js is currently the most popular JavaScript library for Ethereum (and ilk) with over 1 million weekly npm installs (over 110 million, all time)  and is in the top 500 NPM packages by dependents.\n\nEthers has worked closely with the OP team to collaborate on the custom OP extension package as well as integrate new plug-ins for tuning network performance (such as custom priority fees), which are all built-in and automatically used for OP-detected networks.\n\nEthers is also used by many of the other tools and projects which help enable Optimism, such as MetaMask, Uniswap and Hardhat.",
    displayName: "ethers.js",
    impactDescription:
      'The impact provided by Ethers has been a simple and popular developer library.\n\nMany aspects of Ethers favour simplicity and safety-by-default, such as "garbage-in, fail loud" (opposed to "garbage-in, garbage-out", which often results in unsafe or error prone behaviour) which has helped protect developers and end-users from innocent mistakes, which could be costly or dangerous in the the blockchain world. Making it difficult to build a foot-gun is a feature.\n\nBy being so widely used, it has also led to the development of many other projects on top of it, further expanding the ecosystem.',
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "At Revert, we are bullish on the future of AMMs, envisioning them as fundamental pillars in all facets of financial markets, unveiling new investment avenues for retail investors. This underscores the necessity for open, transparent, and accessible tools to adeptly navigate and manage these investments. \n\nIn line with this vision, our v3utils tool streamlined liquidity operations on Uniswap v3 within Optimism, easing range adjustments and liquidity additions. Our open-source backtester further alleviated liquidity management challenges. Additionally, our auto-compounder and its incentives onboarded liquidity to Optimism, thereby positively impacting the DeFi space on Optimism, and specifically helping users migrate liquidity from Mainnet to Optimism via targeted ads and tutorials. ",
    displayName: "Revert",
    impactDescription:
      '- Number of tx and users: "Revert was surprisingly efficient in increasing both the number of transactions and the number of users. The program’s retention rate of users and consistent gas fees were even more impressive. In the 30 days following the program’s conclusion, the protocol averaged 4 more user addresses daily than during the program" --Ryan, Messari\n- TVL on Auto-Compounder: "TVL rose significantly once OP incentives began, peaking above $4 million in December, and sustained similar levels throughout the incentivized period. The highest TVL recorded was just over $6 million on Dec. 14, 2022."\n- Capital Auto-compounded on Optimism and Base: 3.6M\n- V3Utils volume: 550k USD volume Optimism & Base\n- OP Grant: 240k OP grant received, 100% was distributed, 235k already claimed\n',
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Working with the Optimism Collective on the Superchain vision and building the market from 0 -> 1.\n\nContributions include but not limited to:\n- Educating developers and the broader ecosystem about rollup technology\n- Educating superchain customers about the product offering, tradeoffs, and how to build a successful chain\n- Gathering customer feedback and identifying high leverage areas for product improvement for the superchain product\n- Helping to build developer ecosystem around the OP Stack with Conduit's integrations (blockscout, superbridge, tenderly, dune, etc.)\n- Working with the core devs to improve the underlying infrastructure\n- Generally, bringing more chains onto the Superchain",
    displayName: "Conduit",
    impactDescription:
      "Helping the OP Stack, and Superchain product, become the de-facto standard for layer 2 development through:\n- Improving the core software and identifying areas of high leverage product improvements\n- Building out the developer ecosystem for production-ready integrations (blockscout, superbridge, tenderly, dune, etc.)\n- Personally onboarding chains onto the Superchain, helping customer navigate the technical and business maze of launching a new rollup\n- Educating and marketing information related to rollups, the superchain, and more to drive demand for the product",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "The Optimism Superchain Roundup is a weekly newsletter focused on bringing readers the latest updates and developments happening within the Optimism ecosystem.\n\nEach issue covers multiple topics from that past week across the technical, economic and community aspects of Optimism. Past topics covered include governance updates, protocol launches/upgrades, grants/funding announcements, adoption metrics, collaboration news and more. For example, we have extensively covered the recent competition for adoption between different Layer 2 stacks. ",
    displayName: "The Optimism Superchain Roundup",
    impactDescription:
      '"The OP Superchain Roundup" newsletter has impacted the Optimism Collective in the following ways:\n\nNews Updates: The newsletter delivers regular updates on significant events, launches, partnerships, and advancements within the Optimism Ecosystem. These updates are presented in a concise and easily understandable format, ensuring that subscribers stay well-informed and engaged with the latest developments.\n\nEcosystem Insights: In addition to news updates, the newsletter provides valuable insights, analysis, and commentary on key topics within the Optimism Ecosystem. It covers important discussions such as the competition between Layer 2 stacks, Optimism Governance Seasons, and the app-chain debate. These insights spark meaningful discussions among community members.',
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "SafariDAO is an active and inclusive community in East Africa, bringing together developers, founders, enthusiasts, and newcomers interested in web3 and blockchain technologies.  Our mission is to foster learning and collaboration and provide opportunities to African builders. \nWe hosted the largest Ethereum-based hackathon conference in East Africa, a notable event in both 2022 and 2023. These conferences provide a platform for developers based in Africa to showcase their skills and develop solutions for the collective with a focus on problems based in Africa. Binance Smart Chain is the most widely used blockchain in Africa, and through these events, the community is introduced to alternatives that highlight the advantages of OP L2 as a fast, cost-effective option. ",
    displayName: "ETHSafari 2023",
    impactDescription:
      "24 projects deployed on base, 3 bounty winners, 2 projects went on to pitch with Jesse Pollak. The impact is both tangible and intangible, with profound effects on community morale:\nThe tangible contributions are exemplified by the teams that have participated in our hackathon. We've not only provided practical support to participating teams but also offered inspiration to our community. Our members, including core contributors, often face economic barriers to financial inclusion. Since our last ETHSafari in 2022, our community has substantially grown. Through our events, we've ignited optimism, reinforcing the belief that there are numerous opportunities in the blockchain and Ethereum ecosystem that include the African perspective. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      'We had 18 live meetings between July and September, where we trained Nerds and active participants in the community on conflict management techniques. The calls were specially prepared by our team to deliver meaningful educational experiences with experts in diverse fields. \n\nWe tracked the assistance with POAPs, and certified as "Gravitons" those who claimed 5+ of the unique weekly badges.',
    displayName: "Gravity DAO",
    impactDescription:
      "We trained and supported the development of soft skills in active participants of the community. We are directly improving governance accessibility by supporting the design of alternatives to deal with conflicting cases and code of Conduct enforcement processes.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We are seeking funding to support three groundbreaking components that have revolutionized the decentralized space:\n\nOrganizations Contracts: Realize decentralized organizations with ultimate power in the hands of token holders, thanks to Optimism's cost-efficient governance infrastructure.\n\nColonies Contracts: Bridge Ethereum and Optimism for seamless multi-chain operations, enabling funds to flow effortlessly between platforms.\n\nCovenants Farming Contracts: Optimize Uniswap v2 and v3 farming on Optimism, incentivizing liquidity providers and utilizing v3's unique features.\n\nOur crowning achievement is our commitment to accessibility. Any individual can deploy these contracts using our factory system, armed with nothing more than a browser and devoid of intricate coding tools.",
    displayName: "EthereansOS",
    impactDescription:
      "Organizations Contracts: We've launched decentralized DAOs on Optimism, empowering token holders and enhancing decentralized autonomy. Using Optimism's L2 scaling, we've led cost-effective governance innovations, enriching the Collective and reinforcing Ethereum's core values.\n\nColonies Contracts: Our efforts in linking Ethereum and Optimism through cross chain business models.\n\nCovenants Farming Contracts: Our farming contracts for Uniswap v2 and v3 on Optimism allow for rapid bootstrapping of liquidity in the Collective. \n\nOur primary achievement is democratizing access. We've enabled the Collective to easily deploy contracts, merging advanced solutions with user accessibility. The Optimism Collective is now a symbol of innovation and inclusivity.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "- **Quest Protocol & Quest Terminal** - the RabbitHole team has integrated the ~20 largest Optimism projects into Quest Protocol so anyone with OP can deploy quests permissionlessly for the top Optimism projects\n\n- **Proven growth of Optimism** - the Quest Protocol contract is one of the most used contracts on Optimism, ranking top #3 in the past 30 days and top 10 in the past 90 days, driving over 2m transactions (including third-party transactions driven by the protocol). \n\n- **Optimism Gateway** - RabbitHole has launched Optimism Gateway, an open source quest platform for any Optimism community member to launch an onchain quest for any popular Optimism project by depositing OP rewards in minutes. **Note: Any retroactive funding will be re-distributed through the Optimism Gateway.**",
    displayName: "RabbitHole",
    impactDescription:
      "RabbitHole (Quest Protocol) is currently the #3 most transacted  (see Official Optimism Dashboard). We launched the protocol in February of this year and since have supported the growth of 21 Optimism projects and driven 1m+ quest completions on the Optimism network - all provable onchain. Quests have driven 44,000+ new Optimism users, 69,000+ new addresses delegating OP in governance, and $340K+  in network fees.\n",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Since adding support for Optimism on the free and public Arkham Platform, we’ve cataloged over 50K active entities from the Optimism ecosystem, thereby greatly enhancing its transparency. We've labeled over 40M addresses, attaching over 50M tags. We’ve brought institutional-grade tooling to the entire Optimism community, allowing its members to understand and navigate the ecosystem with confidence and helping to keep it free of malicious actors. \n\nOur users analyze the Optimism data on our platform extensively, with many onboarded Optimism users utilizing our platform daily.\n\nOur Twitter engagement for Optimism-related posts and research reflects the active mutual support and overlap between our two communities.",
    displayName: "Arkham",
    impactDescription:
      "Arkham's integration with Optimism positively impacts both end users and developers in meaningful ways. Users gain real-time transaction tracking, portfolio management, and network visualization on Optimism's L2 Rollup. Developers benefit from an enriched ecosystem with detailed on-chain data. This work bridges the gap between the address-centric world of crypto and the rest of the entity-centric world, including TradFi and Web2. This collaboration fosters broader adoption and a vibrant developer community, aligning with Optimism's vision for a decentralized, accessible, and healthy blockchain ecosystem​.\n\nArkham also integrated Base (built on the OP Stack) with 130K active entities, 50M labeled addresses, and 70M tags.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "ShapeShift DAO contributed to Optimism in two primary ways:\n\n1. Integration of OP Mainnet across ShapeShift's open-source stack in February 2023. \n\n2. Implementation of an OP Growth Grant (Cycle 11) for a novel incentive program executed in partnership with Gitcoin Passport and Thrivecoin. A no-sale rule was implemented by the Growth Council starting in Cycle 10, and ShapeShift DAO therefore shouldered all building costs associated with this program to support the End User Experience & Adoption of Optimism.\n",
    displayName: "ShapeShift DAO",
    impactDescription:
      "The no-sale Growth Grant onboarded over 27,000 unique users to OP Mainnet with 23,542 bridging txns, 22,311 swap txns, and over 1,648 fiat onramp txns. (Data source: Thrivecoin)\n\nOP-themed NFT campaign with over 2,000 unique mints. (Data source: OpenSea, Mercle)\n\nIncentive program and sybil-resistance knowledge sharing via OP forum; over 5,700 sybils removed and 45k OP saved. (Data source: Gitcoin Passport)\n\nOur interface has facilitated over $2.3m in bridging volume, $1.5m in trading volume, and continues to provide aggregated fiat on-ramp support to OP Mainnet for users in different jurisdictions worldwide. (Data sources: 0x, Lifi, Onramper/Banxa/MtPelerin)",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Doris Procotol is a personal data space built on OP Stack, which can help users store personal documents, videos, music and other content safely, quickly and conveniently.In the next step, Doris Protocol will open the data market, where users can share their unique content, and plans to use ERC-721 to define user data.",
    displayName: "Doris Protocol",
    impactDescription:
      "Doris Procotol is a personal data space built on OP Stack, which can help users store personal documents, videos, music and other content safely, quickly and conveniently.Doris Protocol is based on the Ethereum account system and can bring a large number of new users to Optimism. Using Optimism will make it more popular.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "We provide implementations of cryptographic primitives that help Ethereum and the broader blockchain ecosystem.\n\nPast contributions consisted of proto-danksharding, trusted setup ceremony and verkle trie.\n\nhttps://github.com/crate-crypto/go-ipa\nhttps://github.com/crate-crypto/go-kzg-4844\nhttps://github.com/crate-crypto/ceremony-specs\nhttps://github.com/ethereum/kzg-ceremony-sequencer",
    displayName: "crate crypto",
    impactDescription:
      "https://github.com/crate-crypto/go-kzg-4844 (4844) and https://github.com/crate-crypto/go-ipa (verkle tries) are both projects which will impact the OP stack.\n\nThe OP stack also has shown interest in using zero knowledge proofs -- the cryptographic implementations being implemented in crate-crypto are focussed around this domain.",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "Several articles aimed at Russian speakers.\nI have published several articles that talk about blockchain, the Optimims project, its features, and how it helps solve Ethereum’s problems, such as high transaction costs and slow transactions..\nThe articles are full of information",
    displayName: "Blockchain_Space",
    impactDescription:
      "Since the English language is a barrier for many people to understand blockchain or understand the Optimism project, I created a series of articles in Russian to make it easier for Russian speakers to learn about blockchain and the Optimism project.\nMy articles contribute to attracting new users.",
    pwCategory: "International & Multilingual Support",
  },
  {
    contributionDescription:
      "\nSince testnet program ended with over 3000 testers across 5 blockchains to launching on mainnet in August, 2023, we have improved the platform by adding OP tokens rewards for contributors who funds projects. \n\nThis feature wasn't present on testnet but with the help of the grant from RGPF 2, we were able to integrate this feature.\n\nThis means any contributor will not only get to fund projects but also earn OP tokens daily along with BuidlPoints. ",
    displayName: "GiveStation (youbuidl)",
    impactDescription:
      "Rpgf 2 strongly motivated our team as it is one of our dapp formerly known as app.givestation.org will now be moved to YouBuidl.dev while other products also are there too.\n\nYouBuidl makes it easy for both developers, creators, contributors and even investors to participate in the growing world of decentralized finance and web3 applications. So whether you’re an innovator looking for funding or an investor seeking opportunities, YouBuidl is the perfect platform for you.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "The Optimism Translators translate the Optimism Help Docs into 20 languages, as well as translating Optimism blogs, tweets and posts into local languages. Translated articles live in the Optimism Discord, allowing easy access to the local communities. ",
    displayName: "Optimism Translators",
    impactDescription:
      "Translated content allows the Optimism collective to diversify its members and be more accessible to the global markets and communities. This diversity strengthens the Collective's ability to decentralise, as well as expand available user groups. Localisation also makes Optimism more inclusive and welcoming to the world <3",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Parsec Finance is an on-chain analytics platform. We index Optimism (and now Base) data for users of our platform to explore and navigate the on-chain environment. \n\nOur integration has not solely involved a chain-level integration and support for arbitrary contract analysis but we went one step further: integrating and building custom functionality for native DeFi Apps on Optimism like Velodrome Finance. \n\nNot only has our integration assisted on chain users in navigating Optimism, our data and dashboards have helped DAOs like Lido to monitor and gauge L2 adoption through flows analysis (linked below in Contribution links).",
    displayName: "Parsec Finance",
    impactDescription:
      "By offering Optimism data in our platform not only have we exposed our existing userbase to Optimism and widened the funnel for adoption, we have also provided tools for Optimism users to better understand and navigate the on-chain environment. \n\nWithout contextualised and visualised chain data, it can be hard to monitor the success of a given application or chain. Protocols and users alike have used Parsec to construct graphs/tables to monitor adoption/usage metrics and to derive key insights such as the most traded pair on Velodrome Finance.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "Our primary contributions lie in the development of Optimism/Base packages and comprehensive documentation that enable general users to run an Optimism node on affordable and low-powered ARM64 boards, including Op-Geth, Op-node clients and Base configurations.\n\nThis work lower the barriers to entry by automating complex processes, ultimately encouraging more users to participate in the network. This contributes directly to network decentralization.\n\nAdditionally, our work empowers developers by providing them with the tools necessary to run a development or testing node. This includes running a L1 node on a similar device so L2 nodes can connect to it.\n\nLastly, we focused on enabling support for the Superchain (via Optimism+Base) to contribute to the multi-chain idea of scaling Ethereum.",
    displayName: "Ethereum on ARM",
    impactDescription:
      "Our impact is best illustrated through community engagement and the growth in the number of independently operated nodes contributing to network's decentralization:\n\nCommunity Engagement: Our announcements on social platforms, especially Twitter, have garnered substantial attention, with numerous retweets, likes, and comments, indicating a strong community interest.\n\nDecentralization Contribution: Although challenging to quantify precisely, the requests for help in our Discord channel (for both Optimism and recently Base) indicates a direct contribution to the network's decentralization. Every new node introduced to the network enhances Ethereum's resilience.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "The goal of the project is to simplify the user onboarding flow by combining the web standard - WebAuthn (FaceID/Fingerprint Authentication) with Account Abstraction (ERC-4337).\n\nInstalling a chrome extension, or a mobile app to use a wallet is a big blocker for user onboarding. Instead, we should use modern standards like WebAuthn, Account Abstraction and create a SDK, which can be integrated into any website in a few lines of code.\n\nWebAuthn is already available in all major browsers, including mobile browsers, like Safari on iOS and Chrome on Android. There is no approval necessary from authorities (Apple, Google, etc.) to use this new approach.\n\nUsers don't need to know anything about blockchain to do the onboarding using this approach.",
    displayName: "Smart Onboarding SDK",
    impactDescription:
      "I don't have any past contributions on the Optimism Collective.\nHowever, this new approach of onboarding users will help engineers to onboard millions of users without any friction. We are preparing an SDK + Contracts, which can be integrated easily into any website and onboard users instantly.",
    pwCategory: "User Experience & Adoption",
  },
  {
    contributionDescription:
      "Slither is a Solidity and Vyper static analysis framework written in Python3. \n\nIt runs a suite of vulnerability detectors, prints visual information about contract details, and provides an API to easily write custom analyses. Slither enables developers to find vulnerabilities, enhance their code comprehension, and quickly prototype custom analyses.\n\nSlither has been used for many years by both security engineers and developers to secure their smart contracts. ",
    displayName: "Slither",
    impactDescription:
      "By allowing developers to find the most common vulnerabilities on their smart contracts, Slither helps to improve the security of the Optimism ecosystem.\n\nSlither has 90+ detectors, and works on both Solidity and Vyper. In addition it provides printers, helping to review quickly features of contracts. It's python API can also be used to leverage its inbuilt analysis for custom needs.\n\nSlither can directly be run on a contract deployed on optimism, with `slither optim:0x..ADDRESS`",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Sourcify provides an open-source alternative to existing proprietary source code verification tools for contracts\n\nAnyone can run their own Sourcify to trustlessly verify contracts. It's also a knowledge-gathering point for verification, whereas with close source tools, the learnings in verification and the exceptions that need to be handled are not shared with the community.\n\nThe data is open. You don't need to scrape to bulk download contracts. The contract repository is published to IPFS and S3 buckets regularly. \n\nSourcify also aims to foster the \"full matches\" with contract metadata hashes. This ensures cryptographic guarantees for the exactness of the contract. It's nicely demonstrated at playground.sourcify.dev.",
    displayName: "Sourcify",
    impactDescription:
      'We are raising awareness on several fronts:\n- Easy and open access to verified smart contracts\n- Benefits of Solidity\'s contract metadata and its appended hash in the onchain bytecode\n- Centralization in source code verification tools and providing alternatives\n\nWe support 109 EVM chains, among those using OP Stack e.g. OP networks, and Base. We also "monitor" those networks to catch contract creations and verify automatically if the source code is published on IPFS.',
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "We are a 100% free crypto academy that has educated more than 30k people on the Ethereum and Optimism ecosystem.\n\nIn the last 2 years, we’ve hosted +100 live sessions (discord, Twitter, and YouTube), released +200 pieces of content and created a platform with 60 gamified mini-courses.\n\nWe published over 20 pieces of original content on Optimism and created a landing page to display them all together, together with a free course students can follow and 6 mini lessons inside our platform.\n\nWe did 3 free live courses on Crypto 101, Solidity and Crypto Infra (+50 hours live).",
    displayName: "Solow 🐽",
    impactDescription:
      "Solow is Latam’s biggest free crypto academy, with more than 3.2k members on Discord, 30k people learning from our live courses and 100k newsletter opens.\n\nSolow is also one of the largest sources of original content on Optimism in Spanish. We’ve created articles, videos, mini-courses, live sessions, workshops and quests to onboard more people to the Optimism Collective.\n\nBut, while numbers are great, we believe our biggest impact is measurable by the stories of those who walked with us. For many, Solow was the place to learn Optimism. For others, a community to take their first steps, or get their first crypto job. For some, it’s been all 3 of them.\n\nIf we want to build a new, better system, we need to make sure we don’t leave people behind. And education is the only way to do it.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      'Cryptotesters has helped the ecosystem in several ways. \n\nFirst, we were one of the first major NFT collections to launch on Optimism and get traction. There are over 900 unique holders of our membership NFT. Many of which were new to Optimism and had to bridge funds to mint/buy the NFT on Optimism.\n\nThere\'s a healthy mix of some of the best founders in DeFi in our community as well as "retail users" from emerging markets. One of our main missions at Cryptotesters is to bridge the gap between users and founders. We airdropped half of these membership NFTs to old community members before the mint date 2 years ago and have given many away since in order to give people from all backgrounds a chance of entering.\n',
    displayName: "Cryptotesters",
    impactDescription:
      "The bigger positive impact we've had on Optimism is helping native projects get traction.\n\nUser acquisition is one of the hardest and most painful problems in crypto. We've allows many Optimism founders tap into our user base of committed and savvy on-chain power users.\n\nSome of the projects we've worked with:\n\n- Polynomial (futures trading competition, Beta testing of vault product)\n- Thales ( Beta testing with free bet voucher)\n- Lyra ( Options competition)\n- Kwenta (beta testing)\n- Aevo ( OP stack -> beta testing & competition)\n- Nested ( beta testing, portfolio creation)\n\nCryptotesters didn't charge these projects any fee or commission for working with us. It's hard to quantify the impact of each of these initiatives but participation was always very high.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Definomics Labs professionalizes and certifies education in Decentralized Finance and Tokenomics. Among our activities are the translation of articles and papers, certified programs, the creation of educational threads, participation as speakers at universities and blockchain events in LATAM. \n\nIn this year, we have developed two programs with more than 200 studens, focused on DEFI and Layers 2, both covering topics such as blockchain and money, DeFi vs. TradFi, swaps, lending and borrowing, layer 2, bridges, scalability benefits, governance, and security. Each program included a session dedicated to Optimism, the optimistic vision, and its impact on Ethereum scalability.",
    displayName: "Definomics labs",
    impactDescription:
      "Since we founded Definomics Labs, our focus has been on impacting two objectives:\n\n1. Transforming the DeFi sector by guiding talent from Web2 to Web3 and boosting their expertise in DeFi and tokenomics.\n\n2. Empowering individuals and organizations to stay current with rapidly evolving DeFi technologies through tailored in-house training.\n\nOur approach is straightforward, designed to surmount language and technical barriers prevalent in this ecosystem.\n\nOur members actively engage in Optimism's governance, participating in forums and delegating OP tokens to regional representatives to advance governance.\n\nWe remain committed to maintaining an optimistic spirit as we tirelessly work toward democratizing education, making DeFi knowledge accessible to every corner of LATAM.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Our mission is to build the fastest Ethereum consensus layer client and related ecosystem. The consensus layer performance is critical for growing Ethereum validator list and scaling features such as blob transactions that help to scale Optimism (and other L2s)! We have already open-sourced some parts such as the high-performance rust-kzg https://github.com/sifraitech/rust-kzg library for EIP-4844 and we are in progress open-sourcing the rest. The client is currently available as a binary release for evaluation, which is used by a couple of percent of the mainnet according to MigaLabs ( https://monitoreth.io/validators ). ",
    displayName: "Grandine",
    impactDescription:
      "We have built a high-performance EIP-4844 library that works as a drop-in replacement for a reference c-kzg-4844 library. The performance comparison can be found here https://github.com/sifraitech/rust-kzg .\n\nOur main product Ethereum consensus layer client Grandine has the fastest state transition function. Our goal is to push the consensus layer performance further.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Ospace Project launched 2222 Oliens 9th july 2022 as a free mint NFT collection on optimism. we have one of the biggest optimism NFT communities on twitter and discord. we currently have 1474 olien holders and our collection has had more than 3000 sales beside the mint. we had more than 40 $eth volume so far and we were able to attract nft enthusiasts attention by oliens art. ",
    displayName: "Ospace Project",
    impactDescription:
      "We did contribute to optimism by:\n\n1- launching our collection on the early stage of optimism\n2- building a community of +15k members on both twitter and discord\n3- dropping 2222 piece of a cool art on optimism free\n4- having more than 3000 sales\n5- having more than 40 $eth volume\n6- helping other NFT projects on optimism to gain more audience ",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "growthepie is an analytics platform and knowledge hub for Layer 2s. We cover many current OP chains including OP Mainnet, Base, Zora, Gitcoin PGN & more. \n\nFor all OP chains, our users can easily compare fundamental metrics, analyze Blockspace incl. labeled smart contracts and read about the listed L2s. All data can be called for free through our API.\n\nFundamental metrics that we cover for OP chains: Daily Active Addresses, Transaction Count, Stablecoin Market Cap, Total Value Locked, Fees Paid by Users, Rent Paid to L1, Onchain Profit, Transaction Costs.\n\nOP Stack Blockspace Analysis: Different categories of active chain usage in Layer 2s and their smart contracts & ability to propose labels for them.\n\nKnowledge around data & essentials about OP chains, incl. Wiki, articles & threads.",
    displayName: "growthepie",
    impactDescription:
      "The OP Collective can rely on us growing the OP user, developer and investor base through our data and blockspace analysis, providing transparency around chain traction, liquidity & chain usage. Comparing metrics allows making informed decision about which chain & dApp to use and build on by providing developer content. On top of our accessible data visualization, educational knowledge around Layer 2s in the form of Wikis, articles, threads and regular posts make the space more transparent and different OP chains become more familiar. You can compare labeled smart contracts & download via API.\n\nOur data/blockspace visualizations were used in podcasts like The Daily Gwei, Bankless & charts are constantly posted on socials like X and Farcaster to help understand the OP ecosystem.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "The Aestus MEV-Boost Relay is a neutral, non-censoring block relay for Ethereum proof-of-stake validators and block builders, offered to the community as a public good. We are free from any commercial interest and aligned to principles of credible neutrality.  The Aestus  project originally developed out of conversations between members of the EthFinance and EthStaker communities who saw the need to develop credibly neutral architecture for the ethereum staking ecosystem. We have been in continuous operation for approximately 1 year and contribute to security of the L1 and L2 ecosystems.",
    displayName: "Aestus Relay",
    impactDescription:
      "Our impact on the optimism collective is indirect. 400,000 validators including members of LIDO, RocketPool and other staking providers use our services. On a daily basis, between 1-5% of all ethereum mainnet blocks are negotiated using our infrastructure. We play an important part in decentralising the network and securing L1.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Rotki has made significant contributions to Optimism. From early days, rotki recognized the potential of Optimism as an L2 and was the first EVM chain to be integrated\n\nIt supports many Optimism protocols and superchain capabilities making it a versatile and indispensable tool for those navigating the ecosystem\n\nIts innovative decoding system for transactions has greatly enhanced user experience. Optimism users have praised it as a more user-friendly alternative to Etherscan\n\nIt also offers PnL reports, allowing Optimism users to do accounting in a privacy preserving way\n\nIts contributions encompass opensource code, tracking, protocols support, user-friendly decoding system and PnL accounting. These have solidified rotki's role as a vital platform within the Optimistic Ethereum community",
    displayName: "rotki",
    impactDescription:
      "rotki has left an indelible mark on optimism. By running locally on users machines, it ensures their financial data remains private and secure. By being opensource it provides transparency.\n\nIts unwavering support for optimism began early; it was the first EVM chain integrated after mainnet, boasting broad protocol support. Its decoding system won praise from users, offering more user-friendly transaction visibility than etherscan.\n\nIts PnL reporting aids optimism users in accounting for their activities, helping them make sense of their financials.\n\nIts opensource nature has spurred collaboration within the community. It has given rise to projects like Buchfink and Decodify, which have further enriched the ecosystem by providing plaintext accounting and decoding solutions respectively.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Hope is a free, publicly available, continually updated AI Assistant that is helping users and developers on the OP Stack find answers quickly and easily. To date, we have provided responses to more than 130 user questions (directly through the website or as a response from our team to a query in the Optimism Discord), and this reach can readily be expanded with direct Discord and/or Telegram integration of the Assistant. \n\nWhat's unique about using Hope is that doing so directly supports people in underserved communities who are learning about and contributing to web3. humanDAO funds wages for contributors who monitor Optimism's social accounts, Discord, and other forums to ensure Hope remains up to date, provides accurate sources, and responds to user feedback. ",
    displayName: "Hope: A Curated AI Assistant for the Optimism Ecosystem",
    impactDescription:
      "We have already helped over 30 users and developers explore and engage with the Optimism ecosystem. Questions have ranged from governance to the $OP token, detailed development queries, management of the Optimism Foundation and its priorities, and the mechanics of the various OP airdrops. With greater implementation, Hope can significantly reduce the overhead and complexity of Optimism's support functions and create a much more scalable support function for the next wave of users. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Onboarding new users to web3 has always been a challenge.\n\nUnitap makes sure everyone’s initial steps into Web3 are free, easy, and understandable. People can earn rewards that are only going to UNIQUE HUMANS thanks to BrightID and other Sybil resistance tools.\n\nUnitap includes 4 Taps and 3 of them are live:\n1. Gas Tap: Unique humans can obtain a tiny amount of gas tokens on almost all the major EVM networks to start using them.\n\n2. Prize Tap is where people can create raffles and gate them with the requirements they want.\n\n3. Token Tap is where anyone can distribute any kind of tokens gated by the requirements they wish.\n\nWe deployed all 3 Taps on Optimism and created an incentive program via Token Tap as a PoC. So, Unitap is ready for token distribution and raffle creation on Optimism.",
    displayName: "Unitap",
    impactDescription:
      "We deployed & funded Gas Tap on Optimism. Thousands of unique users have claimed gas from the Optimism Gas Tap to use the Optimism Network. Furthermore, It's a community-based product, and everyone can fund it. It makes it so easy for everyone to obtain the gas token they need to use the Optimism network.\n\nWe deployed both Token Tap and Prize Tap contracts on the Optimism Network and ran a Proof of Concept via Token Tap that shows how they can be used to reward users for on-chain activities in the Optimism network.\n\nWe set a token distribution of 0.1 $OP for the first 1000 unique users who claimed ETH on OP Gas Tap.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Web3.js is a Javascript/Typescript library that allows developers to interact with the EVM compatible blockchains and build DApps.\n\nWeb3.js v4 offered many new features, including Plugins to extend web3.js lib functionality. This enabled Optimism to develop a L2 plugin. With this Web3.js helps the developer ecosystem at multiple layers.",
    displayName: "Web3js",
    impactDescription:
      "The web3.js library has significant impact on developers working with EVM blockchains including Optimism network. Web3.js has around 2 million downloads per month on NPM, and 10+ million CDN hits per month. There are 4500+ library projects depending on web3.js library. ",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "DeSchool has been providing full range of free-to-access Web3 education since early 2022. To date, over 3000 on-chain certificates have been issued for users. Partnering with multiple DAOs, DeSchool acts as the onboarding platform for Web2 audience to learn knowledge and culture about Web3. \n\nDeSchool provides fundamental knowledge about OP and train users to better equip with Web3 tools before onboarding them to the OP ecosystem and continue their learning and building journey. We are building more OP ecosystem content and preparing to better support OP CN in collaboration with developer communities.",
    displayName: "DeSchool",
    impactDescription:
      "Not only we provide education for Web3 tech and tools, we‘re also one of very few platforms providing education and practical experience for DAO governance and operation for Chinese speakers, preparing builders to better participate in governance, so that builders are better prepared to join governance in the Collective",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "The NumbaNERDs program created deep dives on various grant recipient projects, improved data accessibility (by contributing to open source data infrastructure including Dune Spellbook and OP Analytics) and created mappings for deployers, improving the Optimism analytics ecosystem as a whole.",
    displayName: "NumbaNERDs",
    impactDescription:
      "The NumbaNERDs program has had a significant impact on governance-related analytics, data infrastructure, and transparency within the Optimism ecosystem, fostering growth and informed decision-making.Through collective contribution coming from our NumbaNERDs community, Optimism data excels any other protocol in the blockchain ecosystem. ",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "Vue Dapp offers an integration service that combines the Vue.js frontend framework with crypto wallets. In the world of web3 development, React.js dominates the majority of Dapp frontend. Vue Dapp presents an alternative technological choice, enabling developers to create decentralized services effortlessly with the simplicity of Vue.js. This not only enhances the diversity of technology within the ecosystem but also opens the door for more developers to engage in dapp development. Vue Dapp aims to move towards a more streamlined and easily scalable service goal, providing the best user experience and developer experience for various infrastructures and projects in the web3 world.",
    displayName: "Vue Dapp",
    impactDescription:
      "As of now, 137 projects have adopted Vue Dapp, with the Punk Domains community contributing numerous use cases. Their frontend template uses Vue Dapp, and this template is used by various projects collaborating with them, including PoolTogether and Optimistic Domains, etc.\n\n- Punk Domains https://punk.domains\n- PoolTogether https://names.pooly.me\n- Optimistic Domains https://optimistic.domains\n\nIn addition, a well-known project Gelato, their relay app is also developed using Vue Dapp. One of their developers is also one of the maintainers of Vue Dapp.\n\n- Gelato https://relay.gelato.network\n\nThese widespread adoption has created significant impact in the web3 world for Vue Dapp.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "We believe information fragmentation is as big of an issue as liquidity fragmentation when seeking mass adoption of Defi. To combat this, we have provided educational/investment tools for users surrounding Optimism projects.\nWe have provided Project Breakdowns on several projects within the ecosystem including Velodrome, Beethoven, Synthetix, and Lyra to serve ecosystem users.\nAdditionally, we have provided additional exposure to Optimism related podcasts featuring hosts such as Subli- via our Notes product which provides summarizations of AMAs to allow users to digest more content in an efficient manner.  \nAn overview of our Breakdowns https://revelointel.com/breakdowns/. \nAn overview of our Notes product https://revelointel.com/notes/",
    displayName: "Revelo Intel",
    impactDescription:
      "Through the development and distribution of our content on the projects and podcasts mentioned above, we are pleased to have been able to expose Optimism related projects to:\n-5,000 platform users of ReveloIntel.\n-11,000 newsletter subscribers.\n-13,000 twitter followers - Main Account\n-18,500 twitter followers - Founder Account\n-3,300 youtube subscribers. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "There was no simple solution for the Optimism community to create and manage 6551 token-bound accounts. We built 6551 Studio so anyone using Optimism can turn any NFT they own into a smart wallet with one click and manage their collections with an intuitive drag-and-drop UI. \n\nWe believe 6551 token-bound accounts will be a standard during the next bull run and want everyone on Optimism to have the ability to participate in the evolution of NFTs.",
    displayName: "6551 Studio",
    impactDescription:
      "6551 Studio is an expansion of the #1 project on 6551, Cre8ors.com, which gave thousands of new users awareness and access to participate in the Optimisim ecosystem by way of bridging Ethereum and Polygon NFTs into an Optimisim smart wallet using the free platform.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Kredeum NFTs Factory Dapp is deployed on Optimism,  enables Web2 users to publish on their WordPress website NFT marketPlace with Optimism NFT Collections  \n\nWith these smartcontracts deployed :\n- Kredeum NFTs Factory, to clone templates\n- Kredeum NFTs Resolver, to get infos from all Optimism NFTs\n- OpenNFTsV4 : Basic NFT Collection template\n- OpenMarket : Advanced NFT Collection template including Market functionality\n",
    displayName: "Kredeum NFTs Factory",
    impactDescription:
      "Developer Ecosystem\n\nKredeum Factory 'onchain' NFTs Resolver  offers a gasless access to all NFTs metadata on Optimism Network  : onchain alternative to NFT API (or subgraphs) available offline \n\nA dedicated NFT library: OpenNFT library , derived from more generic OpenZeppelin library, offers advanced features:\n- SoulBound\n- Multichain\n- AutoMarket\n- ERC6551 support (soon)\n\nEnd User Experience & Adoption\nHelp WordPress community to use Optimism\n",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "Beam is an attempt at what a Superchain wallet should look like. It solves the user confusion that can result from assets spread across multiple rollups. Beam’s ‘Supersend” feature is fully operational and has already proven that a solution to this challenge exists and that it can be delivered to users in a tool that is fast, cheap and a delight to use — with more than 70,000 users saving access to their Beam wallets. ",
    displayName: "Beam Wallet LLC",
    impactDescription:
      "Launched just over two months ago, more than 70,000 users have saved access to their Beam wallets by signing in with X. More than 33,000 users now hold ECO on Optimism, almost entirely through Beam. Beam users are able to access the benefits of using the OP Stack to transfer value globally with low fees, but without needing to worry about much of the complexity that comes with typical crypto wallets.  \n",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Revm has become a critical core component of the Ethereum ecosystem, \nused by various builders, researchers, devs, tooling, and even the client.\n\nRevm is an EVM written in the Rust that is focused on speed and simplicity. It has a fast and flexible implementation with a simple interface for easy consumption.\n\nNotably, Revm plays a central role in various high-impact projects. The Foundry was an early adopter, while Hardhat initiated its transition to Revm for their EDR runtime (previously known as rethnet) last year. On the infrastructure front, Revm is integrated inside Reth (Ethereum Execution Client), it enabled risc0 to effortlessly make zeth (a zkEVM), and has support for Optimism transactions, among other usages.",
    displayName: "revm",
    impactDescription:
      "In essence, Revm is a library within the Ethereum ecosystem, powering key projects, fostering innovation, and contributing to the network's overall robustness and growth, it allows the Rust Ethereum ecosystem to flourish.\n\nIts impact is on both the tooling and the infrastructure, as it is a library its impact is propagated through the projects that use it, as mentioned above. It is unique as it provides common ground for a lot of different groups that have a need to use fast, stable and dependable Ethereum Virtual Machine in Rust.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "The Synthetix IPFS Node is the gateway to decentralized frontends in the DeFi ecosystem. This solution champions true decentralization, allowing users to interact with dapps without depending on centralized hosting. By encouraging users to run their own IPFS Node, we aim to bolster decentralised access and optimise IPFS load speeds.",
    displayName: "Synthetix IPFS Node",
    impactDescription:
      "Strengthening the DeFi Ecosystem\n\nDecentralised Resilience: The Synthetix IPFS Node mitigates the vulnerabilities of centralised systems, offering more consistent uptime and reducing risks.\n\nEmpowered Community: Users, by running their nodes, directly influence the decentralization of the ecosystem, improving frontend performances.\n\nCensorship Resistance: The distributed nature of IPFS ensures that the frontends are less prone to external interference or censorship.\n",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "far.quest helped over 100,000 unique people around the world learn about Farcaster, a decentralized social network built on Optimism (https://farcaster.xyz).\n\nWhen our users registered on Farcaster through us, or logged in through our client at https://far.quest/cast, they interacted directly with Optimism.\n\nWe also helped developers build on Farcaster, we offered free and open-source Farcaster APIs (https://docs.wield.co/farcaster/api), and teached users how to run a Farcaster hub for half the cost of the official guides (https://docs.wield.co/farcaster/hubs).",
    displayName: "far.quest",
    impactDescription:
      "We helped over 100,000 unique people learn about Farcaster, and contributed to over 2,000 onchain Optimism transactions in 11 days once Farcaster went permissionless.\n\nWe also helped people build on Farcaster through our free open-source Farcaster APIs, and through our tutorials on how to run a Farcaster hub for half the cost of the official guides.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We are the creators and maintainers of Waffle, a framework for testing smart contracts. \n\n- Multiple repositories in the Optimism ecosystem are dependent on Waffle. \n- Waffle provides a clean and simplified way to write tests for smart contracts. \n- It abstracts away much of the boilerplate code, making it easier to focus on the actual test logic and improving overall ecosystem security and reliability. \n- Waffle is one of the most popular testing libraries. It has helped many projects and developers keep their smart contracts secure and well-tested. \n",
    displayName: "Waffle",
    impactDescription:
      "Waffle has enabled teams, including OP Labs to more quickly and reliably write smart contact tests, making applications safer for users. \n\n- Waffle was used by over 70k projects including Optimism, Uniswap, Aave, 0x, Balancer, zkSync, Cosmos, ENS, Gnosis, SushiSwap, Loopring, Aragon, PoolTogether, and Gitcoin. \n\n- Here is the full list of projects using Waffle at this point in time: https://www.npmjs.com/package/ethereum-waffle?activeTab=dependents",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "We are creators and maintainers of the open-source frameworks UseDApp, a framework for decentralized application development\n\n- UseDapp has helped developers build complex multichain application support streamlining the development process. \n- UseDapp supports almost 70 different chains, including Optimism, Optimism Goerli, and Optimism Kovan, improving developers' ability to build and test dApps. \n- UseDApp was the first framework to use Multichain calls which lead to broader blockchain call optimizations. \n- UseDApp also created a set of useful hooks and helpers that made it even simpler and faster to integrate with different existing standards like ERC20 e.g. useTokenBalance, and useTokenApprovals.",
    displayName: "UseDApp",
    impactDescription:
      "- Over the last few years, UseDapp was downloaded almost 1 million times and helped a lot of developers to increase time-to-market for their applications. \n- UseDapp was used by projects like Optimism, Status, Nouns, Tally, Boba Network, Pool Together, NuCypher, Index Coop, & over 4.5k more total projects. \n- UseDapp was popular with hackers at hackathons, as well. \n- It has >1.5k stars on GitHub. For years it was a leading web3 react library. \n- UseDApp is integrated with different tools and boilerplates like create-react-app (https://github.com/PaulRBerg/create-eth-app) with 2.6k stars on GitHub. \n- UseDApp as an open source library has additional extensions and adapters including one written by OP Labs PBC member Fucory https://twitter.com/FUCORY/status/1682046286902755332\n",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "ETHAccra hackathon 2023 (95 hackers, 15+ submitted projects and USD 10K sponsor prizes) was a local community initiative to help grow the Ethereum & L2 (Optimism) developer ecosystem in Ghana, West Africa. ETHAccra hackathon enabled participants to connect, learn, hack and build elevating web3 to solve local solutions.\nETHAccra successfully conducted a developer campus tour across 4 universities in Ghana with the goal in training developers, igniting the passion in budding web3 leaders, recruited new builders, armed them with practical know-how and unlock a universe of opportunities in the ecosystem, Optimism included. \n",
    displayName: "ETHAccra",
    impactDescription:
      "Developer Ecosystem\nThe hackathon marked a significant milestone as the first of its kind in Ghana, paving the way for further innovation in the region. We had in total 97 registered hackers, many of the participants were first-time builders who were new to web3 technology. Hence ETHAccra has successfully welcomed and integrated these new builders into the ecosystem, and we remain committed to this mission. \n\nEnd User Experience and Adoption\nAdditionally during the Developer Campus tour we have onboarded many participants into the Optimism ecosystem by setting up a MetaMask wallet and introducing them into the ecosystem. We also provided them with educational learning material on how to better navigate in the Optimism L2 ecosystem.\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Socket is an interoperability protocol that powers seamless asset & data transfers for apps across blockchains. 70+ wallets & apps including Metamask, Coinbase Wallet, Bungee, Synthetix, Polynomial, Kwenta, Lyra, Rainbow & Zerion leverage Socket for various cross-chain use cases.\nHere are our contributions to Optimism:\n\n- Enabled onboarding to Optimism right within 30+ wallets, not just from Mainnet but 10+ chains.\n- Improved cross-chain UX for 10+ Optimism native apps including top options and perp protocols with our open-source 'Socket Plugin'\n- Refuel, our public good to Optimism enables users to receive gas tokens, with no extra fees\n- Day 0 bridging support across our 100+ ecosystem for OP-Stack chains like Base, Zora, etc.\n- Built OP-Stack with Aevo to bring zero-cost L2<>L2 bridging",
    displayName: "Socket ",
    impactDescription:
      "Over the last 2 years, Socket has worked to eliminate one of the biggest problems hindering user onboarding and protocol adoption on Optimism. Along with our 100+ ecosystem, we powered seamless cross-chain experiences right within apps, removing any friction to try Optimism.\nHere is our impact so far:\n- Bridged $1B+ volume in 2 years across Metamask, Zapper, Zerion, Slingshot, Bungee, Layer3 & 30+ apps\n- Onboarded 1.5M+ wallets with a simplified 1-click onboarding into Optimism on top OP native apps including Synthetix, Kwenta, Lyra & Polynomial\n- Facilitated 600K+ gas top-ups to Optimism via our public good Refuel\n- Facilitated 125K+ transfers to Base & Zora supercharging OP-Stack growth\n- SuperBridge to Aevo facilitated 10K+ zero-cost transfers, pushing one step closer to Superchain",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      '\nChronicle labs, formerly the Maker Oracle team, along with the Maker Protocol Engineering team developed a native DAI bridge named "Teleport" in 2022. The infrastructure allowed for "fast withdrawals" of DAI from L2 to L1 for the first time. The first deployments went live on Optimism and Arbitrum in November 2022 allowing Optimism users to transfer DAI from L2 to L1 instantaneously. Teleport utilized off-chain Oracle Feeds to communicate between L1 and L2, providing cross chain communication messaging. Significant engineering time and resources (6 months/1,920 hours) from the Chronicle Oracle team contributed to the development of the first, trustless Dai bridge, providing users with the advantage to withdraw L2 funds near instantly by avoiding the need to wait for fraud proofs. \n\n',
    displayName: "Chronicle Labs",
    impactDescription:
      "The development of a canonical DAI bridge following the launch of Optimism offered an important technical improvement for Optimism users as the 7 day fraud-proof waiting requirements were able to be bypassed for the first time. Bridging of a fully composable, top stablecoin like DAI, instead of relying on wrapped versions and non native bridges, aimed to provide better security and a frictionless experience on Optimism. Since the deployment of Teleport (with an initial $1M debt ceiling for DAI mint/burn set by governance), Maker governance has voted to change its multi-chain product roadmap, resulting in the pausing of Teleport. However, Chronicles research, development and deployment of Teleport demonstrate a considerable amount of time and commitment to supporting Optimism.  \n\n\n",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "OurNetwork is a free crypto analytics newsletter and community of more than 300 analysts and 29,000 readers from around the world. Published by Spencer Noon (that’s me 👋) and produced by our analyst community, the newsletter provides weekly data-driven insights and analysis on the top projects in crypto, including Optimism and the OP ecosystem. \n\nClick here to view Full Application, including key our contributions to Optimism: https://docs.google.com/document/d/1GXnwViZ8C7gEWjIE-WKjQvNKiYcpuYfZ7qZxG8BgwRs/edit?usp=sharing\n\nThanks in advance for reviewing and apologies for going beyond the character limit—there was a lot to say!",
    displayName: "OurNetwork",
    impactDescription:
      "OurNetwork has closely covered Ethereum and its L2 ecosystem including Optimism since Day 1, educating Optimists and the industry at large about major category trends and key metrics that are observable onchain. We are also a frequent user of Optimism onchain.\n\nClick here to view Impact Summary describing our quantitative and qualitative impact on the Optimism Collective: https://docs.google.com/document/d/1_cpSRh39j2oR39mZ8x4VA8xqNd0NEJtyCnquchMd7DE/edit?usp=sharing",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Dear Optimism team,\n\nWe welcome you to our optimism journey. Our team strives to give readers the most insightful Optimism project updates. With 3000 to 5000 daily website visitors, we have built a vibrant community of engaged readers who are passionate about Optimism's transformative potential.\n\nPartnering with us gives you exposure and access to a growing audience. We can strengthen Optimism's impact and reach by building a long-term relationship. As our audience grows, we are committed to improving our efforts to make our collaboration with Optimism a beacon of innovation and inspiration.",
    displayName: "Coinbold",
    impactDescription:
      "We believe that by giving clear information about the project, our readers will be able to see it from a wider, more objective perspective. We believe that when information is presented completely and impartially rather than with bias, readers are more likely to choose to stick with the project.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "With just a few clicks, you can run an OP Stack node and other OP native nodes - like a Farcaster Hub!\n\nNiceNode supports chains that implement the OP Stack’s node - an OP execution (op-geth, op-erigon, op-nethermind, etc.) and consensus client (op-node). Users can start and stop the OP node, change its settings, and monitor its status and usage.\n\nAdditionally, an OP native protocol - Farcaster - is supported. A Farcaster Hub stores the state of the decentralized social media protocol. Users can easily run a Farcaster Hub, Hubble, using NiceNode's UI with only a few clicks! \n\nNiceNode works great on Ubuntu and other Linux distros work well now and is available to try on Mac and Windows.",
    displayName: "NiceNode",
    impactDescription:
      "NiceNode provides the most simple way for users to run nodes. This gives Optimists a non-intimidating way to participate in the long-term health, resiliency, and decentralization of the Collective. \n\nWe just released Optimism Sepolia, Base node, and Farcaster Hub support and have not marketed or tracked usage for these capabilities fully. We have had limited impact at this time. There are on the order of tens of users experimenting with the app. The app downloads from our Github repo has reached +9500 downloads!",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Erigon is an implementation of the Execution Layer and, since recently, of the Consensus Layer (project \"Caplin\") of Ethereum and other EVM-based blockchains. It especially excels as an archive node with a low disk footprint and high performance. We strive to push the boundaries of what's possible on blockchain. Next year, we're going to release Erigon 3, which will further reduce the disk footprint, increase the speed, provide state history with transaction-level granularity and reduce the sync time for new nodes.",
    displayName: "Erigon",
    impactDescription:
      "Upstream Erigon serves as the basis for op-erigon, an Optimism fork of Erigon. Besides excelling as an archive node, op-erigon helps to improve client diversity. Test in Prod, a team external to OP Labs and Erigon AG, achieved this exciting development, demonstrating the power of the modular and open-source OP Stack.\n\nWhile this first version of Optimistic Erigon needs ongoing testing to ensure stability and prepare for an eventual OP Mainnet launch, it represents a massive milestone in L2 client diversity.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Scry has directly enabled new use cases like being able to allow a mint for an NFT held on ETH or Base to unlock access on OP, or for games, or to allow protocols to distribute fees on other protocols to token holders on OP or even access assets on other networks such as Base to allow for easy compatibility in an increasing diverse space, especially with OP Stack.",
    displayName: "PR0",
    impactDescription:
      "Scrys tools have directly enabled new, unique use cases such as Veryfi, which is a dapp that lets users verify their assets on any other chain, such as NFTs, ERC20s on other networks, allowing Optimism to attract projects on any network to it without needing their users to move assets or relaunch, allowing for easy bootstrapping and compatibility for any project that wants to use OP for new uses without full redeployment.\n\nBy enabling anyone to run their own oracle, Scry has democratized the oracle space, with full control over their data and allows for easy bootstrapping of data onto OP Stack chains (we were the first oracle deployed on Base). Developers can now access any data they need without relying on 3p providers, ensuring data integrity and reducing potential points of failure.",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "Bored Town is not just an NFT art community; it's a hub of innovation, support, and artistic growth. With a solid commitment to fostering talent and nurturing the world of NFT art, we've embarked on an exciting journey of empowerment. Thanks to a recent governance grant, we've hosted an exceptional art contest and established our launchpad to showcase participating artists' works.\n\nOur unique approach involves incubating artists from the ground up, regardless of their technical know-how. We provide the knowledge, tools, and nurturing environment for them to thrive. This creates a supportive and safe space for both artists and art enthusiasts within our community. In Bored Town, our members can explore the potential of Optimism Stack while enjoying high-quality art from genuine creators.",
    displayName: "Bored Town NFT art community",
    impactDescription:
      "Our progress so far includes 46,000 followers on X, 18,700 Discord members, and over 20 collections across various blockchains, primarily on Optimism, engaging with 28,800+ wallets.\n\nWe maintain strong partnerships with protocols like Galxe, Guild.xyz, Clique, QuestN, and Opti.domains. We offer support to around 200 artists from our art contest, with several successfully launching their debut NFT collections on Optimism and OP Stack through our launchpad, receiving exceptional community support.\n\nTo date, we've nurtured 8 collections, each with a supply of up to 35k, all minted in less than 2 hours during public events. Our community members consistently receive rewards for minting, holding NFTs, and participating in art contest voting. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We have deployed Endaoment on Base and Optimism this year, enabling a new audience of donors to access affordable onchain giving through account abstraction. With these deployments, everyone transacting on Optimism or Base can now utilize fully composable verified endpoints for 1.8m+ nonprofits in 150+ countries. To kickstart adoption, we deployed contract addresses for 7000+ verified organizations on both networks. Endaoment also supported other new OP stack chains, having contributed to governance and ideation around Gitcoin’s PGN. Since launch in 2020, Endaoment.org has delivered $58M+ impact for social good, making philanthropy as native to blockchain as DEXs and DAOs. We are excited to be early supporters of the Optimistic Vision and the Superchain. ",
    displayName: "Endaoment",
    impactDescription:
      "We have enabled the Optimism Collective and all its current and future participants to access 1.8m+ donation endpoints to directly fund a cause and generate impact amongst existing, reputable nonprofit organizations, regardless of their understanding or adoption of the Superchain. The deployment of this infrastructure builds upon $59m of onchain impact by removing on and off-ramping barriers for nonprofits to accept any asset digital or otherwise. We've deployed 7000+ contract addresses on Base and OP respectively, representing every verified nonprofit in our database on both chains. We have seen 455 donations from 379 unique wallets to 91 organisations. Donations enable quadratic matching from the Universal Impact Pool with each new recipient earning funding from this activity.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "We identified a great barrier hindering the integration of blockchain technology in regular projects: the complexity and steep learning curve associated with blockchain interaction.\nHence, we created a platform simplifying blockchain interaction for developers. It provides user-friendly REST APIs for various blockchain functionalities: creating and managing NFTs, decentralized file storage, creating ERC20 tokens, etc., making it easier and faster for devs to integrate apps on the OP Mainnet\n\nOur impact:\nAdoption: Our platform has significantly reduced the barrier to entry\n\nEducation: Through our series of workshops, we've educated developers, helping them deploy their first smart contract\n\nEngagement: Our engagement with local and global communities has fostered a collaborative environment",
    displayName: "WakeUp Labs",
    impactDescription:
      "Our contributions have played a pivotal role in bridging the knowledge gap, enabling a broader spectrum of developers to engage with blockchain technologies without the need for extensive prior knowledge. By simplifying blockchain interaction, we have accelerated the rate of adoption and innovation on the Optimism network. \n\nOur educational initiatives, in partnership with local communities for developer workshops, have further fostered a robust developer community, expanding the pool of skilled individuals capable of contributing to the Optimism ecosystem. We generated a meeting point with developers interested in developing on Optimism, with a focus on Latin America, creating high-quality Spanish content.  ",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "The OpenZeppelin Contracts library helps developers reduce risk by using battle-tested implementations of solidity smart contracts. Developers can also use The Contracts Wizard for no-code development, and upgrade plugins for handling upgradeable contracts.\n\nThe library is always being worked on by our fully dedicated team of developers and community support. The 5.0 release added namespaced storage, efficiency improvements, a new AccessManager contract, and more. Before every update, we do extensive testing, including fuzzing and formal verification, as well as an audit by an internal independent team.\n\nDevelopers using the library can benefit from the Defender platform's free plan to securely code, deploy, and operate contracts. Defender supports Optimism and Base testnets and mainnet.",
    displayName: "OpenZeppelin Contracts",
    impactDescription:
      "Since the early days of Solidity, OpenZeppelin Contracts have been used by almost every smart contract system from the largest projects transacting billions of dollars to individuals building smaller applications. Close to 60% of all transactions in OP mainnet happen via contracts using the library.\n\n- Developers are able to develop applications faster by using ready-made contract templates and components.\n- Applications that use our battle-tested library are more secure, reducing the risk of vulnerabilities for applications in the Optimism Superchain.\n- New developers can use the Contracts Wizard to develop their first smart contract and deploy it in a few simple steps to the Optimism network.\n\nThe Defender platform free plan provides additional security tools to the Optimism Collective.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "The Graph has supported Optimism since the initial launch of mainnet. More on that here: https://thegraph.com/blog/graph-optimistic-ethereum/. \n\nSince Optimism mainnet launch, The Graph's hosted service, subsidized by The Graph ecosystem (meaning completely free for dapps) has served:\n\n22.7B queries\n1.15K subgraphs\nwith a 99.97% query success rate.\n\nOver the past 30 days alone, The Graph has served 1.24B queries.\nAlso, The Graph supports Optimism Goerli and Kovan, and on testnet has served:\n\nGoerli\n1.24B queries\n272 subgraphs\n99.98% query success\n\nKovan\n173M queries\n154 subraphs\n99.99% query success",
    displayName: "Edge & Node / The Graph",
    impactDescription:
      "Many Optimism dapps rely fully on The Graph for a seamless UI experience to onboard and maintain users Optimism. Since Optimism mainnet launch, The Graph's hosted service, subsidized by The Graph ecosystem (meaning completely free for dapps) has served:\n\n22.7B queries\n1.15K subgraphs\nwith a 99.97% query success rate.\n\nOver the past 30 days alone, The Graph has served 1.24B queries.\nAlso, The Graph supports Optimism Goerli and Kovan, and on testnet has served:\n\nGoerli\n1.24B queries\n272 subgraphs\n99.98% query success\n\nKovan\n173M queries\n154 subraphs\n99.99% query success\n",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "0xSplits is a suite of smart contracts & tools that allows devs and end users to easily, securely, and efficiently customize onchain payouts. Our current offerings include splits (immutable, mutable, & liquid), waterfalls/recoups (sequential payouts), vests (multi-stream, single beneficiary), swappers (receive any token, output a single type), pass-through wallets (inject governance), and diversifiers (receive any token, output multiple types) as well as the accompanying subgraphs, sdk, & UI.",
    displayName: "Splits",
    impactDescription:
      "0xSplits makes it easy to reward collaboration onchain and customize payouts. We’ve been used by collectives (e.g. Protocol Guild, Songcamp), DAOs (e.g. Airswap, Bankless, Bouns), applications (e.g. Sound, Superrare, Proof, Transient Labs, Heds, Decent, Bonfire, Arpeggi), artists/musicians (Jonathan Mann, Daniel Allan, Reo Cragun), and devs (e.g. Quantum, Props) to power collaborative & customized payouts. Our open source & free-to-use ecosystem has distributed ~$40M to 10K+ unique accounts on several EVM chains including OP.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Hop Protocol has created an L2 bridge experience that has helped over 300k users onboard more than $725 million into the Optimism ecosystem and has accounted for over 1 million transactions on Optimism chains. Hop has supported Optimism and Base since day 1 of their public launches, as well as their respective testnets.\n\nHop has established standards for cross-chain bridging and messaging. These contributions have provided valuable insights that have influenced the design and growth of the L2 ecosystem & created EIP-5164.\n\nOn the non-technical side, Hop developed a Sybil detection framework used by Optimism, filtering out over 2k Sybil hunters from Optimism Airdrop #1. Hop also introduced a novel mechanism for OP token distribution, adopted by other teams to boost onboarding into Optimism.",
    displayName: "Hop DAO",
    impactDescription:
      "Impact has been in the form of measurable value, technical contributions, and less-tangible efforts:\n\n* ~$2.5 million (~1% of airdrop #1) OP reallocated from sybil hunters to real Optimism users with Hop DAOs sybil repo.\n* Established standards for cross-chain bridging and messaging. Provided insights, feedback, and code to be reused in L2 systems. Co-authored EIP-5164 to help developers easily integrate with L2s.\n* Over $700 million and 325k unique users onboarded into the Optimism ecosystem.\n* Over 1 million txs made on Optimism chains, translating to 250+ ETH in fees paid to secure Optimism.\n* Gave feedback to Optimism about the code and SDK and offered suggestions.\n* Distributed 250k OP with a novel mechanism for token distribution, adopted by other teams for onboarding into Optimism.",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "- EthereumETL has been described as the most useful open-source project for facilitating data science on Ethereum data. Almost 2700 stars on our GitHub project show how many people use the tools we developed. \n- The same tools are available for analyzing Optimism data, with Optimism-specific fields added in this pull request: https://github.com/blockchain-etl/ethereum-etl/pull/446\n- Ethereum ETL powers the database behind the Optimism Gas Tracker, as confirmed here: https://twitter.com/MSilb7/status/1686823154713296897\n- Additionally, a public BigQuery Ethereum dataset, published in collaboration with Google and utilizing EthereumETL, has proven valuable to numerous companies and individuals by enabling research, data science, and the development of data-driven applications\n",
    displayName: "EthereumETL",
    impactDescription:
      "Almost 2700 stars on our GitHub project show how many people use the tools we developed. They are used in OP Analytics repository https://github.com/ethereum-optimism/op-analytics#common-requirements and Optimism Gas Tracker dashboard https://optimism.io/gas-tracker ",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "We are actively contributing to the Optimism ecosystem by developing open-source tools designed to help DeFi users make informed decisions about liquidity provision. Our tools are free to use and focus on quantifying both the risks and rewards associated with various DeFi protocols. Specifically, we have created two key tools tailored for Optimism:\n\nUniswap V3 Strategy Simulator and Backtester for Optimism\nPerpetual Protocol Strategy Simulator and Backtester for Optimism",
    displayName: "Defi-lab.xyz",
    impactDescription:
      "Our project empowers DeFi users on Optimism by providing insightful risk-reward analyses for liquidity provision across multiple protocols, including Uniswap and Perpetual Protocol. By offering this support, we aim to unlock new capital streams, thereby contributing to the accelerated growth and activity on the Optimism network.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "A provider-agnostic hub for onchain data analytics, MetricsDAO has created impact in the Optimism ecosystem through publicly available insights, education, and other support for multiple types of ecosystem participants: end users, project builders, data providers & highly skilled blockchain data analysts.\n1. Data analytics. Metrics App has hosted analytics bounties and our community created dashboards providing insights to end users and project teams on Optimism and the Superchain including Base.\n2. Our free educational courses graduated analysts and data builders to participate in the OP ecosystem. We also hosted a dedicated workshop covering the Optimism Collective.\n3. Our data partnerships have trained users for other organizations that offer Optimism data, builder tools & education.",
    displayName: "MetricsDAO",
    impactDescription:
      "- Over 200 OP and Superchain analytics dashboards created by our community.\n- Base dashboards garnered 18,000 social media impressions.\n- Over 11,000 YouTube views on Blockchain Data 101 (our most popular series). 1,800+ registered participants in our free education courses. By training web3 analysts, MetricsDAO has grown the pool of data builders who can create tools for OP projects and educate users.\n- 100 views and counting on the OP webinar to educate the MetricsDAO community on the Optimism Collective. \n- Overall, an engaged community of 5,000 members, among them over 1,000 active blockchain analysts, who have already created 8,000+ total dashboards at MetricsDAO, and can continue to actively participate in the OP ecosystem and publish insights.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Metagov is an 800-member research collective working at the frontier of online governance research and development. Our initiatives significantly align with Optimism's objectives: \n\n1. Development: Projects including Validator Commons, Web3 Grant Report, DAOstar, Metagov Gateway, DAOscience, PolicyKit, Agreement Engine, CommunityRule, and Collective Voice, have laid the groundwork for advanced governance experimentation.\n\n2. Discussions: Initiatives like the ongoing Metagovernance Seminar since 2020, DAO Harvard, Stanford DAO Workshop, What’s Governing Web3 at RMIT, Building blocks of Web 3.0 at Harvard Law School, and Open Problems in DAOs at various locations, Metagov House @ ETH Denver, residencies such as DAO Palace, have facilitated focused discussions around online governance.",
    displayName: "Metagov",
    impactDescription:
      "1. Fostered an 800-member community of researchers, developers, and thinkers, becoming a hub for governance talks beneficial to Optimism.\n\n2. Organized events like the Metagovernance Seminar, DAO Palace, workshops at Harvard, Stanford, NYU, and RMIT, and others that facilitated key partnerships, insights, and collaborations for Optimism.\n\n3. Deployed tools like Govbase, Metagov Gateway, and PolicyKit, advancing governance experimentation and integration of sophisticated online structures.\n\n4. By co-organizing workshops with industry giants like OpenAI and the Internet Archive, promoted DAO governance in industry. \n\nThrough these impacts, Metagov has provided Optimism with tools, insights, and a robust community that collectively drives the evolution of digital self-governance. ",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Ether actor has allowed front-end developers and blockchain developers to quickly query information in a evm and web friendly way without needing to deal with RPC endpoints, decoding transactions and providing a free service.\nSyndicate has helped pay for hosting and I have worked with various RPC providers to keep this a free public goods service since it was created two years ago in 2021. \n",
    displayName: "Ether.actor",
    impactDescription:
      "This tool has helped multiple developers building on the base, zora, and optimism ecosystem to integrate counts into spreadsheets, NFT minting websites, check transaction data easily without needing specific tools and needing to pay for an RPC provider since we work with providers to get enough bandwidth to run this service. We have served over 41 million requests and over 200 thousand within the optimism ecosystem, building out NFT support before alchemy supported NFTs on the optimism chains and adding base and zora support quickly for the superchain ecosystem.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Proof of Personhood is one way to enable democratic systems on chain that distribute voting power to each person instead of based on the size of the wallet. Coinpassport makes it easy to provide a strong signal to your individual humanity by linking your passport to your Ethereum wallet. For a fee of 3 USDC, Coinpassport uses Stripe Identity to verify your face matches your passport.\n\nCoinpassport has been live on Optimism mainnet since May 14, 2022 and has received 22 fee payments in that time.",
    displayName: "Coinpassport",
    impactDescription:
      "Anyone can build applications that use verified passports using Coinpassport.\n\nI made a no-code DAO construction dAPP (https://democratic.capital/) which requires all users to have verified using Coinpassport in order to make groups, launch tokens, create elections, and custom liquidity pools.\n\nI've also created a pull request for Gitcoin Passport to add a Coinpassport stamp so that users can onboard faster and easier by producing a stamp that would cost a lot to forge. I have not been able to make contact with anyone at Gitcoin about receiving feedback on this integration.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "We launch onchain games on OP chains.\n\nSmall Brain Games quickly iterates on onchain games. These games:\n1. Are focused on simplicity and accessibility\n2. Are open source\n3. Leverage onchain affordances other than ownership enabling speculation\n\nIn the past year, we:\n1. Launched Words3, an onchain crossword game, on OP Mainnet–the first mainnet deploy of MUD smart contracts\n2. Open sourced 2 fully onchain games: Ape's Gambit (battle royale chess) and Network States (an RTS)\n3. Launched an improved Words3 on Base–the first mainnet deploy of MUD v2 smart contracts\n4. Open sourced a starterkit for mobile onchain games, being used by two known projects\n5. Worked with other projects (Gaul, Dark Seas, Underverse) building onchain games to playtest within the Small Brain Games community",
    displayName: "Small Brain Games",
    impactDescription:
      "1. Bringing new users to OP Chains\nWords3 deployments on OP Mainnet and Base both brought hundreds of users to OP Chains. From user interviews, >80% of these users bridged to & made their first transaction on OP chains because of Words3.\n\n2. Giving users net new experiences on OP Chains\nWe give these new users a net-new experience–that of a fully onchain game! There are community clients, players wrote scripts, and player-made dashboards to track what is happening. \n\n3. Making the OP ecosystem the place for onchain games\nOP chains are becoming the place for new onchain experiences. We contribute to that not only by deploying games to OP chains, but by (1) open sourcing all our code, which leads to others building on OP chains, and (2) building a community of games that'll launch on them. ",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "For 2.5 years, Crypto Altruism has championed the transformative potential of Web3, helping guide the next wave of users and builders in the public goods domain into the Web3 ecosystem. Founded and bootstrapped by Drew Simon, Crypto Altruism has grown into a movement impacting thousands, bolstering the transformative potential of Web3 tools to advance public goods. Whether it’s builders looking to create something new on Ethereum or L2s like Optimism, or changemakers interested in utilizing existing public goods tools like Gitcoin, Giveth, or Endaoment, we’ve developed accessible educational content including two popular podcasts totaling 130 episodes, and a blog with 250+ articles. At our core, we equip impact leaders with education so they can leverage blockchain to advance public goods.",
    displayName: "Accessible Education for Web3 Public Goods Changemakers",
    impactDescription:
      "-Crypto Altruism’s podcasts have garnered 10,000+ listens since launch. The podcast has championed public goods projects building on optimism – including Gitcoin, Giveth, Hypercerts, and Endaoment, and broken down complex topics like Quadratic Funding & ZK proofs for prospective builders.\n-The Crypto Altruism website, which houses our blog and podcast, has received over 150,000 visits, with the educational infographics and resources on Quadratic Funding being amongst the most popular for visitors.\n-Recently partnered with Endaoment, who enables on-chain giving on Optimism, on the release of a special 10-part podcast series highlighting nonprofits leveraging blockchain. Each episode has included a short clip from Endaoment introducing their platform, helping to educate potential users. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      'Surreal addresses key pain points for both regular crypto users and the wider retail audience by offering a seamless L2 mobile experience. Our proven track record, with 1k users in just a month and strong engagement metrics, shows our ability to attract and retain users. By introducing in-app minting and free daily mints on Optimism, we\'re poised to not only enhance user engagement but also introduce many to the Optimism ecosystem before they explore Ethereum. Our emphasis on user-friendly crypto tech, collaborations, and a clear "L2-first" approach (we support major OP Stack: Base and Zora chains) uniquely positions Surreal to significantly boost the adoption and expansion of the Optimism platform.',
    displayName: "Surreal",
    impactDescription:
      "Maximizing user numbers on Optimism:\n- With the success of Surreal's App Store launch (1k users in a month, 12k waitlist, $22k Membership pass sales), we have a strong user base ready to engage.\n- Offering daily free mints on Optimism promotes consistent user activity.\n- Native minting in our app improves UX, attracting a wider audience and showcasing Optimism's benefits.\n\nFostering user-centric tech development:\n- Our product bridges the gap for retail users, offering a user-friendly L2 mobile experience.\n- Collaborations with retail brands spotlight Optimism's potential.\n- An Optimism-focused approach can onboard users directly into the Optimism ecosystem, prioritizing its growth.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "We noticed many find Web3 daunting initially due to its complexity and the constant, intriguing developments within. So, we launched a channel offering one-minute videos, unraveling these topics in an engaging, simple manner. Our first four videos have covered Optimism's role in reducing gas fees, the lucrative MEV bot JaredfromSubway, Michael Egorov's near-fall due to a coding bug, and an insight into Liquid Staking Derivatives easing fund access from staking. Posted across Instagram, Twitter, Shorts, and TikTok, our videos have garnered over 15,000 views, sparking discussions and fostering a curious, informed community around Web3. The journey has just begun; our upcoming videos will continue demystifying the geeky, enriching minds, and making crypto a fun, accessible venture for all.",
    displayName: "Polynomial Bytes",
    impactDescription:
      "Our educational videos have simplified Web3's complex facets for a broader audience.\n\nIncreased Awareness:\nThe initial video on Optimism’s scaling enhanced understanding, making Optimism's contributions more accessible.\n\nEnhanced Engagement:\nSharing on popular platforms fostered discussions around Web3 & Optimism’s initiatives, enabling more people to engage.\n\nBroadened Reach:\nWith 15,000+ views, we've extended Optimism Collective's reach to new audiences.\n\nBeneficiaries:\nProjects like Curve, Lido, Rocketpool, Frax, and Coinbase have potentially benefited from increased visibility.\n\nIntangible Impact:\nOur series has nurtured a culture of curiosity, open discussion, and continuous learning within the crypto community.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Optimistic Bunnies is the first NFT on Optimism featuring original artwork. The project has made significant contributions to the Optimism ecosystem through our Learn and Earn quests and Coinbase wallet quest.\n\nOur weekly Learn to Earn quests encouraged participants to learn a different protocol every week in the broader OP ecosystem.  The learning topics included protocols in the defi, NFTs, bridges, wallets, onramp, and tools categories. The program produced around 400 power users of the Optimism ecosystem.\n\nWe were also invited by Coinbase to produce an artwork that was featured as part of the Coinbase wallet quests. This initiative provided a large net positive in helping onboard 25,000 Coinbase Wallet users onto Optimism, creating a positive impact on the entire Optimism system.\n",
    displayName: "Optiland Quests",
    impactDescription:
      "Our activities contribute towards a healthy and engaging sector in the NFT space directly, and indirectly to the Optimism protocols we promote.  Our learn and earn program created around 400 power users who are familiar with various dApps in the OP ecosystem.  We had around 2,600 submissions and 2,100 approved submissions.  15 Optimism projects benefited from the additional exposure from quests.\n\nOur Coinbase wallet quest - Fall of Sybil, had around 25,000 mints since launch.  It onboarded 25,000 Coinbase users to Optimism.  The collection has around 97% unique owners.  Coinbase distributed roughly $122,000 in $OP to the quest participants directly.  The additional users onboarded through the quest provided a net positive to the entire OP ecosystem.\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "1.Bware Labs supported OP Stack by integrating Optimism chain since 23/05/2022 and Base chain since 05/04/2023 into Blast, a decentralized API platform with the services:\n-RPC and WSS APIs for OP(Mainnet,Goerli), Base(Mainnet,Goerli)\n-On the Public APIs we served a total of 5.3B API on Optimism and 1.3B API on Base for free as a public good in the last 6 months;\n-Public API and dedicated free endpoints on Blast for OP and Base users;\n-Total traffic supported: 15000/second per region(EU, US, APAC)\n-Blast's API decentralization allows third-party nodes to join OP and Base chains, earning rewards for their contribution\n- Launched Indexed Builder APIs (Transaction/Token/Logs/Wallet APIs) for OP and Base\n\n2. We developed Optimism Goerli and Base Goerli Testnet Faucets to support OP Stack.",
    displayName: "Bware Labs",
    impactDescription:
      "Bware Labs is a web3 infrastructure company providing a full range of ecosystem services like decentralized RPC/WSS APIs, Validators,Snapshot services, Faucets,Indexing and Bridge operator services. Our core objective is to improve the developer experience within a blockchain ecosystem.\nWe support Optimism and Base networks in Blast API platform so Optimism and Base blockchain developers that are building their dApp on can bypass all the hurdles involved in running their own infrastructure thus reducing both their outage risks and infrastructure costs.\n\nWe also supported development and usage of the OP Stack by providing Optimism Goerli and Base Goerli Faucets so that Optimism and Base blockchain developers have free test tokens for deploying and testing on Optimism Goerli and Base Goerli.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "- Created and deployed a documentation site detailing usage, guides, troubleshooting, etc.\n- Deployed public REST API.\n- Web App Upgrades:\n - Enhanced block, blob txs, and blob views, along with a revamped homepage for richer insights.\n - Improved stats view with interactive time series charts and added new metrics: gas expenditure comparison, blob price, fee, gas usage, etc.\n- Backend Upgrades:\n - Migrate the indexer to Rust and improve its performance, robustness, and reliability.\n - Support for Google Storage and Eth Swarm as blob data storage layers with auto-propagation mechanism.\n- Repository Refinements:\n - Added integration tests and telemetry support for advanced observability.\n - Enhanced CI/CD process, achieved full dockerization, and integrated Sentry for error tracking.",
    displayName: "Blobscan",
    impactDescription:
      "We have contributed to the ongoing effort of the EF's DevOps team EthPandaOps on the EIP-4844 by being the go-to solution for visualizing, examining, and navigating blob shard txs, as well as ensuring blob data persistence and its consistent availability through our web app and REST API.\n\nBlobscan has been integrated as a core tool into the EIP-4844 development stack. It has been notably integrated into ethPandaOps's Helm charts repository for easy Kubernetes deployment. The DevOps team runs their own dedicated instance of our explorer as well. We have extended support for every devnet, and as of now, have supported seven releases.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Since integrating Optimism to Guild - supporting tokens, NFTs, contract queries and OP Attestations - our contributions have expanded by introducing wallet-based actions as requirements and gated NFT distribution on Optimism.\n\nWallet Activity requirements allows communities to create unique membership journeys for developers, high-volume traders and power users based on their onchain actions and interest, while protecting shared spaces from Sybils within the Optimism ecosystem.\n\nWe also have rolled out our native NFT distribution tool on Optimism recently. Guild’s native NFT reward and composable role structure enable builders to have greater control over the allocation and utilization of their assets within the community, while linking immediate value to them.",
    displayName: "Guild.xyz",
    impactDescription:
      "By building a permissionless homepage and toolkit for onchain communities, we continuously prioritize user experience and seamless onboarding for both builders and members.\n\nWith expanding the support for Wallet Activity requirements and NFT rewards on Optimism, communities can run NFT-based campaigns and build future strategies for growth and engagement natively in the ecosystem. Allowing users to perform transactions, increasing network usage and ecosystem growth.\n\nGuild currently has over 400 communities leveraging Optimism integrations, with 430K+ members who hold roles with OP-based requirements. Notable communities include Stargate Finance (242K holders), Linea (122K holders) and Base (58K holders).",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "- Deployed the Pyth smart contract on Optimism mainnet on Sep-09-2022\n\nThis Pyth smart contract enables anyone to request and permissionlessly update prices on-chain for about 350 assets — this enables anyone building a DeFi app to integrate a critical piece of infrastructure in its protocol.\nTo date, the Pyth oracle has supported (that we know of) 10 DeFi applications building on Optimism (Synthetix, Kwenta, Polynomial, Thales, Pika, Lyra, Unidex, Avantis Finance, Pike Protocol). \n\n- Released its OP/USD price feed to Optimism and 35 different blockchains\n\nFor instance, two leading perpetual protocols that use Pyth on Arbitrum: Vela Exchange and HMX, have launched OP markets thanks to the Pyth Price Feed.",
    displayName: "Pyth Network",
    impactDescription:
      "Since deploying on Optimism, the Pyth oracle has become the go-to infrastructure for anyone building DeFi that requires low-latency data — apart from PERP Protocol, all derivatives platform live on Optimism have become #PoweredByPyth ; this amount to close to 99% market share on that segment.\n\nApplications that are #PoweredByPyth on Optimism have initiated close to 500,000 txs on OP mainnet (to update the Pyth price feeds) so that their protocol could properly function. We estimate that about 385 ETH have been spent (either by apps or users’ of said apps) to update the Pyth prices on-chain. As the number of #PoweredByPyth applications increase, and market share of existing applications increases, it is expected to see many more txs initiated to update the Pyth Price Feeds on Optimism.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "* We are Promoting and onboarding to optimism during irl events \n* We are Promoting and onboarding to optimism via X posts & spaces\n* We are using Optimism chain for our 1st Community Member NFT. Promoting during future NFT shill campaigns              ",
    displayName: "Refi Phangan",
    impactDescription:
      "Promoting at in-person events - This would help raise awareness of Optimism among attendees and attract new users, developers, and projects to build on it.\n\nPromoting via social media - Engaging communities on platforms like Twitter and Discord would help spread the word about Optimism to a wider online audience.\n\nUsing Optimism for a community NFT project - Successfully issuing and trading NFTs on Optimism would demonstrate its functionality and capabilities. Promoting future drops could encourage others to also use Optimism for applications.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "- Optimism Glossary\nLaunched an Optimism-specific glossary to make it easier for users to look up terms they’re unfamiliar with (What is a Special Voting Cycle? What are Intents?)\n\n- Curated collection of external and official resources\nLaunched a directory providing an overview of tools and (educational) resources relevant to Optimism, ranging from tutorials, conference talks, podcasts, blog posts to analytics dashboards.\n\n- RetroPGF micro lesson\nBuilt an experimental RetroPGF micro lesson that reduces the time it takes to get an in-depth understanding of the mechanisms and vision behind Retroactive Public Goods Funding",
    displayName: "Optimism Guide",
    impactDescription:
      "- The glossary has made it straightforward to look up terms that someone is unfamiliar with, making it easier to get a basic understanding of concepts and terms that are a prerequisite for meaningful participation in the Collective.\n\n- The directory of Optimism tools and resources has increased the visibility of many great resources that are enormously valuable yet not enough people people know about. By having an open contribution form on the website, we have also fostered a culture of collaboration with individuals and organizations like the USC Blockchain Club submitting links to resources.\n\n- The RetroPGF micro lesson, which takes roughly 7 minutes to finish, was successfully completed 38 times.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Optimism enhances Ethereum, both are rooted in ETH. Hi Optimism 👋.\n\nIn Aug 2021, amidst a need for strong memes and clear comprehension of ETH's evolving economics, Ultra Sound Money, built by two people with no external funding, emerged to fill this void. We share quality ETH info, which educates, excites, and spreads. Screenshots and memes of ours are found all over twitter, every crypto publication, and recently even fidelity's investment thesis. Understanding ETHs strengths is crucial to attract users and projects which feel at home on top. Top meme tweets hit 300K impressions, we have 44.8K followers with 6K 🦇🔊 users spreading the meme. Our site, an educational hub, averages 260K monthly visitors (peak 499K).",
    displayName: "Ultra Sound Money",
    impactDescription:
      "Optimism is part of the Ethereum ecosystem. We grow the Ethereum ecosystem. Where protocol guild builds the protocol, we build channels to highlight and meme the merits of their work, motivating a broader spectrum of builders and users to align with the missions of both Ethereum and Optimism.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "hiho, we are helping people understand the values of Optimism, we are very active creating content, memes, or own threads, publications and communication within the Telegram, Twitter, Instagram, YouTube, Substack, Discord.\nAlso we have presence within the Governance forum with DAOstewards delegation from BanklessDAO and also we discuss the proposal and how we can work. We have a DeWork where we share everything that we are doing to make our Bankless community a more Optimistic one.  \nWe have four different Newsletter: \n1.- GM;NB a little abstract for our content \n2.- Nacion Bankless: Translation, original content, chilling.\n3.- Diario Nacion Bankless: Bankless News, with a full focus on Latam impact\n4.- Guías Bankless: Here we publish our own content and publications abour the protocols. ",
    displayName: "Nacion Bankless",
    impactDescription:
      "I think that our job it's a s simple as our mission: To onboard the next billion people to the ecosystem, actually we are chain agnostic and we see the near future of adopting crypto as a very difficult point, but as the ecosystem grows and Optimism continues giving all the tools and code of conduct for the adoption its easier to us to just communicate. \nHow we make this possible?\n1.- Newsletter that let the people know what's happening in crypto and how we can became smarter and committed with the Optimism collective values. \n2.- Podcast and Videos: We interview the builders, and know how do they feel, we record our community calls that are free to everyone in the internet to learn more than just the theory.\n3.- Real Life events: We are going to fund projects and people with knowledge",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      'We have designed and deployed a novel utility for NFTs called "Proof-Of-Bridging" which brings increased user adoption cross-chain. These IceBreak-R Quest Badges work by incentivizing our free-mint series on four unique layer-2s. This is an evolution of the learn-to-earn model by which users can gain participation rewards simply for bridging, minting and holding NFTs in our ecosystem. \n\nThe primary goal is to encourage exploration of emerging blockchains and networks by new users by simplifying the onboarding process and/or bridging in. By creating free-mints which also reward the users over time we have aligned the incentives for all participants to drive adoption and curiosity.',
    displayName: "IceBreak-R",
    impactDescription:
      "Since launching our new Proof-Of-Bridging NFT series only 8 days ago we have already onboarded 19 unique wallet addresses (excluding myself) to the four various layer-2s, all built around the OP Superstack. New user have begun to explore and dig past the surface layers once they have bridged those funds, asking for new dapps and sites to connect to.\n\nThe main platform we are utilizing currently is Zora.co, whereby the users can continue to connect with other art projects, mint or have fun with NFT collections. Artists, cross-chain DeFi users and NFT collectors are all benefitting from our concepts and smart contracts by learning how to expand into new territory. Communities from Fantom, PulseChain, Hive and more are already coming together within our ecosystem to branch out to OP Stack.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      'In mid-2022, Remix Project built direct support for deployments to Optimism mainnet and testnets within the main Remix IDE feature set. \n\nRemix also built and continues to maintain and promote the Remix Rewards program, which mints non-transferable NFT badges on Optimism mainnet to contributors, beta testers, and UX research participants.\n\nAs part of the workshops Remix also provides at various Ethereum events and online, "Remix Challenges" are given to participants using ZKPs with NFT rewards for successful completion minted on Optimism mainnet.',
    displayName: "Remix Project",
    impactDescription:
      "Adding direct support for Optimism in Remix is an important signal to developers and end users on Optimism's vital role in the future of the Ethereum ecosystem.\n\nSimilarly, the Remix Rewards program is a way to help grow our user base into a larger and more genuine open source community of practice, and allows the future possibility of granting the holders of these non-transferable NFTs with proportional voting power to help the community decide on new features for the IDE and/or other issues governing the development of the Remix toolset.\n\nThe shared governance ethos of the Optimism network lends credibility to these goals of the Remix Rewards program and, we hope, vice versa.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "StreamETH is a OSS, Web3 powered virtual event platform that enables censorship-resistant live streaming and hosts an immutable video content archive onchain.\n\nThroughout the past year, we've amplified and brought onchain 20+ major industry events such as Devcon 6, Devconnect, Zuzalu, and more. By streaming these events, we’ve exposed Ethereum's developments to global audiences, highlighting topics like L2s, Technical Decentralisation, ZK, and DAO Governance, while simultaneously eliminating traditional attendance barriers.\n\nBy bringing workshops and presentations onchain, we've ensured their immutability, free from political censorship, bans, or other restrictions.\n\nIn addition, we crafted four interviews about RetroPGF2’s impact to boost engagement and registrations for RetroPGF3.\n\n",
    displayName: "StreamETH",
    impactDescription:
      "Over the past year, we supported over 20 different communities from four different continents in decentralising their content distribution and created permanent archives on-chain for 11 of them.\n\nWe distributed on-chain over 1.5k workshops, talks and panels and archived over 500 of them. From keynotes to workshops we archived the best minds in the space discussing topics that range from entry-level difficulty to blockchain specialist.\n\nOur livestreams and archives have been watched over 25k times and will forever be available to the Ethereum community, permissionless.\n\nThe RetroPGF interviews counted 148.4k views, 91 comments, 41 bookmarks on Twitter. \n\nThe opensourced StreamETH platform has been fully self funded by reinvesting the revenue generated through the AV services we offer.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "Since launch, Clipper has aligned itself with Optimism users’ best interests by delivering the best trading prices on major assets and the best LP returns. It is a shining star of sustainable DeFi on Optimism.\n\nClipper’s pricing beats 0x API >90% of the time on at least one leg (see price study). It uses 15% less gas than Uniswap and has a customized Optimism-native deployment that further reduces gas use by optimizing call data sent to Ethereum. For LPs, Clipper has delivered above market returns compared to both HODLing and a perfectly rebalancing pool of assets. Unlike most DEXs, it has no impermanent loss and only executes trades that are profitable for LPs. \n\nClipper has also run a series of community campaigns called Adventures, which drove thousands of new active users to Optimism.",
    displayName: "Clipper",
    impactDescription:
      "Clipper has saved traders tons of money on slippage, gas, and fees with its fair prices, and generated significant above market yields for LPs during the time it’s been on Optimism (33.3% APY in just the past month). \n\nClipper initially launched on Ethereum in 2021 and later went live on Optimism in early 2022. During the time between first launch and coming to Optimism, Clipper built a loyal userbase which it brought to Optimism through its community Adventures. Over 60k users participated in Clipper’s past two Adventures, which included activities that required trading and LPing on Optimism. \n\nAs of Oct 1, there are over 125k traders and over 82k LPs on Clipper’s Optimism deployment. Clipper has also brought over $104.6M in total *human* volume and >490k *human* transactions to Optimism.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "We used Account Abstraction to solve the largest issue that new AI developers face today: getting paid for their work while preventing spam. They are overwhelmed by bots after releasing a new product and can't charge a monthly fee that users are not willing to pay.\n\nCrypto micropayments have not historically been possible due to high mainnet gas costs and slow, cumbersome transaction UX. However, we use embedded wallets and ERC4337 to allow new users to sign up via SMS, fund their account, and directly pay developers every time they use the app. No seed phrases, no transaction confirmation, no gas.\n\nOn an L2 like Optimism or Base, users can try out new AI apps for cents on the dollar and developers can bootstrap a user base without going broke.",
    displayName: "BunnyAI",
    impactDescription:
      "We premiered this project during the EthGlobal NYC hackathon and were overwhelmed with support from those that we demo'ed and spoke to. Many of the people we talked to told us that they were surprised to learn that such a “web2” like UX was already possible to achieve! Apps that bridge the knowledge gap between web2 and web3 are necessary for mass adoption — we just wanted to create a really fun LLM app while using crypto as the infrastructure, and we succeeded in doing so.\n\nWe also wanted to share just how great our developing experience was with other builders so we did a quick demo at the first Base Builders community session. We hope that other developers were inspired by our work!",
    pwCategory: "User Experience & Adoption",
  },
  {
    contributionDescription:
      "Titanoboa makes it possible to run comprehensive and granular tests on a smart contract suite. Besides coverage reports, print statements, a fork mode, time travel, EVM state patching, Titanoboa offers advanced testing features such automated fuzzing strategies and custom precompiles. Opcode patching also enables testing new EVM opcodes to test contracts on different versions of the EVM, such as Mainnet vs Optimism.\n\nTitanoboa's highly optimized backend can reduce the time it takes to run a test suite from several hours to under a minute. Boa does so by replacing slow external RPC calls with an embedded EVM running contracts directly as Python.\n\nIntegration with Jupyter means that one can spin up a notebook on Google Collab and start collaborating and prototyping their smart contract idea.",
    displayName: "Titanoboa",
    impactDescription:
      "OP Stack:\n- Titanoboa's embedded EVM, granular gas profiler and advanced testing features enhance contract security and efficiency within the OP Stack, as well as validating differences between optimism and mainnet EVMs.\n\nDeveloper Ecosystem:\n\n- Features such as integration with Jupyter notebooks, live blockchain interactions, and pure Python execution are pivotal for fast and efficient contract deployments.\n- Titanoboa's testing features are essential for smart-contract developers working on multiple networks such as Optimism and Mainnet.\n- Titanoboa allows Vyper developers to quickly prototype as well as thoroughly test their smart contracts.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Our contribution to Optimism involves the development of an educational project known as Revolte, which serves as a platform for individuals to gain knowledge about web3 technology. \nThis interactive adventure game commences with the setup of your initial digital wallet, guiding users through the process if they don't already possess one. To progress further in the game, participants are required to undertake essential actions, such as executing transactions on the Optimism network. It's important to note that, at present, Optimism is the exclusive network available for engagement within our game.",
    displayName: "Revolte",
    impactDescription:
      "Revolte, was introduced in March 2023, and within a short span until the end of September 2023, it has already facilitated the creation of more than 1600 new Web3 wallets. These wallets were instrumental in introducing users to the broader Web3 ecosystem, marking a significant milestone in our journey.\n\nHowever, it's important to emphasize that this is just the beginning of our impact. Our next endeavor is the launch of the upcoming chapter, which is dedicated to delving into the existing protocols on the mainnet. We aim to seamlessly integrate every interaction with these protocols into our narrative, ensuring that the experience remains captivating and engaging for our users.",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "Spearbit is dedicated to providing the absolute highest quality of security services to the Optimism ecosystem. \n\nWe’ve worked directly with the OP team to review crucial components such as: \n\n• Drippie (OP's native trust-minimized conditional transaction system)\n• Optimism's RLP implementation\n• The Bedrock upgrade\n\nSpearbit has also provided security reviews for major protocols on OP such as:\n\n• BASE\n• Velodrome\n\nSpearbit has also performed a pro-bono security review of one of OP's most utilized libraries, Solady, which aims to provide gas-optimized Solidity utilities.\n\nIn line with our commitment to public goods like Solady, we promise to allocate all RetroPGF grants to future public goods security reviews in the OP ecosystem with the absolute best web3 security talent there is.\n\n🔴✨",
    displayName: "Spearbit",
    impactDescription:
      "Through performing multiple high-priority security reviews for comprehensive bug coverage on core projects being built on Optimism as well as directly evaluating the security posture of the Optimism protocol itself, Spearbit has aided in securing 840M TVL at the time of reviews.\n\nSpearbit and its security researchers have reviewed over 10,000+ lines of complex and mission-critical code across the Optimism ecosystem. As a result, Spearbit and its security researchers have identified:\n\n• 1 Critical\n• 9 Highs\n• 32 Mediums\n\nThere have been 0 exploits from Spearbit security reviews on reviewed portions of the Optimism protocol and relevant projects building on Optimism since the completion of Spearbit security assessments. ",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "DAC for OP Stack (similar to Arbitrum's Anytrust)\nDA client able to:\n1 Post a batch. This method returns what we call a batch reference. A batch reference contains enough information to retrieve the original payload. It's also serializable to an L1 transaction.\n- In the basic rollup mode this is a no-op. The reference is the payload itself.\n- In the DAC mode it will upload the payload to the DAC and return all the information required 2- to verify signatures and fetch the payload later.\n2 Retrieve a batch. From a serialized batch reference, it returns the associated payload.\n- In the basic rollup mode it means returning the reference itself, because the reference is the payload.\n- In the DAC mode, it means deserialize the batch reference and query the DAC to get the payload back.",
    displayName: "DAC on OP Stack",
    impactDescription:
      "Improve the OP Stack by giving it access to a flexible DAC. Our contribution largely overclock Optimism Bedrock: in our benchmark, the DAC allow to spend 115 Bn Gas on an OPL2 for ~$300. It opens the OP design space to many usecases, notably on key choices like:\nWhere is the history of what happened on the L2 stored? Several cost saving solutions (Swarm?) alternative to the Mainnet.\nHow available is this data? Can I get a sample? Yes, forever (potentially and always).\nHow does the cost of storing this data impact the costs of the L2? It’s minimal.\nWhat happens if the whole L2 goes offline but the DAC stays on? It’s as good as Optimism.",
    pwCategory: "Security & Cross-Chain Solutions",
  },
  {
    contributionDescription:
      "MyFirstLayer2 serves as an educational platform geared towards novices eager to explore and engage with Layer2 technologies. \n\nAs suggested by our name, we cater to beginners who are keen on acquiring knowledge and delving into projects associated with Layer2, like optimistic rollup. And beginners also can mint a NFT in Optimism network after completed the tutorial.\n\nOur approach involves the use of humorous and easily comprehensible diagrams and animations to elucidate Layer2 concepts in a fun and engaging manner.",
    displayName: "MyFirstLayer2",
    impactDescription:
      "Education:\nOur Layer 2 project includes a chapter on Optimistic Rollup, enhancing comprehension of Optimism technologies among developers and blockchain enthusiasts, thereby fostering a technically informed community within the Optimism Collective.\n\nCommunity Growth:\nOur accessible educational content fosters an informed and engaged community, enriching the Optimism Collective ecosystem.\n\nTechnology Adoption:\nThrough education, we inspire more developers and organizations to adopt Optimism solutions, expanding its reach and application.\n\nCertification:\nPost-course, participants receive NFT “graduation certificates” minted on the Optimism Goerli Testnet, showcasing Optimism's practical application and adding value to their learning experience.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "The project is divided into: the IMN team which stewards the projects and does fundraising, and the nodes which produce content and onboard people into web3 in their local language.\nCoordination\nWe have been practising social coordination at scale since 2021. For the bDAO Optimism Global Campaign, we coordinate nodes from 11 languages to promote the creation and shipping of content, as well as reporting and accounting for them.\nAdditionally we coordinated with Bankless Academy to ship translation of their OP lesson in 5 languages.\nContent Creation\nNodes are independent entities stewarded by local teams and have submitted their own applications. However Chinese and Tamil nodes were unable to submit their own applications due various reasons so we would like to report stats on their behalf.",
    displayName: "International Media Nodes (IMN)",
    impactDescription:
      "From coordination side:\nThe Optimism collective was able to market its vision and values to a global community which generated 29,640 views in 11 languages, through 191 pieces of translated content including Newsletter, twitter threads and youtube videos. (detailed stats: https://www.notion.so/adfe3690f22f45099250abe727dd6fee?v=bff82ebe46a2441d8d419a455a943a9d)\n\nWe also helped translate the Bankless Academy lesson on Optimism into 5 languages.\n\nFrom content creation side (reported in impact metrics below)\nChinese node - 3,830 views form 17 pieces of translated content.\nTamil node - 1,399 views from 22 pieces of translated content.\n\nOverall our effort was able to help raise awareness of the OP stack, help adoption of the chain and assist in the improvement of collective governance.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Increased Optimism awareness, adoption and participation among pidgin speakers across Africa and beyond. \n\nWe created series of content that explained Layer 2 and Optimism  in a clear and simple way that pidgin speakers can understand across Africa/beyond. We also provide practical examples and use cases that shows how Optimism and the Layer 2  can solve real problems or create value for Africans. All these were done with the use of Pidgin language, which is widely spoken and understood by millions of Africans across different countries. ",
    displayName: "Pidgin Parlour",
    impactDescription:
      "Pidgin Parlour helped lots of pidgin speakers in Africa to understand Optimism easily using Pidgin language. We used podcasts, blogs, and newsletters to explain complex things around Optimism. We showed how Optimism could solve real problems for Africans with simple examples. We translated important optimism content to Pidgin so more people could understand.\n\nWe also educated and inspired Pidgin speakers to use Optimism and its tech. We talked about how to use OP tokens, join communities, and more. Our goal was to include everyone and make sure Pidgin speakers felt confident using Optimism and participating in the collective. \n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Banklessadria, as an International Media Nodes project member, is active since October 2021, creating and translating content that is inline with BanklessDAO values.\n\nOur vision is to educate crypto enthusiasts in Serbia, Croatia, Bosnia and Herzegovina and Montenegro, and mission is to onboard as many crypto users as possible.\n\nWe have been creating and translating content regarding the Optimism ecosystem, since 2022, and sharing it with our audience. During this period, we created at least 4 articles, translated 17 articles, that are published on our Substack, and as well posted 24 tweets on our X profile.   \n",
    displayName: "Banklessadria",
    impactDescription:
      "Banklessadria were able to help propagate the Optimistic Vision and Mission to a community of Serbian/Croatian speakers via our Substack page and X profile.\n\nDuring last two years, Banklessadria published 264 articles, all related to crypto and web3 ecosystem, primarily concentrated on Ethereum blockchain and Rollup solutions. First Optimism article is published in May 2022, covering airdrop announcement and NFT projects on Optimism at the time. Covering Optimism, we published first article regarding OP stack solution Base L2, in March 2023.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "In the last two years we organized 6 events (only counting the big ones: one week, 50 people) around the intersection of blockchain and public goods: three CCG, 2 ReFi events, a CoFi gathering. You can read about them on our website. \n\nIndirectly, these events supported Optimism as we organized big experts-events on PGF and we engaged in different ways with all the major projects in the niche (gitcoin, giveth..)\n\nIn a direct way, in the last CCG (2 months ago) we had a session on Optimism onboarding that we recorded specifically for this application process, but the recording got lost. We have the recording of the whole PFG themed morning at the event though, here: https://www.youtube.com/watch?v=ghcZ9pguMpQ&t=3778s Optimism was present in many discussion in and outside of the panels.",
    displayName: "Crypto Commons Association",
    impactDescription:
      "-Having contributed significantly to discussions about blockchain and PGF: when we started in 2021, the topic was much less invested of attention, and the experts/projects in our network have influenced the development of the collective knowlegde on PGF/RPF.\n\n-In the last period and in the last event OC has been object of theoretical and practical debate in our community, during the event itself it was an hot topic (as this round of applications was coming) and we had an optimism onboarding session specifically.\n\nAs a non profit we consider that despite the lack of on-chain proofs of our impact on OC, our qualitative contribution to the whole space is significant enough to ask for a small grant (even 1000/2000 USD in OP value) in this RPF round and it would be a good support.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Web3 newcomers often face challenges finding the right tools, prompting questions like \"Which wallet is best?\" or \"How do I bridge funds on Optimism?\". We built Web3xplorer in response—a free web3 directory cataloging 900+ apps on Ethereum, Optimism, Base, and other layer 2s. For each app, we've highlighted 3 to 5 of its most prominent features, along with a detailed overview, FAQs, social handles & links.\n\nOur directory, segmented into 50+ categories, offers a built-in search engine, advanced filters, and sorting. It's extremely fast and user-friendly. We also have a blog that demystifies Optimism with ten in-depth and long-form articles.\n\nWe've poured significant time and effort into Web3xplorer. Since its launch in June 2023, it's been actively serving the community and growing fast.\n",
    displayName: "Web3xplorer",
    impactDescription:
      "We started Web3xplorer in October 2022 and launched in June 2023. Since then, user engagement has surged, with more than 1,350 visitors spending collectively 68 hours on our site just last month.\n\nOur influence extends beyond just our platform. We've been featured in newsletters like TheRunDownAI, Bytebrief, and community projects like the Optimistic Reservoir. Platforms including AlternativeTo, SideProjectors, SaasHub, and especially ProductHunt, where we hit '#6 product of the day' with 265+ upvotes, amplified our visibility. This has enabled us to effectively engage with audiences beyond the core web3 community.\n\nThe positive feedback we continue to receive from our users speaks volumes about the value we offer, all while keeping the service completely free.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Donate3 is a multi-chain, multi-currency donation tool that can be easily integrated into any web3 platform through simple configuration in the form of floating components, embedded components, or hyperlinks. It creates EAS donation certificates for donors while providing convenient data retrieval services to promote the rapid development of public goods, charity, creator economy, and internet celebrity economy. ",
    displayName: "Donate3",
    impactDescription:
      "As a donation tool, Donate3 can save developers time and improve donor experience. In the past 1 years, users have created 6 transactions through Donate3, generating approximately 0.058 ETH in OP network and 11181 downloads in npm. In the future, Donate3 hopes to introduce more liquidity to the optimism network, enhance the integration of the OP network with charitable causes, and promote the development of public goods on the OP chain.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "We created content to spread the Optimistic throughout Japan. \n\nBlog:\nOur team has translated the following articles and published on mirror:\nRetro PGF3 Application\nOP Airdrop \nLaw of Chains\nRetroPGF3\nSuperchain\nOP Stack. \n\nYouTube: \nOptimism in the Layer2 landscape\nOptimism ecosystem\nSuperchain\n\nWe have spent over 2 years working to educate our community growing our audience to 82k on Twitter, 20K on Telegram, 8.8K Youtube, 26k on Discord making us one of the biggest communities dedicated to educational content around blockchain. Our twitter impressions have reached over 2.9M in the last 90 days.\n\nWe'd like to thank Carlos Melgar for introducing us to the Optimism ecosystem and guide us through our Optimism journey.",
    displayName: "KudasaiJP",
    impactDescription:
      "Our contributions have helped increase awareness about Optimism in Japan and resulted in more adoption within our community.\nMetrics:\nTwitter: 83k views on twitter, 452 likes\nYouTube: 3.5K views on YouTube\nMirror: 709 collects on Mirror\n\nOne example of such adoption is the results from our participation in the Gitcoin GG18 (deployed on Optimism) round where we ended as a top grantee in community and education despite being the only Japanese language community. This shows how active our community has become in the Optimism ecosystem",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Although only the first phase of BlueNorva has been released, we have successfully attracted a considerable number of players who have minted our NFTs and traded the project token. This has increased the volume of trades on the Optimism network, consequently generating more fees.\n\nOur project has also attracted players who wish to participate in our game to the Optimism network, as we are exclusively native to this platform. This has served as a means of introducing the network to those who have never used it before.",
    displayName: "Blue Norva",
    impactDescription:
      "As a GameFi project utilizing NFTs, we have successfully devised an engaging approach to introduce more individuals to the world of NFTs and staking. We have generated value in the area of entertainment, allowing players to earn while they unwind.\n\nAdditionally, we have introduced a considerable number of first-time NFT minters to the NFT space within the Optimism ecosystem, effectively introducing new users to Optimism and its innovations. These efforts have resulted in increased fees and trade volume for the network.",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "BMX by Morphex is a derivative trading platform that uniquely improves capital efficiency by allowing liquidity providers access to their underlying market-making liquidity (BLT). This is achieved through our auto-compounding wrapper (wBLT), which is transferable. Our native protocol liquidity is wBLT-BMX, demonstrating that wBLT can be paired with any asset and continue to earn wBLT rewards. wBLT can also be collateralized. LPing is inherently complex, to support user education, we intentionally named our liquidity after a sandwich, for the meme and for the concept of multiple ingredients (assets) combined to form one sandwich (token). In our documentation, we dive deep into user education, benefits/risks, and concept modeling as we believe onboarding users from CEX to DEX depends on it!",
    displayName: "BMX by Morphex",
    impactDescription:
      "BMX by Morphex launched on BASE in September, 2023. Since then, we have onboarded 550+ users, almost $500k liquidity in BLT, and $330k+ in wBLT. Trading volume has surpassed $4.7mm+ with over $8k+ in revenue. wBLT-(OtherAsset) liquidity pools have surpassed $530k+ TVL. Liquidity providers of protocols like Yearn Finance and Ethos Reserve have deployed wBLT-YFI and wBLT-stERN liquidity pools on Velocimeter. Instead of pairing wETH-YFI or USDC-stERN, wBLT allows bluechip capital to be put to work and earn additional revenue for the LP/protocol in addition to pool2 rewards. wBLT as a paired asset composed of multiple bluechips and stablecoins may also reduce single-asset price volatility risk. The features of BMX by Morphex and use-cases of wBLT introduce unique reasons to bridge to BASE.",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "Our first contribution to Optimism was almost 3 years ago in December 2020 when we included the Testnet Verifier and Fraud Prover in our DAppStore for all Dappnode users to help with the early testing of the initial Optimism testnets on Kovan.\nIn its history Dappnode has built bridges between average users and projects that seek decentralization in its development by making running nodes accessible. Supporting Ethereum from early years to PoS migration, optimistic rollups are no stranger to the values that have helped the Ethereum ecosystem, and Dappnode has recently added Optimism to its Rollups menu, a dashboard that lets you easily run a node. We have been present as a tool that pushes decentralization for Optimism as its evolution keeps moving forward and we intend to keep doing so.",
    displayName: "Dappnode",
    impactDescription:
      "Running an Optimism Node -deploying the OP Stack- is now as easy as a couple of clicks. The UX of node-running has improved massively, and developers can deploy their own endpoints to avoid rate-limits and query as much as they need. The decentralization potential - the total number of people that can run a node - has expanded to the entire Dappnode user base and all OP users can use Dappnode to have their own, uncensorable, access to the network.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Summary of outputs:\n9 Seminar Recordings\n2 Articles\n1 Python Package\n1 bonding curve deployment on Inverter Network\n\nPlease see document for full description: https://docs.google.com/document/d/15mj_GwPOXO9E0qkhnNEIo4brioluu0bXWnuOo2i9frw/edit?usp=sharing",
    displayName: "Bonding Curve Research Group",
    impactDescription:
      "BCRG R&D enables researchers and developers in the Optimism ecosystem to understand and experiment with bonding curve mechanisms, which are fundamental to various DeFi applications, including Automated Market Makers (AMMs) and token issuance platforms. Our educational library has contributed to making knowledge about bonding curves more accessible, helping both newcomers and experts to enhance their understanding. By providing a hub for educational material, our library fosters learning, research, and innovation in this realm and is key for current and future builds on Optimism. Our collaboration efforts are instrumental in driving forward research and applications of BCs, contributing to the broader Optimism ecosystem's growth and development.",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "Arbiter is a public good security and analysis tool for the EVM ecosystem. The tool kit is free and open source and able to audit mechanism design which has historically been challenging. The tool is also able to model risk across many stochastic processes and historical data. The EVM logic simulator has been used to find critical vulnerabilities in the Portfolio smart contract system that auditors were previously unable to identify. Because of the tools speed and EVM execution parity, it allows for unparalleled quality and quantity of testing data for any smart contract system or application. As optimism maintains support for the EVM execution environment and is an extensive smart contract system, tooling across to ecosystem to help improve safety and security is paramount. ",
    displayName: "Arbiter",
    impactDescription:
      "Through the development of Arbiter, we have grown the developer ecosystem from the ground up. We have helped engineers to understand the security implications and nuances to building modular smart contract systems and how to identify undesirable anomaly behavior. Now the tool is being used by auditing firms, protocol designers, academics and searchers to model their systems and applications with speed, rigor, and EVM execution parity. Overall these contributions help ensure the security and safety of complex systems like the OP Stack while also growing the size and quality of the developer ecosystem which in turn improves the end user experience and adoption by improving the safety and security of end user applications.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Recently we announced our release of limo-web3-dns which is an experimental domain specific implementation of the DNS protocol for direct resolution of ENS records over DNS.\nLimo-web3-dns allows ENS domain holders to be able to manage traditional services such as web hosting and self hosted software with minimal friction. The ultimate goal of limo-web3-dns is to provide trustless auditable cryptographically signed ENS over DNS to bring ENS to parity with DNS. Limo-web3-dns is also  CCIP-Read/EIP-3668 enabled allowing users to store content on Optimism/Base or any L2.  \n\nWe also operate eth.limo as a public good which is a CCIP-Read enabled gateway. Large projects such as Kwenta and Synthetix are utilizing the gateway to provide front-end access to their end users. ",
    displayName: "eth.limo",
    impactDescription:
      "Ethereum Mainnet transactions are too expensive for the average user, by utilizing CCIP-Read eth.limo allows users and dApp developers to host static sites in a cost effective manner. This in return opens up the ability for the average person to create blogs/dApps and more without paying absurd gas fees or associated hosting costs. Vitalik has discussed the importance of CCIP-Read for end-user adoption. ",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "Crowdmuse is onboarding creators, brands and suppliers to web3 with a multi-sided marketplace to scale the creator economy. \n\nWith each fashion collectible drop, we’ve helped creators and suppliers create their wallets for the first time, add their creative assets or manufacturing capacity onchain, and monetize their creative IP and services through web3 rails. \n\nOur first drop showcased the MF70 Anti-Surveillance Suit co-created by Metafactory, WeseeClearly, Hugh Clarke, and [a]industri. Since then, we’ve curated 2 drops for FWB, a zero-waste tee for FWB fest and an all purpose 0xTote bag. \n\nThis week, we launched a special drop with Optimism for 100 “Stay Optimistic” sweatshirts, made with care by Rapanui, curated for Optimism’s Onchain Summit: Superchain Edition. ",
    displayName: "Crowdmuse",
    impactDescription:
      "Through building a crypto consumer use case that regular people can enjoy, we are incentivizing user adoption, especially as creators see new revenue opportunities through business models onchain. \n\nAs part of the “Stay Optimistic” drop campaign, we want to show the power of Optimism as a consumer brand, enabling new consumer touch points beyond existing web3 audiences.\n\nThis is our first drop on the OP network, bringing 100 collectors of consumer goods into the OP and Crowdmuse ecosystems. This drop was a collaboration with Rapanui, a sustainable manufacturing brand in the UK, a brilliant 3D designer CU3D, and the Crowdmuse curation team.\n\nWe believe the most important aspect of end user adoption on Optimism will be consumer experiences targeting new communities outside of web3. ",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "TypeChain and DethCode are widely recognized tools in the developer community.\n\nFor several years, TypeChain has facilitated the writing of type-safe Ethereum code. It not only supports any OP-based networks, but it was also utilized in the prebedrock optimism-contracts repository itself. Despite its widespread use, TypeChain has recently been deprecated in favor of newer alternatives. This makes it perfect candidate for RPGF.\n\nDethCode offers the ability to browse smart contracts within ephemeral instances of VS Code. It supports both OP and Base networks. The innovative concept behind DC impressed Etherscan so much that they integrated similar functionality directly into their product. Nevertheless, DethCode continues to operate as a public utility, contributing to the broader ecosystem.",
    displayName: "TypeChain / DethCode",
    impactDescription:
      "TypeChain allowed hundreds (if not thousands) app-layer developers to build better software. Furthermore, it helped create original Optimism contracts itself. Have a look at GitHub dependencies and download stats.\n\nDethCode has significantly simplified the reading and exploration of smart contracts for numerous researchers and developers. Companies like L2BEAT use it on a daily basis to understand what's really what on-chain.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Problem - There are very few consumer dApps that are fun to use and not about speculation. BasePaint was conceived as an art project that could only be built on web3, where artists could collaborate onchain and share in the profits generated by their collective work.\n\nCreation - Every day since our launch (08.09.2023) artists come together on BasePaint to paint a shared canvas for 24 hours. Once the 24 hours passes, the artwork is minted as an open edition NFT, and the profits are distributed amongst all contributors.\n\nImpact - Over 2,203 artists, many using Base for the first time, have contributed to over 64 CC0 canvases, generating $230k in profits distributed frictionlessly between all contributors.\n",
    displayName: "BasePaint",
    impactDescription:
      "Since launching, BasePaint has:\n1. Generated 150Eth in profits for artists on OP stack\n2. Created 64+ unique CC0 pixel canvases, minted 63,000 times from 14,000 unique minters.\n3. Had 2,203 unique contributing artists total, with over 650 artists contribute daily in every timezone (https://twitter.com/basepaint_xyz/status/1695460763669074004)\n4. Launched collaborations with Pixelmon, Lens, & PartyDAO.\n5. Launched the first pixel-verse concert series with SongaDayMann (https://songaday.world/auction/5388)\n6. Launched Community Theme Selection, with 27 collaborative themes selected by  collectors (https://x.com/basepaint_xyz/status/1705008848267010431?s=20)\n7. Community members had one of the canvas time lapses shown in Time Square (https://x.com/gtmcknight/status/1697991118166671469?s=20)",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "I built a robust platform on the Optimism stack blockchain, leveraging its efficiency and scalability. My project, is successfully deployed and operational. I designed and implemented key features, ensuring seamless integration with the underlying optimism blockchain. Contributions encompass smart contract development, optimizing transaction throughput, and enhancing overall system performance. The platform harnesses the unique advantages of Optimism, such as reduced transaction costs and faster confirmation times. My goal is to receive RetroPGF for contributions in scalability, reliability, and efficient utilization for the future of OnchainPostcard.",
    displayName: "Onchain Postcard",
    impactDescription:
      "I've illustrated the tangible impact of Optimism technology through OnchainPostcard. This platform serves as a real-world application, showcasing the scalability and efficiency of the Optimism blockchain. Users in the Optimism Collective now enjoy a seamless, high-performance application, benefiting from reduced transaction costs and accelerated confirmation times. Particularly noteworthy is the positive reception, as people appreciate the platform's ease in crafting and minting postcards on the Optimism stack, fostering a community that spreads love through creative expression. This actively encourages innovation and adoption within the Optimism Collective.",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "1 NFT Market contracts. These allow for any ERC20 to be exchanged for any ERC721.  We addressed UI / UX issues voiced by Optimism users, particularly for veNFTs. The fee (1%) is the lowest among all NFT Markets on Optimism. \n2. opxVELO - the only liquid staking project for VELO, offering users and projects access to veVELO without the time commitment of locking and managing a vote-escrowed position.\n3. Auto-compounding vaults, featuring the lowest fees (7%) on Optimism.\n4. Our UI / UX. UI hosting is possible only with project revenue.\n5. I would like to nominate Alex, our only developer, for RPGF. He brought two years of web3 experience to Optimism without incentive. He has never received outside funding of any kind. He often competes with projects with sizable backing and incentives. ",
    displayName: "The Open X Project",
    impactDescription:
      "NFT Market: By allowing listings in stables, sellers can fix a stable floor price; allowing listings in the underlying token, e.g., listings of veVELO for VELO, creates a zero-slippage offer. >750k USD in value has been transacted using these contracts. >10k USD in fees have been cumulatively saved by users who choose our NFT Market over others. Since launch, its volume is several times that of all other NFT Markets on Optimism combined.\n\n800+ users (and four protocols) have utilized opxVELO for liquid exposure to veVELO.  ",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "Wallet Guard is a suite of security tools that are like having an anti-virus for your crypto wallet of choice.\n\nWe offer a suite of consumer tools for improving end-user UI, UX, and security:\n1. Browser extension\n2. MetaMask Snap\n3. Security Dashboard\n\nWe support Optimism and other EVM chains for transaction simulations to create safer transactions for our Browser extension and MetaMask Snap users alike. We added Optimism support last week and have already simulated 12,000+ transactions for our users.",
    displayName: "Wallet Guard",
    impactDescription:
      "We just added support for Optimism transaction simulation for our 30,000+ users of the Wallet Guard browser extension and already simulated 12,000+ transactions. This enables human-readable insights and scam protection for all transactions our users do on Optimism. To date we've protected $40m+ in assets from being stolen from phishing scams for Optimism and EVM users alike.\n\nOur security engine has also protected our users from 50+ fake Optimism websites in the last month and a half alone. See the attached Notion document for more information. These are confirmed websites that have malicious intent such as draining a users' wallet.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "I am spreading the word about the Optimism project and spreading knowledge in the CIS regions, as I spread Optimism news and created tweets and topics about the project which helped bring many people and followers to become part of the Optimism ecosystem.\nAlso, I translated many tweets from English to Russian (I am not part of the translation team and will not receive any rewards from it because I did not post the links on Discord)",
    displayName: "OptimismCIS",
    impactDescription:
      "The followers and viewers of the OptimismCIS Twitter account have gained extensive experience and knowledge about the Optimism project and also about projects built on Optimism.\nIt has now become easier for CIS citizens to begin their journey in the Optimism Project",
    pwCategory: "International & Multilingual Support",
  },
  {
    contributionDescription:
      "Tally made several impactful contributions to the Optimism Collective over the past year, including developing a delegate portal, producing an in-depth technical research report on Superchain governance, and facilitating Delegation Week (an ecosystem-wide event focused on governance participation). Tally also built an L2 governance voting protocol on Optimism called Rollcall in early 2022.",
    displayName: "Tally",
    impactDescription:
      "Tally's contributions have made Optimism Collective governance accessible and future-proof. \n\nAccessible:\n- Tally's Optimism delegate portal makes it easy to discover and track the performance of Token House delegates. \n- Delegation Week re-engaged OP token holders with Optimism Collective governance and elevated the voices of Token House delegates. \n\nFuture-proof:\n- Tally's Superchain Governance Deep Dive Mission produced the most complete and up-to-date analysis of the state of crosschain governance. We deeply investigated and produced documentation around all of the viable paths for expanding Token House governance across the Superchain and ultimately recommended a zk-SNARK based approach that scales to thousands of chains and millions of users.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "2022, ETHBarcelona hosted Europe's largest Ethereum event, with a Solarpunk theme and an unwavering focus on impact, we welcomed over 2200 attendees and featured an impressive roster of 100+ speakers. More than $30,000 was donated from ticket sales, enabling us to fund impactful projects using QV. This event contributed largely to the Optimism ecosystem as it set the stage for its narrative.\n\n2023, we continued our commitment to community, impact and sustainability with a solarpunk and lunarpunk theme. Over 1200 participants joined us, along with 200 in our hackathon, leading to 46 innovative projects. All the participants received tickets issued as NFTs on Optimism, promoting user engagement + adoption.\n\nOur journey to promote Ethereum's growth and Optimism's adoption remains unwavering.",
    displayName: "ETHBarcelona",
    impactDescription:
      "In 2022, ETHBarcelona pioneered an optimistic future with our Solarpunk-themed event, inspiring a positive narrative. We united the community, enabling attendees to actively participate and donate over $30,000 to various projects.\n\nIn 2023, our impact on the Optimism Collective surged. We distributed all event tickets as NFTs on Optimism, engaging over 1200 participants. Notably, 742 individuals actively interacted with Optimism, reflecting our commitment to user adoption. By airdropping NFT tickets and ETH on Optimism, we encouraged everyone to install Optimism RPCs, fostering widespread blockchain engagement. Our collaboration with the RetroPGF team, backed by General Magic and Giveth, elevated the event, with activations and insightful panel discussions.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Hypercerts are the web3 standard for account for impactful work, tracking financial and non-financial contributions. \n- They can be integrated into any existing platform to build a single distributed database for impact certificates\n- They encourage multiple evaluations to create a dynamic open evaluation system \n- They allow for sustainable financing by selling impact to move beyond donation\n\nWork to be funded retroactively\n1. Built and released the hypercerts protocol on Optimism as our main deployment\n2. Built SDK for other projects to build on top of our protocol\n3. Created frontend for the protocol available at hypercerts.org for anyone to create hypercerts\n4. Created and ran first pilots with Gitcoin Rounds and Zuzalu to distribute hypercerts for financial contributions to projects",
    displayName: "Hypercerts Foundation",
    impactDescription:
      "USAGE: Almost 40,000 hypercerts have been minted on Optimism through our protocol from over 20,000 unique addresses with more than 30,000 unique owners. More than 2,000 hypercerts are created weekly. We drive adoption of Optimism. \n\nONBOARDING: For many users – either creators or receivers of hypercerts – these are their first transactions on Optimism. We have supported numerous users in our pilots to get OP and walked them through their first transactions.\n\nUSE CASE: We created a use case for Optimism strengthening the narrative for web3: You need to be in control of accounting for your contributions and the sale of impact – without a centralized platform.\n\nPROJECTS: Projects account for contributions, raise funds and reward their supporters, e.g. Zuzalu received over 20 ETH.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Since Optimism launched I've onboarded a lot of people to Optimism, but didn't ever think about officially onboarding people and supporting Optimism and getting RetroPGF funds for it.\n\nMy efforts to onboard people started in 2021 via a small project called Mafia Creativa - a creative outreach and collective based on:\n-free education and onboarding into web3\n-leveraging creativity for the common good\n\nWe hosted numerous calls, twitter spaces and virtual events for crypto curious romanians. Back them public goods in web3 were synonimous with Gitcoin and Optimism so most of our calls were focused around that.\n\nIn early 2023 I created RoOptimism a twitter account that's 100% focused on onboarding and educating romanians around Optimism.",
    displayName: "RoOptimism",
    impactDescription:
      "The Impact of RoOptimism on the Optimism Collective has been significant taking into account that the account is new and Optimism hasn't penetrated the romanian speaking community until the moment.\n\nI've onboarded 5-10 high impact contributors to Optimism(one full time Gitcoin contributor, 2 ex Gitcoin contributors-grant reviewers, 1 romanian influencer with an audience of over 10k and 2 romanians that are active in web3-one works with Thrive coin and the other is launching a fashion label)\n\nWe've reached over 100 romanians that are active in web3. \n\nWe hope to launch a decicated NFT for romanians that are Optimistic\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Hub of Collaboration:\n\nThe Giveth House has become a nexus for Optimism-related projects, hosting contributors and innovators from the Optimism Collective.\nNotable projects: RetroPGF, L2Beat, EthBarcelona 2023.\n\nRetroPGF Engagement:\n\nThe space not only hosts RetroPGF signage to the circulating community but also serves as an active hub for RetroPGF collaborations.\nRoundtables produce heightened awareness and actionable insight on RetroPGF.\n\nFocused Community Dialogues:\n\nThe house regularly hosts deep-dive conversations explicitly focused on Optimism Collective's goals and challenges, effectively serving as an \"Optimism think-tank.\"\n\nEthBarcelona:\n\nServed as the primary venue for the RetroPGF crew during EthBarcelona 2023, emphasizing our alignment with Optimism's mission for public goods.\n",
    displayName: "Giveth Web3 House",
    impactDescription:
      "Community Catalyst:\n\nPeterpan's journey from Giveth House directly impacted the founding of MetaCartel, a notable entity in the Optimism ecosystem.\nThe founders of EthBarcelona, an Optimism-focused event, utilized Giveth House as their brainstorming and planning hub.\n\nInnovation Hub:\n\nThe Giveth House's environment enabled Jordi Baylina to contribute significantly to Hermez, further enriching Optimism's L2 capabilities.\n\nPublic Goods and Optimism:\n\nThe financial ease provided by the house has empowered numerous contributors to focus solely on public goods within the Optimism ecosystem.\nGiveth House hosts the RetroPGF team during ETHBarcelona.\n\nSolar Punk Ethos:\n\nThe house embodies Optimism Collective’s values, serving as a living space that fosters community-driven innovation for Optimism.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We are seizing the tunes of production and producing our own. In 3 months we collected 1000+ Optimism music NFTs, with our own music collected by 2000+ unique addresses, entered top 40 chart of biggest music collectors of all time on sound.xyz platform by the number of artist supported and is currently in all time top 10 chart by the number of unique collectors.",
    displayName: "EGG 🥚 RECORDS",
    impactDescription:
      "It's clear that people love to collect our music. We love to collect people's music too. Yey for the Optimistic marketplace. A lot of our collectors are first timers. That means our art inspires an onboards people to the ecosystem. We are also onboarding new artists and introducing them to Optimism by donating them their first $2-3 of eth to deploy their contracts. ",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      'Web3ForGood is a media community run by two friends in the nonprofit and social impact sectors. We publish a weekly newsletter, "This Week in Web3ForGood," aiming to demystify Web3 tech for social impact professionals. The platform serves as a bridge between tech builders and those focused on social change, offering educational opportunities and content at the intersection of tech and impact. Notably, the newsletter introduced the concept of Optimism to a curious yet skeptical audience. This sparked interest in Quadratic Funding, Impact Certificates, the Merge, and Rollups, leading to a detailed series on Optimism. Growth has been organic, emphasizing the community\'s value in facilitating meaningful discourse.\n',
    displayName: "Web3ForGood",
    impactDescription:
      "With 82 editions, Web3ForGood expands Web3 and social impact knowledge beyond the usual tech-savvy circles, introducing Optimism to a broader audience. As a reliable resource, it educates and supports professionals in tech and social impact. The newsletter not only demystifies Optimism but keeps readers updated on Web3's potential for positive change.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "Smol has seven live dapps that help users perform common crypto tasks in a more safe, seamless and simple fashion. Our latest launch, MultiSafe let’s users deploy a Safe with the same address on most chains including Optimism.\n\nThis grant would help retroactively fund our team for the six dapps now live on Optimism while also bringing dump.services to Optimism and developing new apps for the OP ecosystem. \n\nRecent Smol highlights include MultiSafe being featured in Blockworks and our token dumping dapp (Dump.services) surpasing $4.2M in volume within the first 4 months.\n\n",
    displayName: "draper",
    impactDescription:
      "We currently have 7 live dapps, 6 of which are currently live on Optimism - designed to help OP users do common crypto tasks in an easier, more seamless way. \n\nDisperse app - to disperse erc20 tokens \n\nerc20 migrator - simple migrator for erc20 tokens\n\nnft migrator - same as erc20 but for nfts \n\ntokenlistooor - automated and uptodate token list fork of uniswap tokenlist \n\ngib.to - create a simple donation page in seconds \n\ndump.service - swap multiple erc20 to one (currently only working on chains supporting cowswap since it uses it for sandwich and front run protection) \n\nMultisafe - gives people a simple way to have one Safe address on different chains. \n\n",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Infinity Wallet was one of the first wallets to support Optimism and the Optimism DApp/Developer ecosystem since it launched, and we have continued to support and expand Optimism across the Infinity Wallet & Web3 Browser over the last few years without any grant or support.\n\nAs a platform we have enabled users and developers to more easily onboard, access and interact with the Optimism stack and ecosystem, solving many of today's issues while delivering massive enhancements in UX and UI. Providing users and developers with access to a wide range of unique and innovative features and services, that we have developed out over the years as we continue to strive to enhance the wallet, DeFi, Web3 and overall crypto experience to enable seamless mass adoption by billions worldwide.",
    displayName: "Infinity Wallet",
    impactDescription:
      "We have contributed to Optimism in a wide range of ways, such as:\n\n- Increased awareness and adoption of Optimism to hundreds of thousands of Infinity Wallet users;\n\n- Made onboarding to Optimism easier than ever before, direct from multiple fiat currencies or across chains, in a complete all-in-one platform;\n\n- Supported the Optimism DApp/developer ecosystem with driving awareness and adoption;\n\n- Enabled a much more user friendly experience on Optimism for interacting with Optimism and Optimism projects;\n\n- Enabled new utility and easy access to Optimism via a range of unique Infinity Wallet features/services;\n\n- Supported Optimism in the first Web3 browser, removing the need to use browser extensions and providing a more natural and enhanced experience when accessing Web3 on Optimism;",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Established in 2022, the Lyra Research Collective is a community-driven initiative devoted to sharing crucial updates on the Optimism ecosystem. Through our Twitter, we offer a weekly data thread and monthly newsletters, detailing the latest developments and innovations. Our analysis spans significant areas within the ecosystem, including Kwenta and Polynomial. Our primary goal: keep over 87,000 Lyra enthusiasts updated on all things Lyra and Optimism. What distinguishes us is our community-driven ethos. Every insight we share is powered by our members, ensuring our outputs truly serve the community's needs.",
    displayName: "Lyra Research Collective",
    impactDescription:
      "Our Twitter analytics show consistent engagement with our weekly data threads. Catering to over 570 followers on Twitter, we provide updates to 87,000+ Lyra community members. Our Medium page, dedicated to newsletters, reveals increasing readership, highlighting the community's demand for in-depth insights. We produce content on various Lyra products for hedging and arbitrage. Most content revolves around Optimism. In 'Data & Key Metrics', we explore pivotal option metrics for OP. ",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "The Superscan (https://superscan.network) is a unified block explorer for the Superchain, unifying data points at the ecosystem level, built by the same team that built Avascan (https://avascan.info), the world's first unified multi-chain block explorer.\n\nThe Superscan launched on July 20th.\n\nThink of it like Debank, but for everything you normally use on a block explorer:\n- Unified home page that shows blocks, txs and L1 <> L2 txs made in real-time [https://superscan.network]\n- Single-chain explorer for every OP Chain: OP Mainnet | Base |Zora | PGN\n- Unified contract verification compatible with Etherscan APIs\n- REST (native) and Etherscan compatible API endpoints\n- Aggregated charts and tools with single chain comparison\nAnd more.\n\nWe also designed Superchain and Superscan logos.",
    displayName: "Superscan",
    impactDescription:
      "As a unified block explorer for the whole Superchain ecosystem, the Superscan is the most usable block explorer for users and developers that operate and work on the Superchain.\n\nUsers don't need to hop from one block explorer to the other when bridging between OP Chains, and developers can quickly debug cross-chain application from the unified Contract Details page (example: https://superscan.network/address/0xABCDEFEd93200601e1dFe26D6644758801D732E8)\n\nThis is THE block explorer to showcase the present and the future of the Superchain.",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "Bankless Bengali contributed to Optimism on Youtube and Twitter for building their high-quality educational videos about  technologies,and applications . These videos can serve as a valuable resource for users offering step-by-step instructions and best practices for utilizing the OP solutions effectively.",
    displayName: "Bankless Bengali",
    impactDescription:
      "contributions on Optimism Collective from Bankless Bengali were made on YouTube and Twitter were aimed at educating, engaging, and empowering the community. We created educational content and actively engaged with community members on Twitter. These efforts have led to increased community engagement and stronger bonds",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "In October 2022, Decent became one of the first NFT creator platforms to deploy NFTs to Optimism. Our DCNT721a NFT contract is the most used contract on Optimism. In the last year we've had over 22M NFTs minted on OP like drops with partners including Optimism, World Coin, Conduit, Base, and more. We didn't have any fee collection on for almost all of these mints. \n\nWe also built a product called The Box that enables 1-click transactions from any token on any chain - meaning that users can make transactions on Optimism (or other L2s) without needing native tokens on Optimism and we do all the bridging and swapping in the background at the Point of Sale (or Point of Transaction). This has already brought a few thousand transactions to Optimism and been integrated to enable payment for NFTs",
    displayName: "Decent.xyz",
    impactDescription:
      "Decent has the most active NFT contract ever on Optimism (as seen here: https://www.growthepie.xyz/blockspace/category-comparison). Thousands of creators, including members of the Optimism Collective, have deployed NFTs through us while over 1 million unique wallets have collected/ minted NFTs through Decent as well. We have made it simple and easy to do so, and are heavily responsible for providing activity in the Optimism NFT ecosystem. We also helped grow the Optimism brand by doing commemorative NFT releases with Optimism, Worldcoin, Conduit, and others that did over 20 million mints combined. ",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "CryptoZombies is an interactive school that teaches students to write smart contracts by making their own crypto-collectibles game. CryptoZombies was the first tutorial on the internet for NFTs and is still very relevant to the new crop of web3 developers looking to enter the industry today. The curriculum is focused on Solidity development, which also helps onboard new developers to Optimism. \n\nRecently, we've teamed up with the Optimism Foundation to build a new course, Optimism Unleashed, that teaches students to write, test, and deploy smart contracts on the OP Mainnet and use the newly released Superchain Faucet. The course is available at https://cryptozombies.io/en/optimism.\n",
    displayName: "CryptoZombies",
    impactDescription:
      "Our platform is free and used by more than 500,000 developers worldwide. Consequently, we've broadened the Optimism Collective's audience while streamlining developer onboarding. In doing so, we've blended simplicity and humor, making the art of writing smart contracts on Optimism fun and accessible. Furthermore, our Telegram community ensures prompt support from our engineers, aiding both newcomers and experienced developers alike.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Vaults.fyi is the most reliable source for in-depth yield analysis on Optimism. \n\nWe track 23 yields on Optimism and Base, with custom links you can use to focus on only those L2s: op.vaults.fyi and base.vaults.fyi. \n\nAcross Ethereum and the broader L2 ecosystem, we track 100+ yields. ",
    displayName: "Vaults.fyi",
    impactDescription:
      "Vaults simplifies on-chain yield discovery in the Optimism ecosystem by independently sourcing and calculating yields from DeFi projects. \n\nWe prioritize user safety through only showing tenured vaults, empowering Optimism users to make informed capital allocation decisions. \n\nOur mission is to enhance DeFi yield accessibility.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "In Nov 2022, 78% of Ethereum blocks censored OFAC transactions, undermining decentralization—a critical concern for both Ethereum and Optimism. Launching our credibly-neutral relay that month, we now connect to ~75% of validators, all major builders, and relay around ~30% of Ethereum blocks, reducing block censorship to 29%. This relay fortifies proposer-builder separation, leveling the playing field for all proposers in accessing MEV revenue, thereby bolstering decentralization. Running an effective relay is costly (10k - 20k a month) with thousands of block bids submitted each slot, and has so far been funded entirely by generous supporters.\n",
    displayName: "Ultra Sound Relay",
    impactDescription:
      "Optimism can post it's data to L1 without worry. Users, builders, and projects on L1, but also L2 can feel they're participating in a credibly-neutral, strongly decentralized ecosystem. This has immediate effects for where people build or use projects today, but also has far reaching consequences for where people entrust their capital for the next 100-years.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "In the last year, we completed a first iteration of a public goods funding structure targeting the advancement of private data transfer. \n* Set up an advisory committee and program structure\n* Disbursed 750k to research groups working on private information retrieval and homomorphic encryption.\n\nThis fund both advances a clear, narrow, mission and serves as a test case for the public goods funding discussion at protocol labs and more broadly around the funding the commons community.\n\nNote on the existing grants / funding: 100% of the initial startup funding has been treated as funds for grant-making. The entity has run so far with 0% overhead, and has not provided compensation to the advisory committee or program officers.",
    displayName: "Private Retrieval Fund",
    impactDescription:
      "Accelerated the availability of more private communication options. Supporting the transition of research to practice allows for more things like https://spiraldb.xyz/balances/  - Impact both through direct distribution of capital, and through regular talks (e.g https://speak.protocol.berlin/protocol-berg/talk/Y7HNG9/, ethCC, HCPP, etc) to bridge research results to the web3 community.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Bankless Turkish participated in Optimism DAOs Season 4 to create multimedia content in Turkish. We carried our blog from web2 to web3 by selecting Mirror and allowing our community to mint articles on optimism.\n\nWe organised a physical onboarding workshop creating new wallets and doing hands on onboarding with token transfers and NFT minting. Collaborated with Otterspace.xyz for souldbound NFTs on Optimism.\n\nWe also collaborated with Greenpill Turkey and shared our know how about grants and fundraising. With their connections to legal NGOs, we opened an account for Greenpill on giveth.io and onboarded 4 NGOs for fundraising using Safe{Wallet} on Optimism.\n\nSince there is quite a bit of articles and tweets, we made a spreadsheet with the list in the first link.\n\n\n\n",
    displayName: "BanklessDAO Turkish",
    impactDescription:
      "We propagated the Optimistic Vision to Turkish speakers via:\n\nNewsletters:\n\nFrom the Ashes of Moloch, Ether’s Phoenix Rises\nOptimism’s Governance Is Tuned Into Community\nHands-On Learning for Optimistic Hearts\nWhat Is the Law of Chains?\nOP Grants Stack: The Wellspring of Regenerative Cryptoeconomics\nOptimism Provides a Shared Resource For DAOs\nThe Optimism Collective’s RetroPGF Learning Journey\nSupporting tweets for newsletters + Info on collective.\n\nOnboarding:\n\nDAO & Bankless Overview\nWeb3 Intro & Tools\nOptimistic Onboarding\nContribution Post-Onboarding\nFunding Mechanisms (direct, retro, qf, crowd)\nCommunity Vibes.\n\n\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "New smart contracts for an ERC1155 bridge. Following the structure of the ERC721, Standard bridge and used CrossDomainMessenger, and IOptimismMintableERC1155  for the implementation:  OptimismMintableERC1155 ,IOptimismMintableERC1155,  ERC1155Bridge, L1ERC1155Bridge , L2ERC1155Bridge",
    displayName: "ERC1155 Bridge",
    impactDescription:
      "We could not track the impact of this contribution. However,  we believe that by  having an standard ERC1155 bridge we will reduce the barriers for any project that is working with ERC1155 tokens and is willing to operate on the Optimism ecosystem.  In addition, having an standard ERC1155 bridge and not one created by individual teams will foster standardization, mass adoption and makes Optimism more accessible, developer friendly and valuable, compared to other networks.\n",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "In terms of contribution, it is safe to say that ITU Blockchain is both effective for and affected by Optimism Collective’s objectives and achievements. Aligned with Optimism’s core values related to building a common impactful good and a sustainable future for Ethereum, our participation in the Optimism ecosystem is mainly shaped around Optimism governance. We have been and are now engaging on governance proposals with remarkably active participation, unique reports posted on the governance forum for each proposal, and Twitter threads that serve the key decisions made in the proposal to our delegators.",
    displayName: "ITU Blockchain",
    impactDescription:
      "The ITU Blockchain delegation team plays a crucial role in evaluating Optimism proposals. Following thorough assessments, team members engage in discussions, reaching a consensus through votes and creating content including Twitter floods and forum reports covering the rationales shared with the wider Optimism community. These actions not only significantly impact Optimism's governance but also keep the Turkish community well-informed about ongoing governance matters. ITU Blockchain, being Turkey's biggest blockchain community with a substantial Twitter following, was impactful towards the use of this platform to enhance Optimism governance. Their involvement in Optimism governance has garnered substantial interest, leading many to support both the community and the delegation team.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "IC3 research has contributed the foundation and growth of blockchain systems, including Optimism and Ethereum. We encourage open-source and applied blockchain research in academia. Our research of impact to Optimism includes work on voting and Dark DAOs, identity systems, security and cryptography, MEV, consensus, wallet design, and regulation.\n\nIC3 facilitates collaboration across disciplines like computer science, cryptography, law, economics, distributed systems, and more through funding and events. We host retreats, an annual hackathon, co-organize The Science of Blockchain Conference (SBC), have a research blog and a monthly newsletter. \n\nIC3 is an initiative of faculty at CMU, Cornell, Cornell Tech, EPFL, ETH Zurich, University of Bern, UC Berkeley, UCL, UIUC, SMU, and the Technion. ",
    displayName: "IC3",
    impactDescription:
      'Some key findings from IC3 for Optimism: \n- MEV: IC3 research formally identified and coined the term "MEV," important for the Optimism sequencer, and published follow-up work (Babel et al., 2023) since RetroPGF2\n- Dark DAOs: IC3 research identified the risk of Dark DAOs and automated bribery to governance, illuminating design space for robust governance systems\n-Privacy cryptography: IC3 has driven forward privacy cryptography research, including threshold encryption and multi party computation\n-Social good: IC3 prioritizes support of research for social good and ethical blockchain technology, sharing values with the Optimism Collective\n\nWe believe that research done in academia is a key compliment to industry research and contributes to the success of blockchain systems like Optimism. ',
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Over the past 6 months we have advanced the Rust tooling for Cannon from a small template repo to a full stack of tooling. This involved the following:\n\n- Changes to support that latest version of Cannon and the updated pre-image oracle\n- A docker builder image for easy cross-compilation of MIPS binaries\n- `cargo cannon` CLI tool to make it simple to bootstrap and build projects\n- Updated API for retrieving pre-image oracle data that is safer and more rust idiomatic\n\nCannon-rs is currently used by ChainSafe Systems and Sygma to develop production applications that use Cannon and the OP stack.",
    displayName: "Cannon-rs",
    impactDescription:
      "A number of projects (Sygma, Coinbase Base) are planning to use Rust to develop alternative clients for Cannon and the OP stack. Cannon-rs can speeds up this development by proving low level system APIs for Cannon upon which more complex provable programs can be built.\n\nProviding developers with a way to develop with Rust for Cannon improves adoption and diversity of code that can be proven using Cannon.",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "Kwenta has grown to one of the largest perps DEXes by volume, and has helped onboard thousands of users, both large and small, to the Optimism ecosystem.\n\nAlthough we believe this contribution alone is valuable, we are particularly proud of Kwenta's work being published entirely open source, both backend and frontend. Our work has served as a blueprint for other builders in the space, including Rage Trade, a project which previously integrated only GMX on Arbitrum. Our open source Python SDK was cited as one of the tools they used to build their integration on Optimism. \n\nWe've also worked directly with integrators such as Tradao, STFX, and Copin to provide marketing, business development, and technical support to build the Optimism community.",
    displayName: "Kwenta",
    impactDescription:
      "Through the onboarding of users, community developers, and ecosystem partners, Kwenta has contributed significantly to growth and activity on the Optimism chain, and participation in the wider ecosystem.\n\nOur commitment to building open source tools and our encouragement to other developers to share and build on collective work has helped give Optimism a reputation as one of the best places to innovate in the onchain derivatives space.\n\nWe facilitate thousands of trades per day in v2 alone, leading to millions of individual transactions on OP. ",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "Optimystics contribute to Optimism in many ways, including:\n\n- We created Optimism Fractal, a community dedicated to fostering collaboration and awarding public good creators on Optimism. We host weekly meetings where players coopete to grow Optimism, then we produce videos and show notes for educational purposes.\n\n- We created the OP Fractal Stack, a suite of open source tools that empower communities with fun consensus games for fractal collaboration. These tools facilitate Respect Games during Optimism Fractal meetings and provide a powerful reputation primitive.\n\n- We created Eden Fractal, a community pioneering coordination games and fractal democracy. We’ve hosted weekly meetings for 18 months and produced countless innovations, including epic shows and articles about Optimism!",
    displayName: "Optimystics",
    impactDescription:
      "Our contributions created profound benefits for Optimism!\n\n- We educated dozens of experienced community leaders about Optimism with live presentations and deep discussions at weekly Eden Fractal meetings. This inspired significant interest and they’re now eager to engage with Optimism.\n\n- We shared optimistic videos and show notes in many groups, which attracted emphatic support of world class innovators. This content reached hundreds of talented Web3 builders and substantially increased awareness of Optimism.\n\n- By building open source tools for Optimism Fractal and curating knowledge, we enabled the Citizens House to benefit from years of extensive research and development. This created excitement in the OP community and helped optimists enjoy a powerful protocol to grow the Collective!",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Metagals' objective is to onboard into newbie women in LATAM into crypto. We've seen how most communities in web3 are male-dominated or directed to a crypto-savvy person;  most don't feel like a safe space for women. Some of our contributions have been: \n- We gave grants for 9 women to go to Devcon in Bogotá to represent our community and bring knowledge to share with the gals\n- We executed 9 IRL meetups (Drink & Learn) focused on onboarding women to web3 topics\n- We have a Telegram community with more than 270 women learning about web3\n- We've done more than 10 Twitter spaces to help newbie women understand web3\n- Continuous content production distributed through Instagram \n- We have more than 2,500 followers on our social media, where more than 98% are women",
    displayName: "Metagals",
    impactDescription:
      "One of the main challenges to onboarding women to web3 is creating a safe space to communicate, ask questions, and learn in a community-based way. We've onboarded more than 300 Mexican women to web3, acting as the initial point of contact with the technology\nMetagals is the initial bridge Gals have with crypto, and we offer the tools so that every Gal can build her path. We've collaborated with Espacio Cripto, Her DAO, WAGI LATAM, and other communities to help the Gals explore the ecosystem. If they want deeper knowledge or IRL events in Mexico City, we connect them with Espacio Cripto. If they want to go to hackathons, we connect them with Her DAO LATAM to get scholarships.\nWe've built Metagals as a women-centered public good; we have never charged the community for being part of the Gals",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "GasHawk provides a non custodial, automated, transaction manager focused on gas savings that can be used by end users, contract deployers, institutions and projects building on the OP Stack. We have already integrated with multiple apps in the ecosystem and provide much needed tooling and developer infrastructure which enables developers to cheaply and securely deploy and interact with dapps, improving the quality and security of applications, drive considerable value to the Optimism ecosystem, help retain projects and developers, and unlock new application designs.\n\nWe have also spent considerable amounts of time and resources providing research and implementation into Optimism Sequencer Address which shows we can save Optimism millions per year.",
    displayName: "GasHawk",
    impactDescription:
      "GasHawk has helped to improve adoption and create stronger developer tooling and infrastructure. This infrastructure has helped developers, individuals and dapps on Optimism. We are currently a public good and do not charge users for use of our service or take any % of the amount we save.\n\nGasHawk is a versatile service designed for a wide range of users, including developers deploying contracts, artists releasing NFT collections, platforms, protocols, relayers, collectors, investors, and everyday users.\n\nGasHawk has successfully processed 16,281 transactions for 4,005 users.\n\nAdditionally we have shown that at minimum GasHawk can save Optimism millions of dollars per year with our intelligent submission strategies for its sequencer address.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Moso has always had a lofty goal: to make cryptocurrency accessible for everyone. We've made it part of daily shopping. With partners like Walmart and eBay, and over 2,000 other top stores, people have a tremendous amount of choices to shop online and earn crypto.\n\nWe've also incorporated extra elements to build onchain trust and reputation. We added a special feature that works quietly while people shop, which records a record of where and when people shop online. This is currently live on Base!",
    displayName: "Moso",
    impactDescription:
      "Moso has enriched the Optimism Collective by simplifying crypto earning. Our users effortlessly earn crypto through everyday purchases, turning ordinary shopping into crypto micro-investments. Partnering with major retailers ensures variety and accessibility, encouraging broader participation. \n\nFurthermore, Moso’s feature of recording shopping activities fosters trust and reliability in the onchain environment, enhancing the community’s overall security. In essence, Moso has made crypto earning accessible and trustworthy, amplifying the vibrancy and integrity of the Optimism Collective.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Gitcoin builds novel solutions to enable communities to build and fund what matters. This proposal outlines our contributions and requests RPGF funds to continue our impact. Gitcoin has always believed in the power of decentralized communities and the importance of public goods. Our contributions to the Optimism ecosystem include:\n\n- Grants Program: We have funded numerous projects building on or supporting the Optimism ecosystem through our grants program. This has enabled developers and teams to bring their innovative ideas to life, further enriching the Optimism community.\n\n- Knowledge Sharing: Gitcoin has hosted webinars, workshops, and AMA sessions with experts from the Optimism community, spreading knowledge and fostering deeper community engagement.",
    displayName: "Gitcoin",
    impactDescription:
      "Gitcoin has been instrumental in delivering value to the OP ecosystem:\n- Funding for projects\n- Filling blockspace\n- Launching a Superchain Layer 2\n- Partnering with OP to drive technology and protocol innovation within the RPGF experience (Project Registry, Gitcoin Allo, etc.)\n- Supporting and partnering to grow the narrative around public goods funding\n\nDetails of our impact can be found below:\nGitcoin Grants:\nOP GG: $1.8M+ funded\nOP GG: 320k+ Contributions \nOP Unique Wallets: 56k+\nOP Grants Funded: 625\nGG Wallets on 8/28: 7,570 (7.74% of all OP wallets on that day)\nGG Wallets on 8/29: 7,693 (8.07% of all OP wallets on that day)\n\nNetwork Activity:\nOP + PGN: $2.1M+ Funded\nOP + PGN: 387k+ Contributions\nOP + PGN Unique Wallets: 58k+\nOP/PGN Grants Funded: 679",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "LXDAO is an R&D-focused DAO in Web3, LXDAO supports valuable public goods and open-source products in a sustainable way.\n\nLXDAO has played a pivotal role in creating awareness and accelerating the understanding and adoption of Optimism and public goods across Web3 buidlers.\n\nThrough a set of onboarding mechanisms with contribution value as the threshold, LXDAO has attracted a lot of people who are concerned about public goods to join LXDAO.\n\nThrough governance and efficient R&D processes, we have supported many public goods, and we will attract more people to focus on the public goods field and continue to contribute to the public goods field.\n\nWe are committed to solving the problem of unsustainable public goods development and supporting public goods developers.",
    displayName: "LXDAO",
    impactDescription:
      "Membership: We currently have 135 registered members, most are public goods developers.\n\nGovernance: We have supported the sustainability of Web3 builders through governance mechanisms that have enabled the creation of many great public goods.\n\nPublic Goods Building: We've made public goods accessible to many users through our product development and events, and in the past year we've created more than 14 public good projects that have helped bring attention to the public goods space and Ethereum and Optimism.\n\nEducation and Awareness: We have organized many public goods-related events such as hacker-house, space, and podcasts, and have attracted over 10,000 people to the public goods space.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "We run conferences for the wider ETH italian community on a seasonal basis, with one main national event (SpaghettETH) + coordination for smaller meetups on the territory. We always make sure that our ticketing system operate on both L2s (via https://mego.cx/#/) and to invite speakers from the OP ecosystem at every turn. ",
    displayName: "SpaghettETH",
    impactDescription:
      "As L2 supporters, we always mentor new projects to run their DApps on either Optimism or Arbitrum, and network them to get in touch with core developers in the OP collective. We also provide educational modules for crypto newbies in our country and feature demos on all L2s",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "rhino has launched a super-fast, cheap and frictionless bridge that links OP Stack chains & projects and allows the easy on/off boarding of users & funds. Rhino's goal is to enable every  DeFi user (small and large) to be able to explore new DeFi frontiers. Across 12 supported chains, the rhino bridge has processed nearly 1 million transactions, with over 348,000 unique users. ",
    displayName: "rhino.fi",
    impactDescription:
      "Rhino has worked with OP Stack core teams and Caldera to launch the rhino super-fast bridge on Day-1 of their mainnet launches so that early adopter users have a frictionless way of on-boarding to new OP Stack chains. Examples include bring the first third part bridge to deploy on opBNB, Base and Manta, The rhino bridge has also been deployed on Optimism mainet, and several upcoming OP Stack chain testnets . The rhino bridge connects these L2s with a total of 12 L2s & chains meaning users can easily on board to OP Stack chains without touching Ethereum Layer 1. This is important to ecosystem growth as it allows projects to on-board communities in a frictionless and cost-efficient manner. ",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "Our 94K+ site users demonstrate our educational reach. Specific metrics include: 280+ vetted grants in our directory, and 284+ reviewed courses in Spanish, Portuguese & English. We held BIT Day Cuernavaca at Tec de Monterrey, directly connecting 100+ students. We also conducted a writing cohort with 12 women who received access to a Zora NFT, engaging them directly with the Optimism ecosystem.",
    displayName: "CryptoConexión",
    impactDescription:
      "Our 100K+ users and 94K+ site visitors demonstrate our educational reach. Specific metrics include: 17K+ Optimism content impressions, 280+ vetted grants in our directory, and 284+ reviewed courses in Spanish, Portuguese & English. We held BIT Day Cuernavaca at Tec de Monterrey, directly connecting 100+ students. We also conducted a writing cohort with 12 women who received access to a Zora NFT. \n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      '1. NFT & Gaming committee prior to the citizens house formation.\n2. OP craft education on social media about bedrock.\nThis one of our earlier contributions to the OP stack.\n3. We are highly active in the optimism governance forums.\n4. Currently we have 10 different projects that donate directly to RetroPGF.eth address on Optimism.\n5. Guild xyz “Guild Early Tester” in July 2022.\nImproving safety & security of the network and OP stack ecosystem.\n6. Karma HQ "Beta Tester" October 2023 GAP (Grantee Accountability Protocol)\n7. Speaking in public. "Spreading the word of optimism."\n“Fractal Pod” a regular spaces we host to educate others about public goods.\n8. Our MVP marketplace is currently deployed on OP mainnet. ',
    displayName: "Fractal Visions",
    impactDescription:
      "OP Gov\n- Creating a lively & productive conversation with other delegates who are part of the OP collective. \n- Helping others with general questions.\n- This work also consisted of reviewing proposals for the governance & the delegates of the OP collective.\n\nEducation\n- Teaching others on social media about Bedrock which was the test network for what is now being used as optimism main net.\n\nSecurity\n- Working together with ecosystem partners & fellow RetroPGF recipients Guild xyz to help as a “Guild Early Tester” for their platform in July 2022.\n\nSuper Chain UI / UX\n- BASE & Public Goods Network are also integrated with our marketplace for a super chain connection between various public goods funding mechanisms.\n\nPublic Goods Initiative\n- Multiple projects we created donate to RetroPGF.eth",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "- Development and maintenance of the libp2p specifications and concrete implemnetations in Go, Rust, and JavaScript.\n- Worked with projects in the Optimism ecosystem (e.g. Ethereum Beacon Chain implementations) to drive libp2p adoption and to keep implementations and downstream products updated with security fixes.\n- Managed an inclusive community of multiple implementations of libp2p across multiple companies.\n- Maintained a responsible security issue handling process that solved 8 CVE’s since 2019.\n- Maintained documentation, published example code, wrote informative blog posts, and gave conferences and workshops to grow the contributor and user base.",
    displayName: "libp2p",
    impactDescription:
      "The libp2p project has developed an maintained a common networking layer used by many of the core implementations of blockchains and tools that are used throughout the Optimism ecosystem. The protocols built into the libp2p project such as the Kademlia DHT and Gossipsub are core functions in the Ethereum and OP mainnet blockchains.\n\nThe libp2p maintainers have identified and mitigated 8 critical security bugs since 2019 and coordinated the private deployment of the fixes with members of the Optimism ecosystem. The maintainers continually optimized and fixed bugs with a steady cadence of libp2p releases in multiple implementations. The project has also maintained interop and performance testing to further identify and fix bugs across implementations, including go-libp2p used in OP mainnet.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "[MUD] We have been developing and maintaining MUD, an open-source application framework for ambitious Ethereum applications and Autonomous Worlds. MUD is the core foundation enabling dozens of Optimism and OP Stack projects, including Words3, Primodium, Sky Strife, and Kamigotchi.\n\n[OPCraft] Last year, using the OP Stack and MUD, we built OPCraft — a fully onchain voxel game. OPCraft battle-tested Optimism Bedrock before its release, uncovering several bugs, and raised awareness of the OP Stack's potential in gaming and Autonomous Worlds.",
    displayName: "Lattice (OPCraft & MUD)",
    impactDescription:
      "MUD, our application framework, is open-source and is enabling various projects that run on Optimism or the OP Stack, including Words3, an on-chain infinite scrabble (https://words3.xyz), Primodium, an onchain resource management game (https://www.primodium.com/), Sky Strife, Kamigotchi, and more. It was also the framework of choice at the ETHGlobal Autonomous Worlds Hackathon sponsored by Optimism, ETHGlobal, Protocol Labs, and Lattice that took place in May.\n\nOPCraft, our onchain voxel game, was fully open-sourced and launched on the OP Stack in October last year. In 2 weeks, it saw 3.5m tx (~2x the Bedrock testnet) and helped uncover multiple bugs in the OP Stack. It also showed developers the OP Stack's potential for gaming and complex apps (even featuring in a WIRED article!)",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "We have helped solve part of the language barrier to entry of Hungarian speakers, readers by providing translations of Optimism articles and other quality Web3/ crypto educational material, like that produced by from Bankless.com and Bankless DAO from English into Hungarian.",
    displayName: "Bankless DAO Magyar ( Hungarian )",
    impactDescription:
      "-  We were able to help propagate the Optimistic Vision and mission to a community of Hungarian readers / speakers via newsletter and social media amplification\n- We have a small but regular readership, which probably reflects the population of Hungary; approximately 9.7 million people.\n- There is presently only a small tangible measurement of the impact that we had on Optimism however in an intangible sense knowing that no language or community will be left behind a barrier, such as language, no matter how small the reach, makes the wider web3 global community feel like a diverse, inclusive space.\n- I'm Optimistic that more Hungarian readers will access and perhaps mint these articles going forward.\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Scaling Layer 2 Ethereum is a critical challenge, and Optimism faces fierce competition. Velodrome is an ecosystem public good with zero VC investment that exists solely to fuel Optimism’s growth while returning 100% of protocol revenue (over $28M to date) to the ecosystem. Velodrome serves as Optimism’s primary liquidity hub and onboarding engine, having recruited over 65 projects to OP, it has improved governance accountability through detailed reporting and leadership in governance, and it has enhanced the OP Stack and developer experience by developing core liquidity infrastructure while helping critical third-party infrastructure apps properly integrate Optimism.",
    displayName: "Velodrome",
    impactDescription:
      "Velodrome has led the growth of Optimism, enhanced the OP Stack, and expanded its network of builders. Velodrome transformed user experience on Optimism by enabling $124M in liquidity for 90+ pairs, highest of any L2 DEX, distributing $80M in rewards for LPs and veVELO voters. It has onboarded over 65 partners by reducing friction for protocols seeking to get community exposure, capital-efficient liquidity, and key resources on Optimism. It led work with OP team and 3P apps like Infura, Etherscan, and Tenderly to ensure proper servicing of the OP Stack. Velodrome contributed to the creation of Optimism's RFG program, addressing critical developer needs (e.g., RPC costs, audits). It has also enhanced its core codebase, including \"Sugar\" for onchain data to ensure OP Stack's resilience. ",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Kernel is building critical crypto infrastructure — an open source peer-learning environment built to increase trust between participants on trust-minimized foundations.\n\nStarting with Genesis Block in May 2020, KERNEL has run seven blocks, learning with more than 1,800 KERNEL fellows who have built 200+ crypto projects. \n\nEach block has been ~300 people in size, 8 weeks long, and oriented around Kernel Fellows having a transformative learning experience.\n\n- The 1,800 Kernel Fellows, some who first made contact with crypto via Kernel, represent an incredible & diverse set of people \n- 200+ projects have been built by Kernel Fellows (including at least 18 apps deployed on Optimism) \n\nEducation is a 'root' public good, and Kernel is seeding space to foster education in crypto and beyond. ",
    displayName: "Kernel",
    impactDescription:
      "Kernel's impact on Optimism is found through the fellows who interact with Optimism, the projects they build, and the impact Kernel has on their learning journey. \n\nStories of people who participated in Kernel which have directly impacted Optimism ecosystem include: \n\n- Veronica Coutts (KB1), Zain Bacchus (KB4), Tess Rinearson (KB4), and Harper Garvey (KB5) each participated in Kernel & are Optimism core contributors\n- Projects built on Optimism who participated in Kernel include $OAK (Darrell Jones, Rebecca Mqamelo), Atlantis World (Rev Miller & CJ), Coinshift (Tarun Gupta), Umbra (Ben DiFrancesco, Matt Soloman), jokedao (David Phelps) + 10 more \n\nThese people and projects have equally impacted Kernel and our ability to continue running wonderful blocks, continuing with KB8 this January.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Jessy's hacker house is a beacon for engineers and innovators in the Ethereum ecosystem, offering a supportive community to navigate this niche industry. We prioritize our residents, fostering an environment where they can collaborate, learn, and form lasting bonds. Our rigorous selection process ensures we house genuine, curious, and resourceful individuals. We view our houses as a public good, never compromising our values for monetary gain. Living and hacking together fosters deeper connections than casual meetups. We value obsession, genuine curiosity, and resourcefulness. We will include a list of all projects built by our residents.",
    displayName: "Jessy's Hacker House",
    impactDescription:
      "Jessy's hacker house and the Optimism Collective share a profound synergy in their commitment to Ethereum's sustainable future. While the Collective envisions a world where public goods equate to profitability, Jessy's house actualizes this by nurturing open-source projects. The single requirement for residents of Jessy's hacker house, is that whatever they build, it must be free open source. The house's emphasis on free open-source software resonates with the Collective's retroactive public goods funding, underscoring the belief that true value lies in communal benefits. We challenge traditional notions of profit, advocating for a model where community-driven initiatives and shared benefits define success in the Ethereum landscape.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Our contributions to Optimism are twofold. First, Blocktorch.xyz, our web3 observability platform, plays a vital role in monitoring the Optimism Chain and opStack roll-ups. It enhances network transparency, security, and performance. Second, Opti-mystic, our roll-up discovery service, simplifies the process of identifying and interacting with roll-ups on the opStack, fostering easier adoption and development. These contributions serve as integral pillars supporting developers to build on the Optimism ecosystem. The RetroPGF grants we seek are aimed at fortifying and advancing these vital tools, ensuring the seamless operation and sustainable development of Optimism.",
    displayName: "Blocktorch",
    impactDescription:
      "Streamlined Adoption: Opti-mystic, our roll-up discovery service, has simplified the process of discovering and utilizing roll-ups on the opStack. This has lowered the barriers to entry for developers and users, promoting the broader adoption of Optimism solutions.\n\nCommunity Growth: By providing essential tools for monitoring and roll-up discovery, we've contributed to the growth of the Optimism community. More developers and users can actively engage with the network, fostering a larger, more vibrant collective.\n\nEcosystem Resilience: Our contributions support the overall resilience and sustainability of the Optimism ecosystem. With enhanced monitoring and easier access to roll-ups, the network can adapt to challenges and scale more effectively.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Slugs is the first URL shortener purpose-built for an onchain world.\n\nThe protocol is supported by a smart contract deployed on Optimism Mainnet, and a frontend which acts as an interface to the protocol and as a resolver to redirect requests to the right URL.\n\nThe Slugs protocol is a public good URL shortener with a series of unique properties which can only exist under an onchain paradigm: immutable aliases, censorship-resistant registrations, permanent ownership, tokenization of aliases allowing trade-ability, and referrer fees enshrined into the protocol.",
    displayName: "Slugs",
    impactDescription:
      "Slugs is a new crypto primitive for minting NFTs with offchain utility at no cost, with a commonly understood use case outside of crypto (Bit.ly but onchain).\n\nIn order to make crypto more accessible and onboard the next 1 billion users, I believe we need to create more protocols that solve relatable problems with better UX and at a lower cost. My contribution is an attempt at a tiny step in that direction.\n\nThe project is launching this week so I am not including any traction numbers. Instead, a link to a Dune dashboard is included. Check it out to see its most up to date impact data.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Opclave has been one of the finalists among 306 projects at the Scaling Ethereum Hackathon of ETHGlobal by introducing hardware signatures in account abstraction for the first time in the OPStack ecosystem\n\nThe Showcase prepared at the ETHGlobal hackathon received significant engagement from the ecosystem, thus introducing Optimism's OP Stack product. Additionally, the Twitter thread featuring Opclave gained over 600K views, contributing to the popularity of OP Stack\n\nThe Clave team proposed EIP-7212 to enable the use of the P256 curve. Following this, many individuals from the ecosystem began development on the P256 curve. The Ledger team further developed the work of Opclave. Extensive discussions took place on builder forums, and numerous tweets were posted on Twitter regarding EIP-7212",
    displayName: "Clave (formerly Opclave)",
    impactDescription:
      "Providing one of the first examples of hardware signing on OP Stack drew the community's attention toward Optimism. The popular thread received not only 600K views but also got RT support from nearly 500 individuals.\n\nAfter the development of Opclave, Renaud from the Ledger team conducted a study and published an article aimed at reducing the gas fee costs of the 'verifier' contract. This article prompted the entire ecosystem to examine the usage of secp256r1 in OP Stack. \n\nAt a time when there were very few projects utilizing OP Stack technology, Opclave emerged and led the way for other projects. After Opclave, many projects worked on Hardware Signing and produced products. \n\nAll of these have contributed to increasing the awareness of Optimism Collective among even more people.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "- liquidity manager & yield optimizer launched 2020. Supported OP Mainnet since 2022\n- brought in TVL via unique strategies that automate + inc. yields for users\n\n- Single-Token Vaults: Optimized the leveraged same-token borrow/supply on lending protocols. Attracted users + TVL via our automation and consistent APY, no IL and no liquidation risks. Started with Sonne, then expanded to partner with dForce\n\n- Automated Conc. Liquidity Manager (ACLM) Vaults: Simplified the process in bringing users to V3 CL DEXs - Users easily provide liquidity (no hassle of setting ranges or out-of-range worries) We automate the ranges and positions, offer single-token deposits, fully automated rebalancing\n\n- We expanded to Base Chain this year. Integrated and brought TVL to Moonwell, Sonne, UniV3 and SushiV3",
    displayName: "ACryptoS",
    impactDescription:
      "Aside from BSC (our native chain), OP and Base Chain are our top TVL chains right now\n\n- On OP: 26 vaults. Launched Nov’22. TVL at $4.5M+ (ATH of $11M+ in Mar)\n- key ecosystem vaults like OP and OP-ETH\n\n- On Base: 22 vaults. Launched Sep’23. TVL at $1.2M+\n- Supported Base LPs and vaults, eg USDbC, cbETH\n\nOur ACLM maintained a tight range on V3 positions, hosting a big % of active liquidity on the pools managed. This facilitated better + bigger swap volumes on key tokens.\n\nMetrics - Currently hosting:\n90%+ of active liquidity on UniV3 for USDT/DAI, USDC/USDT\n20%+ on wstETH/ETH\n50%+ on USDC/USDbC\n\n- We actively posted developments about OP in our socials, bringing user awareness to OP/Base\n- Other initiatives: sharing our content to OP Discord, + sharing insights in OP community Spaces\n",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "At Duct Tape, we are enabling the Optimism and Ethereum communities to grow into a way that’s aligned with our core values. Out of the 9 events we organized in the past, we accepted only support from Ethereum-aligned groups, excluding most alt L1 and venture. Hackers receive free event access, underscoring our focus on empowering builders within the community. At ETHPrague 2023, we proudly had support from the Optimism ecosystem as a sponsor, and utilized Base as a payment system on-site. Karl Floersch delivered a talk on the superchain and its developer implications. Notably, we facilitated coffee and merchandise payments through Optimism, enhancing user experience.",
    displayName: "Duct Tape ",
    impactDescription:
      "We are pushing for real world adoption when possible. We encourage L2 payments on the ground without being guided by the core team. \nWe have scaled from a hackers congress to ETHPrague, to EthereumZuri.ch, and continue to educate and grow the ecosystem in Europe. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We help to localized news and movement from Optimism and Ethereum to help Thailand Community to be well-informed about ongoing updates and the ecosystem. We have also  create different of types and style of content to educate and further support the communities of Ethereum and Optimism in Thailand. \n\n\n\n",
    displayName: "BitcoinAddict Thailand ",
    impactDescription:
      "We have help over 334,000 followers and 83,000 community members in Thailand (including all social media and platform) to be well informed and educated about the Ethereum, Optimism and Layer 2  ecosystem, through our realtime news and indepth our education content. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Onchain Reads is a decentralized social network for book enthusiasts.\n\nThe platform allows users to create virtual bookshelves, where they can organize and track the books they've read, are currently reading, or plan to read in the future. Users can also rate and review books and provide recommendations.\n\nOnchain Reads provides a space for users to connect with like-minded individuals and participate in communities. Users can explore new books based on their interests and engage in discussions with fellow readers.",
    displayName: "Onchain Reads",
    impactDescription:
      "Winner of one of the 100 Builders grants.\n\nOnchain Reads is built on Ethereum Attestation Service (EAS) https://attest.sh/ and deployed on Base. Visit https://onchainreads.phyles.app/ to mark a book as read onchain.\n\nAfter you sign the attestation you can check it on the app and EAS Scan https://base.easscan.org/schema/view/0x033ac28e96914866bb41e63e9439560a83521eb856ecdb711ef520ae43994d18\n\nBy storing data onchain, we ensure a credibly neutral platform, and enabling developers to create new applications permissionlessly.\n\nIn this prototype, you can view users who have read a book and visit profiles to see the books they've read https://onchainreads.phyles.app/u/0xCf7ecA52dE76E72e562ADddb513CeF4c609f1fd2",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "We have contributed to optimism by building a strong community of web3 developers and enthusiast alike, through our series of community events, conferences and technical bootcamp.\nOver the years we've train people technical and non-technical, who are actively developing and contributing to optimism and the web3 ecosystem at large in various capacity.",
    displayName: "BlockchainOAU",
    impactDescription:
      "We helped train developers and equip them with the necessary technical skillset to building Dapps on the Ethereum and Optimism ecosystem.\nWe offer several free to use and open to attend community programme for aspiring web3 devs and enthusiasts alike, leading to significant growth of web3 adoption in the larger campus community.\nWe hope the retroPGF funding would motivate us a lot to push for an OP centric development bootcamp and OP exclusive workshops, leveraging our strong community and expertise.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Coordinape has supported DAOs and digital communities since 2021.  This summer, we launched CoSoul, our first SoulBound token and reputation primitive contract, on the Optimism network. CoSouls store metrics to make the value added by contributors using Coordinape visible, as they attest to each other's collaborations in DAOs, projects and companies. CoSoul's launch exceeded our expectation. 26,000 contributors to web3 have minted the SBTs since June. This has resulted in 46,000+ transactions, as CoSouls are synched each month with data from Coordinape, adding more clarity to the reputation map on OP.  CoSoul's have already introduced Optimism to new web3 users, and some notable web2 companies (iFood and The Many) are using Coordinape and CoSouls to kick-start Web3's impact on their orgs.",
    displayName: "Coordinape",
    impactDescription:
      "Building CoSoul on Optimism has made a significant impact, positioning Optimism to lead on-chain applications for the future of work.  By building on Optimism, Coordinape has helped the OP Collective provide new value to tens of thousands of users in just 4 months. CoSouls have proved out the need for reputation to live on chain, and created a primary locus for new web3 adopters to create their web3 CV on OP.  CoSouls help Optimists engage regularly with digital identity, resulting in 46,000 transactions in four months. As we've seen over the last several years, the organism of collective agency and collaboration works differently in web3, and Coordinape has helped these activities form roots on OP.  38,400 contributors have used Coordinape, in over 3600 DAOs, since 2021.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Valio is the first omnichain asset management protocol integrated with Optimism ecosystem. We are putting a high attention to OP ecosystem, connecting leading traders to trading tools like: 0x and Kwenta (releasing soon), as well as other integrations in the pipeline to make the asset management on Optimism as frictionless as possible",
    displayName: "valio.xyz",
    impactDescription:
      "Valio is the first omnichain asset management protocol integrated with Optimism ecosystem. We are putting a high attention to OP ecosystem, connecting leading traders to trading tools like: 0x and Kwenta (releasing soon), as well as other integrations in the pipeline to make the asset management on Optimism as frictionless as possible",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Launchcaster built a solution and a community for builders to launch and discover the best projects on the Superchain. Think Product Hunt, but for the Superchain!\n\nHow Launchcaster works:\n1. Builders post to Farcaster or Lens\n2. Builders reply with @launch to launch\n3. Anyone can connect their wallet, upvote, and see wallet supporters\n\nLaunchcaster’s contributions:\n- Launch using social protocols, including Farcaster and Lens.\n- Discover Superchain launches using home, user, project, and newsletter feeds.\n- Explore Superchain builders by browsing through their profiles and leaderboards.\n- Discover Superchain apps through product pages, top app leaderboard, search, and ecosystems.\n- Deploy, import, and mint Superchain NFTs for apps and launches.\n- And so much more 🙏",
    displayName: "Launchcaster",
    impactDescription:
      "Launchcaster has amassed over 10K builders, more than half of active ETH developers. It has also attracted over 50K unique users and facilitated over 1K successful Superchain launches. Many of these launches are built on the OP stack!\n\nLaunchcaster Weekly, our weekly newsletter summarizing the top launches of the week, has sent over 150K emails to 5K subscribers.\n\nLaunchcaster has assisted in deploying over 40 Superchain NFTs, processing +9K mints, importing thousands, and indexing millions.",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "EUCI safeguards the public interest by harnessing permissionless blockchains, notably Ethereum and Optimism. Our goal: foster secure innovation by advocating sensible regulations. We urge lawmakers to see the broad societal impact of these technologies. We've fought against harmful regulations, like banning crypto wallets, equating NFTs to securities, or labelling protocols as bank accounts. We explained why these are detrimental and bridged regulatory intentions with the Ethereum community. We've collaborated with global organizations to curb impractical crypto laws because regulation can make or break an industry, and we won't let it hinder this ecosystem.",
    displayName: "European Crypto Initiative",
    impactDescription:
      " We've defended the decentralized tech stack. Imagine building Optimism Collective without wallets or registering as a \"crypto-asset service provider\" to onboard users. We ensured these weren't our reality. We educated regulators that DeFi isn't like TradFi and that decentralization is possible. We trained MEPs in Metamask use and enlightened EU Commission reps about DAOs' utilities.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "I've contributed to Optimism by to expanding access to NFTs for thousands of users on Optimism. I got involved with building a project called NFTEarth upon the news of the closure of the largest OP native marketplace, Quix. I helped to design the strategy for launch, the token NFTE, the airdrop campaign, build the team, deploy the marketplace contracts (we cloned OpenSea Seaport in the first iteration) and get the marketplace up and running in ~40 days. There were several competing teams in early 2023 vying to launch a Quix replacement - a badly needed solution, but only 2 teams actually ever did launch (NFTEarth and Zonic). The team also built the only self-hosted Indexer from Reservoirs open-source repository. NFTEarth code can be seen on the GitHub profile link provided.",
    displayName: "NFTEarth",
    impactDescription:
      "1,689 addresses claiming an NFT marketplace token was not an insignificant number of users, and the project launched with great promise for promoting Layer2 adoption, specifically to Optimism, for non-fungible technology and all the interesting and novel potential use cases for NFTs. Additionally, the NFTEarth team worked to creatively showcase a proof-of-concept model that music NFTs could be made to potentially transform the entire music industry by using non-fungible technology to remove intermediaries and improved the relationship between Artist/Consumer. 4,771 token-gated music NFTs, called Better With L2 (a tribute to the song made by musician 3LAU), were minted on Optimism. ",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "We wish to receive RetroPGF for our work educating the Colombian and LatinAmerican community into blockchain technologies and layer 2s, and for testing good practices managing our decentralized community as a DAO having presence in different territories of our country through autonomous nodes that collectively manages a treasury.",
    displayName: "Ethereum Colombia",
    impactDescription:
      "We have helped people from initial phases to understand what's Ethereum and how it could benefit their lives, then onboard them to solutions like Optimism as a Layer 2. We have extensive experience conducting workshops, talks, and online events for our community. To date, we have successfully organized over +40 workshops, +60 talks, and +60 online events. These gatherings have consistently attracted a substantial audience, with an average of 15 attendees per workshop, 50 attendees per talk, and 20 attendees per online event.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "EthStaker's goal is to keep Ethereum decentralized. We do this by creating educational materials and by offering technical support to encourage people to run their own nodes and to stake at home. To keep Ethereum decentralized we need a diverse set of many people to run different combinations of execution and consensus clients all around the world. If too much of the Ethereum network is controlled by a small amount of people this damages Ethereum's credible neutrality and it could no longer serve effectively as the base layer for projects like Optimism.",
    displayName: "EthStaker",
    impactDescription:
      "While we may not contribute directly to Optimism, we feel that without a secure and decentralized Ethereum mainnet, Optimism could not succeed in it's mission. Without Optimism Ethereum is much less useful. EthStaker's and Optimism's values, goals, and incentives are aligned. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Pairwise simplifies complex decision-making by presenting only two projects at a time for list creation. This method eases voting and introduces a system where citizens can project lists with budget allocations. Offering a solution to the RetroPGF 2 challenge of assigning percentages to 196 projects for example, Pairwise divides and reduces workload by categorizing projects and emphasizing individual expertise so that citizens can focus their vote on their areas of knowledge, ensuring both simplified and informed voting. The algorithm mirrors the Elo system used in games like League of Legends, where project comparison leads to more precise decisions.\n\nWe've crafted a completely new game experience for citizens, and we're eager for citizens to explore it.",
    displayName: "Pairwise",
    impactDescription:
      "Pairwise was developed to enhance the RetroPGF decision-making process. Optimism currently has the power to use it when RetroPGF final data is made available. With streamlined choices, members can engage with projects more intuitively and suited to their knowledge, ensuring better decisions. The dynamic unlocking feature keeps the process engaging, allowing greater influence over time. Strategic allocation ensures votes align with individual visions. Beyond just vote simplification, Pairwise amplifies badgeholders' voices, championing true digital democracy. Focused on strengthening Optimism’s ecosystem, Pairwise stands as a pivotal tool, enabling badgeholders to efficiently contribute their expertise, maximizing impact with minimal time and creating a realm where every insight is valued.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      'The Wagmi and Viem libraries are used in production today by popular Dapps, Wallets, and Libraries that integrate with OP Stack chains: Optimism, ENS, Shopify Blockchain, Coinbase + Base, Zora, WalletConnect, PancakeSwap, Sushi, Friend.tech, Rainbow, and more. Submitting and voting on RetroPGF applications even uses Wagmi + Viem!\n\nWagmi and Viem are the abstraction and connection between the "Interface Layer" and the "Network/Protocol Layer" for Dapps, Wallets, APIs, scripts, and more. \n\nViem is a low-level TypeScript Interface that provides lightweight, composable, and type-safe building blocks for Ethereum.\n\nWagmi is a higher-level TypeScript Interface that provides React Hooks, Vanilla JS Actions, and other reactive primitives for building applications on Ethereum.',
    displayName: "Wagmi / Viem",
    impactDescription:
      'Wagmi + Viem enabled Dapps, Wallets, and Libraries to integrate with OP Stack chains: \n\n- friend.tech (Dapp): Marketplace for friends on Base, powered by Wagmi + Viem\n- Zora (Dapp):  Discover/mint NFTs on OP Stack chains, powered by Wagmi + Viem\n- mint.fun (Dapp): Discover/mint NFTs on OP Stack chains, powered by Wagmi + Viem\n- Sushi (Dapp): Swap on OP Stack chains, powered by Wagmi + Viem\n- Official Optimism/Coinbase Base bridges (Dapp): Bridging, powered by Wagmi + Viem\n- RetroPGF (Dapp): Application submission + voting, powered by Wagmi + Viem\n- Rainbow Extension (Wallet): Ethereum Wallet, OP Stack compatible, powered by Wagmi\n- Web3Modal, ConnectKit, RainbowKit (Library): "Connect Wallet" UI modal, powered by Wagmi + Viem\n- op-viem (Library): Viem extensions for the OP Stack\n- ++ more!',
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "WASD has provided research and educational content for dozens of onchain games and their supporting infrastructure.\n\nThese include projects building on OP Stack networks like Sky Strife, OP Craft, Words3, Network States, Primodium, Bochamon, Kamigotchi, Autochessia, Battle for Blockchain, Netherscape, and Gaul. We have also written extensively about Lattice's MUD framework and the role OP Stack is playing in the onchain gaming/AW ecosystem.\n\nIn addition to producing content about onchain games within the Optimism ecosystem, WASD also hosted community events including a Sky Strife tournament and a Primodium game night. \n\nFinally, WASD has released all of its written content on Mirror. Every WASD article is collectible as an NFT on an OP Stack network (OP Mainnet and Base).",
    displayName: "WASD",
    impactDescription:
      "WASD has helped educate and onboard users into onchain games within the Optimism ecosystem.\n\nWe've been among the first publications to cover many of these projects, helping provide them with a spotlight from which they have been able to grow their communities and player bases. \n\nOur events (described in the previous section) have further assisted with this process by helping get these games directly into the hands of players.\n\nFinally, our use of Mirror and writing NFTs has helped bring users directly onto OP Stack networks and contributed to the adoption of Optimism based onchain media.",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "PWN is a peer-to-peer lending protocol designed for long-term mortgage-like loans of digital assets, backed by other digital assets. Borrowers can receive a fixed-duration loan of fungible tokens backed by fungible or non-fungible tokens, while lenders can earn interest by granting these loans. The protocol is trustless, and immutable.\n\nWe are strong believers that the OP stack is a main pillar of Ethereum scaling. For this reason our platform provides an opportunity on the OP stack for borrowers to get peer to peer fixed terms loans and lenders to get rewarded for lending against ERC-20s, and NFTs (and soon RWAs).\n",
    displayName: "PWN DAO",
    impactDescription:
      "We contributed directly to the Optimism ecosystem by deploying a P2P permissionless lending protocol. \nOur project also contributed by educating users about the benefits of prioritizing decentralized platforms. \n1/PWN publishes the cryptonative economy reports to detail the self-sufficiency of our economy. We did one deep-dive on the origin of the fees generated for the year 2022 on Optimism inspiring readers to become cryptonative. We brought the cryptonative economy reports into local communities. We were published in the French media Le Journal Du Coin and interviewed by Czech podcasts.\n2/We also have an ongoing series of interviews with cryptonatives.\n3/We maintain gm.events. It's a page for crypto natives to list their value-aligned events for free. \n",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      " Current state of information distribution is heavily reliant on algorithms and they may lead to the spread of misinformation and the suppression of valuable content. By manually curating Web3 contents published on Mirror, MC DAO is able to ensure that readers are exposed to high-quality content that is likely to be of interest to them. This is a valuable service that can help to improve the overall quality of information that is available online.",
    displayName: "Mirror Curator DAO",
    impactDescription:
      "MC DAO is a valuable asset to the Mirror community. By providing benefits to 1,865 subscribers and onboarding them to Mirror, MC DAO is helping to grow the Mirror user base. Additionally, MC DAO's work has an indirect impact on onboarding new users to Optimism, as Mirror is the most active Web3 content platform on Optimism.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Synpress enhances the quality and security of dApps, protocols, and other Web3 tools. It is a trusted choice for countless dApp projects seeking comprehensive end-to-end (E2E) testing solutions. Many of these projects are closely tied to Optimism, either as direct builds or influential contributors. Our team is committed to providing dedicated 1:1 support to these projects. Furthermore, Synpress serves as the foundational core of OP Labs' Superchain gas monitoring solution, directly impacting the Optimism ecosystem. Since many projects utilize Synpress, we list the most notable ones below.",
    displayName: "Synpress",
    impactDescription:
      "Synpress directly impacts the OP Stack as the core engine behind OP Labs' gas monitoring service for the Superchain. We offer dedicated 1:1 support to the team and have incorporated essential features into Synpress to bring this project to life.\n\nSynpress strengthens security in Optimism and OP Chain projects through end-to-end tooling, which reduces issues, hacks, and negative publicity that boosts user retention. In the past year, we've seen a more than twofold increase in weekly downloads and growing demand for our expertise in testing system design. Reliable interfaces drive adoption and satisfaction.\n\nSynpress offers support across all EVM chains. Providing 1:1 assistance to teams, directly and indirectly impacting the Collective, which grows in tandem with the Ethereum ecosystem.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "The installation process was time-consuming, often taking up to 6 hours to complete. \nWith the introduction of Validato, we've slashed the installation time down to a mere 5 minutes. This represents a time reduction of over 99%, enabling rapid deployment and integration.\n\n\nThe installation process was complex, requiring technical expertise. This barrier prevented many potential users, especially those without a technical background.\nNow, even non-technical individuals can run and install the node. This widens the user base.\n\n\nWith the installation process simplified, the ecosystem is poised for faster growth. In essence, Validato has not only brought about efficiency but has also set the stage for accelerated growth in the ecosystem.",
    displayName: "Validato",
    impactDescription:
      "\nValidato is designed to streamline processes that were previously manual and time-consuming. While exact time savings are yet to be quantified, the tool aims to significantly reduce the time users spend on installing the node.\n\n\nOrganizations and individuals can potentially reallocate resources more effectively. Instead of dedicating time and manpower to manual tasks, they can focus on strategic initiatives and growth opportunities.\n\n\n\n While the immediate impact is the tool itself, the long-term impact is fostering a culture of innovation and adaptability.\nAutomation reduces the chances of human error.\nWhile the exact numbers and achievements will provide a clearer picture in the future, the anticipated benefits of the Validato position it as a game-changer for the ecosystem.",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "We built the Superbridge (https://superbridge.app), an all in one solution for bridging assets to and from chains in the Superchain.\n\nThe Superbridge supports bridging ETH and ERC20 tokens to and from OP Mainnet, Base and Zora. With deployments to Mode, PGN, Orderly Network, Ancient8, Lyra and Aevo planned in the short term.\n\nWe've also partnered with Conduit (https://conduit.xyz), offering all testnets launched via their platform a free deployment of the Superbridge. You can read their announcement about the integration here https://twitter.com/KAndrewHuang/status/1707065523274739854.",
    displayName: "Fugu Works",
    impactDescription:
      "We're giving chains the ability to launch a user friendly bridge on the same day as they launch their mainnet or testnet network. We saw the launch of Base, where users were sending funds directly to a contract on Etherscan and thought that this needn't be the UX the Superchain is striving for.\n\nOn top of basic token bridging functionality, our easy mode feature enables users to not worry about coming back to prove (2 hours later) and finalize (7 days later) their withdrawals - Fugu Works does it for them. Drastically improving the withdrawal process and cutting transactions needed from users from 3 to 1.\n\n\nOn top of basic ETH and token bridging functionality, our easy mode feature enables users to not worry about coming back to prove (2 hours later) and finalize (7 days later",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "To whom it may concern,\nI am applying on behalf of the Based Nouns project.We feel that we have been actively engaging and fostering growth within the Base Network powered by OP. \nOver the past few months we have attracted a substantial following on social media and a user base within our community.\nWe are very proud to say that we have (in collaboration with Nouns Builder) launched one of...if not the first DAO with daily auctions on BASE. We hope to recruit builders through this DAO and eventually fund projects through our treasury wich would further expand the ecosystem. We have also released  NFT collections with over 4K total holders as well as a socialFI DApp with Web3 domain identities. More to come soon!\nThank you for your time. Please see contract links and websites below.\n",
    displayName: "Based Nouns",
    impactDescription:
      "We have onboarded many users onto the Base network from Layer 1. In doing so we have educated about the Base Network and in turn the OP stack.\nWe are only getting started but I believe our small contributions with onboarding have played a vital role and made an impact on advancing the Optimism network by onboarding, ecouraging participation, and investments on the Base Network.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Lorak is live on Mainnet, since the launch of Base, and since has processed over 450k+ TXs in total. We believe that it is now one of the largest onchain games on Optimism overall. Furthermore our development acts as a blueprint for other onchain games to emerge on Optimism. \n\nLorak innovates with in-game state on-chain, experimentation in asset ownership, specifically using 6551-eip in our game we've been able to implement ownership of in-game items tied to the in-game character NFT. Which allowed for an RPG type game to thrive with over 300+ NFTs to find as loot.\n\nBehind Lorak is LandTorn is a gaming hub built on Optimisim Base, acting as a publisher and distributor of games with a focus on on-chain innovation. We are helping other onchain games build towards a future on Optimism.",
    displayName: "LandTorn - Lorak",
    impactDescription:
      "Lorak's impact has been felt through over 80k+ In-game character NFTs minted, over 10K unique players interfacing with our game. 410,000+ transactions processed through our contracts. Lorak, part of onchain summer on Base, is an experimental on-chain idle game built using the ERC-6551 standard, testing the limits of Token Bound accounts.\n\nBuilt a new community of game enjoyers on Optimism-Base of over 3K people. \n\nWe believe our impact is not only in the growth and showcase of a successful large scale onchain game, but also in the form of building a community of like-minded people and developers interested in onchain games. Through Landtorn we are building a whole ecosystem of onchain games on Optimism-Base and support their growth with our findings in game development & blueprints.",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "Since launching in January 2023, Holograph has been used to mint millions of Holographic assets, making it the most widely used protocol for natively multichain digital asset production and distribution.\n\nOur Dune Analytics Dashboard showcases the extent of our success with onboarding users and engagement on Optimism.\n\nAs of today:\n\n3m+ NFTs minted on OP representing the largest share per network (37%) across all EVM environments currently integrated into the Holograph App.\n\n1.5m+ Protocol Transactions on OP.\n\n445k+ Bridge Transactions on OP\n\n26k+ Contracts Deployed on OP\n\n460k+ Unique Wallets on OP",
    displayName: "Holograph",
    impactDescription:
      "Holograph's developer modules eliminate the need to build complex systems for every new project, enabling teams to focus on delivering the most value for their customers without having to manage and maintain elaborate multichain infrastructure.\n\nCreators & Collectors use Holograph interfaces for creating, deploying, minting, and bridging natively composable NFTs on Optimism.\n\nBrand & Enterprises use asset issuance modules on Optimism that eliminate lock-in and enable them to focus on delivering value to customers without the requirement of maintaining elaborate cross-chain infrastructure. \n\nDevelopers utilize a command line interface for direct to contract function calls, instant multichain deployment infrastructure, and real time cross-chain asset indexing.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "As beta testers, this group provided numerous valuable contributions to the preparation and readiness of the Optimism Security Council:\n\n- Participated in multiple draft reviews of diverse documents, both internal and external, providing critical feedback on phrasing, procedural clarity, guidelines, and other aspects. \n\n- Volunteered significant time for live rehearsals of Council operations, including mock upgrade approval flows. This hands-on testing surfaced ambiguity in the drafted procedures that could be resolved prior to launch.\n\n- Reported detailed bugs uncovered during reviews and live rehearsals. The issues spanned different areas. Identifying these bugs early was crucial.\n",
    displayName: "OP Security Council Rehearsal Beta Testers",
    impactDescription:
      "The exhaustive testing, feedback, and bug discovery provided by the Security Council beta testers delivered immense value for reducing risk and increasing preparedness as a foundational governance component was launched.\n\nBy thoroughly stressing testing the procedures and systems during the rehearsals, problematic gaps were identified that could have led to issues down the line. The group's participation enabled ambiguities and vulnerabilities to be addressed proactively before the Council went live.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Our primary goal is to help support and grow the Ethereum ecosystem. Our current focus is on scaling the protocol via layer 2's such as Optimism. \n\nThe current long-standing effort is to hard fork Ethereum to introduce a new and significantly cheaper way for Layer 2's to reconcile with the base layer. This effort is known as the Deneb hard fork. \n\nAs of this writing we have officially merged our branch that supports the Deneb functionality into Lighthouse's unstable branch (links in this application).  This signifies the collective hard work of the team over the past year and we are on to thorough testing of the changes ahead of the official hard fork.\n\nDuring testing we expect to have more direct interaction with the optimism team to ensure optimism works as expected in this new regime.",
    displayName: "Lighthouse",
    impactDescription:
      "Our primary work here has not yet been released. The goal of the Deneb fork is to significantly reduce Optimism's fees by dramatically decreasing the cost for layer 2's to store data on the Ethereum base layer. Once complete we imagine adoption of layer 2's to be significant and most of the current layer 1 load to shift to layer 2's like Optimism.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Base Punk's innovative ecosystem offers lifetime digital identity, seamless social interactions with daily earnings, and a user-friendly NFT launchpad that simplifies creation, enhances liquidity, and fairly rewards creators.\n\nBase Punk Domains: (Free Mint to Base Punk NFT holder )\n-This is your ticket to seamless experiences in the Base Punk ecosystem.\n\nBase Punk Chat: The Next-Gen Social Network\n- Daily ETH earnings and activity points are yours for the taking.\n- Register, interact, mint posts as NFTs, and enjoy a daily passive income stream.\n\nBase Punk NFT Launchpad: A Creator's Dream\n- Simplify NFT creation, with integrated marketplace for each collection ensures liquidity and hassle-free trading.\n- Smart pricing adapts to demand, keeping NFTs fairly priced.\n- Creators 2% royalties.",
    displayName: "Base Punk",
    impactDescription:
      "Base Punk is redefining the Web3 experience with an ecosystem that's both groundbreaking and inclusive. All our Genesis NFT holders got Free mint in our .basepunk domain mint .Base Punk Domains offer a unique digital identity, empowering users to access a seamless world of possibilities. With Base Punk Chat, we've transformed social networking into a vibrant, decentralized platform, fostering daily earnings through ETH and activity points. Our NFT Launchpad brings an entirely new approach to NFT creation, simplifying the process for creators and collectors. In these challenging times, our ecosystem is a beacon of opportunity, allowing users to earn daily rewards and launch their NFT collections without coding expertise. It's a revolution, making Web3 accessible and rewarding for everyone.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "We’ve paid out 17673 USDC in royalties to 1535 holders who own tracks from artists such as Rihanna, The Weeknd, Offset and others, proving that you can own music and receive royalties onchain. We’ve also distributed permissionless loyalty token, ABT,  to holders based on the number of tokens and how long they have been held. ABT total: 1242 streams with 474709 ABT streamed.Partnering with Base for their launch, as the first music project to go live on onchainsummer.xyz, accumulating 29323 minters, with a total of 55439 NFTs minted with the artists Laidback Luke, Boys Noize, and Kleerup. The latest contributions have been https://themultichain.xyz/, where we were a part of taking LNRZ & Coop Records music across Optimism, Zora, and Base, as well as selling rights to Justin Bieber’s-Company.",
    displayName: "anotherblock",
    impactDescription:
      "Music is the perfect vessel to generate mainstream interest in web3. We aim to maximize this adoption effect by bringing in the biggest name in music and making it accessible through the OP stack.\n\n-Moving from ETH Mainnet to BASE with our contract factory and the latest drops\n-Deploying superfluid on BASE\n-Educational content to generate interest in the space\n-Royalty payouts to our holders on Optimism\n-ABT Soulbound, Loyalty and engagement token streamed to all holders.\n-Campaigns: Onchainsummer+Themultichain\n-Privy and ERC-4337 were implemented for the seamless onboarding of new users\n-Gas sponsoring via Biconomy for our first royalty payout for gasless royalty claiming\n-Participants in the European Blockchain Sandbox project where we aim to push legislators to embrace web3 principles.\n",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "QuantumFair has built a raffle smart-contracts protocol for Optimism. \n\nQuantumFair smart-contract allows to deposit their prize (an NFT and/or ERC-20 tokens) in a QuantumFair vault. The raffle owner sets out their parameters (ticket price, ticket asset, raffle objective, reserve price, and expiry date). API3 QRNG then chooses the winner(s). The prize and funds are trustlessly transferred to the winner(s) and predetermined addresses. \n\nQuantumFair has been in development since October 2022. \n\nCore Architecture:\nVaults: The contract enables secured asset storage for safekeeping during the duration of such raffles.\n\nRaffle: raffle service, enabling players to distribute assets from a creator to the participants in the activity.\n\nAPI3 QRNG: is a source of randomness for our services.",
    displayName: "QuantumFair",
    impactDescription:
      "QuantumFair's impact is in terms of smart-contract development and market focus on Optimism.\n\nSmart-contract finished development on Optimism: \n\n(1) QuantumFair uses Beacon Proxy contract using MCP in the entry point contract.\n\n(2) The user opens the contract and locks the assets in the dynamic vault.\n\n(3) With the contract in an open state, then users can register themselves as participants by paying or not a specified fee in ETH or a predefined ERC20 token.\n\n(4) After the time is over, the raffle is set to close. The contract makes a call to the Airnode through our requester contract to choose the winner.\n\n(5)Lastly, we retrieve the results and wrap the raffle contract in a finished state.\n\nMarket Reach:\n(1) We have had 25,200 impressions on X (twitter) in 4 days of going publicly live. ",
    pwCategory: "Gaming & Entertainment",
  },
  {
    contributionDescription:
      "In the past 4 years, DeFi Africa has propelled Web3 growth across the ecosystem through several means including education, community, events and partnerships. \n\nWe recently organized the Web3 Developer Workshop 1 in Tamale, Ghana (https://www.eventbrite.com/e/web3-developer-workshop-1-tickets-729980048977),  where we engaged with over 30 developers, equipping them with skills to learn smart contracts and deployment on the Optimism test network.\n\nThis initiative tackled a critical challenge for developers entering Web3 - the need for hands-on experience. We empowered participants to bridge theory and practice, fostering a deeper understanding.\n\nDuring the workshop, participants learned, engaged, and collaborated with peers to explore the latest tools and best practices for Web3 development.",
    displayName: "DeFi Africa",
    impactDescription:
      "Over the course of our Web3 Developer Workshop, we engaged with over 30 developers ranging from seasoned devs to individuals completely new to Web3 development.\n\nThrough the workshop series, participants acquired hands-on experience in deploying smart contracts on the Optimism test network. We observed a significant improvement in their proficiency with tools like Solidity and Remix IDE. By the end of the program, 50% of attendees successfully deployed their own smart contracts.\n\nAttendees also formed connections and created several joint projects. Many shared their intention to continue building on the Optimism network, demonstrating the lasting impact and growth within the Optimism ecosystem.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "beaconcha.in explorer is the backbone for Ethereum's consensus and execution layer. It is the only all-in-one (CL+EL) explorer and played a pivotal role during the merge and subsequent hardforks. Due to its design, core devs use beaconcha.in to simulate and test upcoming hardforks.\n\nTo support for homestakers and decentralization, beaconcha.in provides an open-source mobile app for both iOS and Android, aiming to enhance the solo staking experience.\n\nCurrently, the codebase is undergoing significant rework to support any EVM chain, including the Optimism network.",
    displayName: "beaconcha.in",
    impactDescription:
      "- beaconcha.in is the *only* consensus layer explorer in the ecosystem.\n\n- Easy way for Local Explorer and Testnet Simulation\ngobitfly/eth2-beaconchain-explorer/tree/master/local-deployment\n\n-  A significant backend rework to allow anyone spin up any EVM explorer, thus giving developers a new playground for the OP stack\n\n- Seamless User Navigation through Network Data:\nEnd users can navigate network-related data, without noticing the various layers of the Ethereum stack (CL/EL/L2).\n\n- Improved Staking Experience with our Open Source Mobile App\nOur open-source mobile app allows for monitoring of validators, enhancing the staking experience and contributing to decentralization.\n\n- Public API Access for Consensus and Execution Layer. beaconcha.in is the only CL API provider in the ecosystem.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "Blockhead is a universal crypto/DeFi/web3 browser, implemented as a data-agnostic client-side web app with swappable data sources. Under the hood is a suite of highly composable Svelte-based UI/UX primitives which I continuously update and integrate with new protocols and data providers at various Ethereum/web3 hackathons.\n\nBlockhead started as a hackathon project at ETHGlobal's ETHOnline 2020, and I have been building it in the open for the past three years as a public good.",
    displayName:
      "Blockhead: track/visualize/explore all of crypto/DeFi/web3 in ONE interface!",
    impactDescription:
      "Users of Optimism, Base, Zora, Mantle and other OP Stack-based chains enjoy using Blockhead's unified Portfolio interface to track their tokens, DeFi balances, and NFT activity in one place.\n\nBlockhead's Explorer view lets users browse transactions, blocks and verified smart contract source code from multiple OP Stack-based chains within a few clicks.\n\nBlockhead has dedicated App dashboards for several DeFi projects with smart contract deployments on OP Stack-based chains, and more are being added all the time.\n\nBlockhead's flexible, fully client-side, data-agnostic design allows users to quickly swap out the data sources powering the interface, providing an alternative experience to traditional dapp/block explorer interfaces with a focus on transparency, resiliency and decentralization.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "ChainEye contributes to Optimism in multiple aspects:\n\nOnchain Map - An overview of fundamental metrics on Optimism. Exploring attractive opportunities on Optimism such as yield farming, swap & lending, NFT mining, airdrop, Hot Contract, DAO governance, etc. \n\nMini Bridge - The cheapest and fastest solution for small-amount cross-chain transfers. Help users to bridge funds from/to Optimism with zero fees. \n\nBridgeEye - a multi-chain bridge comparison tool. Users can use this tool to find the optimal bridge option from other chains to optimism.\n\nCEX transfer fee - Find the cheapest route from CEX to Optimism.\n\nMultichain Gas - Check the gas hourly distribution and history for Optimism.\n\nRPC List - The best public RPC for Optimism in terms of height, latency, 24-hour status, privacy, etc.\n",
    displayName: "Chaineye",
    impactDescription:
      "1. Publish various articles about blockchain general and Optimism Collective to help users understand how to use dApps on Optimism. There are 4 articles about Optimism and the total views are over 200K.\n2. BridgeEye has directed over 200K assets from other chains to Optimism. This helps web3 native users find a better and cheaper way to bridge to Optimism. \n3. Chaineye Mini Bridge, beta going live on Oct.1, 2023, has over 450 transactions already, which benefits small retail investors adopting Optimism.  \n4. Our dune dashboard tracking Optimism projects helps users and developers evaluate each project and get an improved user experience. \n",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "The Rollup is an educational hub acting as a public good that has addressed the need for reliable and accessible information in the rapidly evolving world of DeFi. It has primarily catered to power users, developers, builders, and early contributors to DeFi, providing them with a wealth of resources to stay updated and informed about the latest trends across Ethereum, Layer 2 solutions, and other innovative blockchains.\n\nThe Rollup has solved the problem of information overload and complexity in the DeFi space by offering a podcast, a newsletter, and a community platform. These resources provide easy to understand education and relevant research, training users to use onchain tools with confidence and gain an edge in their activities.\n",
    displayName: "The Rollup",
    impactDescription:
      "The Rollup contributes to Optimism by providing educational content, fostering community discussions, and promoting the project to a wider audience. These contributions can help increase the adoption of the project, attract new contributors, and provide valuable feedback to the project team. This platform adds an educational public good for the entire industry to benefit from and learn more about crypto. Our content has helped users navigate DeFi better, protocols receive awareness about their project, and further aimed to bring the entire Optimism community to light.\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Attest Fest has launched an app that allows for batch creation of EAS onchain attestations on Optimism.  The app allows pasting hundreds of attestation items in CSV form. \n- Rows are validated against the attestation schema, errors are displayed to the user.\n- App supports both Safe multisig wallets and regular ETH wallets. ",
    displayName: "Attest Fest",
    impactDescription:
      "Attest Fest simplifies the creation of attestations for individuals and projects alike. Attest Fest allows any one to create attestations that contribute to the shared reputation space of the OP collective. Attestations are a valuable tool for determining Citizen Eligibility. ",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "Lodestar is a Typescript ecosystem for Ethereum consensus, developed by ChainSafe Systems. Our flagship products are our production-capable beacon chain and validator client. In addition, we maintain public repositories of useful tools for public use. Some of these libraries include BLS, SSZ, Discv5, Gossipsub, and Noise. \n\nActive work is being completed to support the OP Stack by enabling EIP-4844 blobs to benefit L2s like Optimism, reducing tx costs of L2 fees and increasing client diversity at the L1 protocol level. Additionally, some Lodestar team members have contributed to side projects such as Zipline Casper and to initiatives such as the Optimism Collective.\n\nWe fully support other teams in Protocol and projects which indirectly fund client team implementors such as Protocol Guild.",
    displayName: "Lodestar",
    impactDescription:
      "- Project Manager Phil has been a badgeholder since RPGF Round 2 and contributed towards the governance, distribution and discussions relating to public goods funding\n- Lodestar strengthened Layer 1 client diversity in order to better secure layers dependent on Ethereum L1 such as Optimism\n- One of a few consensus clients implementing blob functionality to benefit L2 in the form of cheaper, scalable transactions/computation for stacks like Optimism\n- Actively involved in the design, testing and implementation of core Ethereum protocol\n- Actively maintaining the Ethereum Javascript ecosystem for protocol including js-libp2p, blst-ts, SSZ, discv5, c-kzg node bindings, etc.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Brought standard decentralized Account Abstraction to OP and many other chains.\n\n- The team has been building it since 2021\n- 5 full-time team members\n- 100% public good, no VC funding, no token. Supported by the EF.\n\nProgress since RPGF #2:\n- Deployed the audited v0.6\n- Growing adoption:\n  - Transactions: >4M UserOps total, ~500k on OP+Base\n  - Users: ~850k accounts total, ~196k on OP+Base\n  - Paymaster sponsored gas: >$500k\n  - Used by popular apps on OP, e.g. CyberConnect\n- Progress on mempool decentralization and censorship resistance\n- UX and DevEx improvements\n- Ongoing support of numerous projects and integrations: wallets, dapps, infrastructure...\n- Promoting adoption: talks, workshops, hackathons.\n",
    displayName: "Account Abstraction - ERC-4337",
    impactDescription:
      "- Standardized account abstraction on OP.\n- Increased OP use: ~196k users, ~500k transactions.\n- Enabled popular apps on OP, e.g. CyberConnect.\n- Enabled new wallets with improved UX and security.\n- Onboarded many new devs and projects, supported dev teams, mentored in hackathons.\n- Built dev tools, SDK, documentation.\n- Improved decentralization and censorship resistance. Reduced dependency on centralized relay services.\n- Enabled sponsored transactions. Impact on UX, e.g. gasless governance voting to increase participation.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Randcast offers a blockchain-based verifiable random number generation service, featuring a user-friendly Smart Contract SDK for easy DApp integration. This fills a gap in Optimism, which lacks a secure randomness solution. Randcast utilizes a decentralized network of nodes and threshold BLS signatures to ensure transparent and tamper-proof randomness. Key features include versatility, security, uniqueness, high availability, and accurate fee estimation. Use cases encompass gaming, lotteries, NFT rarity assignment, blockchain consensus, marketing campaigns, DAO governance, generative art, and cryptographic applications.",
    displayName: "ARPA Randcast",
    impactDescription:
      "Randcast offers devs on Optimism a ready-made suite for embedding in DApps or Web3 games that need credible, unbiased, and verifiable randomness. Additionally, devs can tailor this suite via the SDK.\n\nRandcast's SDK highlights:\n\nshuffle: Creates a randomized array of numbers. Useful for card shuffles or lottery numbers.\ndraw: Picks a random subset from an array, ideal for lotteries, card draws, or airdrop selections.\nroll: Executes a random roll in a set size. Suitable for dice rolls, game results, or game character traits.\npickByWeights: Selects an index by weights, great for probability-based outcomes like NFT rarity or lotteries.\nbatch: Produces a set of random numbers from a seed, perfect for lottery sets or verification codes.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Our ambitious vision for open spatial computing has driven us to impact Optimism even if our vision isn’t fully realized yet. We’ve demonstrated new open-source smart contracts that incorporate innovative web3 concepts like partial common ownership & token streaming.\n\nWe ran the first-ever community QF round on the Gitcoin Grants Stack (4 ETH matching, >$1k direct donations). We helped identify & troubleshoot UX+technical issues, shared lessons learned, & inspired others to run QF rounds on Optimism.\n\nOur work to deliver the onchain AR publishing capabilities has yielded two general-use open-source libraries: Kubernetes Helm charts for easier OP Chain deployment management & a native SWIFT-MUD client to bring more onchain functionality/Autonomous Worlds to the Apple app ecosystem.",
    displayName: "Geo Web",
    impactDescription:
      "On the Geo Web, we've pushed the envelope both technically & how public goods can outcompete proprietary solutions. We've contributed intangible benefits to Optimism not just being a chain of forks and rinse/repeat playbooks. We’ve stretched users beyond simple NFT mints with our PCO digital land market & demonstrated how sustainable market mechanisms can compound value by funding public goods.\n\nWe’ve drawn new application builders to the OP ecosystem through our first community QF round & provided seed funding for them to make their own impact. \n\nOur open-source Kubernetes Helm charts support the practical realization of the Superchain thesis. Our Swift-MUD client brings onchain gaming & native app functionality to the world’s most valuable consumer user base (Apple app ecosystem).",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "As of today, Layer2News includes 500+ projects in Optimism ecosystem, which is almost the largest Optimism ecosystem library and is updated weekly, users can learn about the project categories, tokens, funding and other information at Layer2News.\n\nThe Layer2News team takes a deeper look at each project and divides them as follows: Wallet, Bridge, DEX, DeFi, NFT Trade, NFT, Game, Social, Infra. We try to educate users that DEX can be subdivided into: AMM DEX, CFMM DEX, vAMM DEX, DMM DEX, CLMM DEX, and so on.\n\nBecause of our in-depth knowledge of each program, we rate the programs from information such as the program team, community buzz, program outlook, and program operations to avoid scams.\n\nLayer2News also lists OP Stack and Layer2 chains based on OP Stack separately.",
    displayName: "Layer2News",
    impactDescription:
      "For new users, they may have clicked on the wrong link and downloaded a fake MetaMask wallet, and they may not know how to bridge assets to Optimism.\n\nUntil Layer2News was launched, we saw a large number of KOLs discussing Layer2News, which included the largest number of projects in the most concise presentation and provided shortcuts for new users to get started. Our initial intention is simple, users can know what the project is doing, whether the project should be involved or not, so that users can avoid being scammed, and so that users can find excellent projects with as few mouse clicks as possible.\n\nAt the beginning of Layer2News' launch, 2k-3k users browsed the site every day, and until today, there are 100+ users using Layer2News every day as well.",
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "DeFi France is one of the biggest crypto community in France. We made monthly meetups in various cities (Paris, Toulouse, Lyon, Bordeaux) foster local connections. DeFi webinars educate newcomers. \nOur 3,000-member Discord, with 600 active weekly, boosts communication and support. Live Twitch and YouTube videos broaden knowledge and reach a wider audience, aiding crypto adoption.",
    displayName: "DeFi France",
    impactDescription:
      "We have enabled the adoption of DeFi on ethereum and optimism through our various meetups and discussions on our discord. We've brought optimism to a wide audience through our educational content. In addition, numerous discussions on the optimism collective and op stack technologies have been held within our French-speaking community.",
    pwCategory: "International & Multilingual Support",
  },
  {
    contributionDescription:
      "We're a DAO accelerator for patient communities, and we've crafted two tools on Optimism:\n\nToken Vesting Contract: It allows bounties for patient contributors, ensuring long-term commitment while granting immediate voting rights. This promotes genuine community participation over speculation.\n\nNFT Badges via Otterspace: To meet Swiss regulations, we issue NFT badges post KYC/AML checks for contributions over 1,000 Swiss Francs. The NFTs, with embedded metadata, ensure contributors are verified, making the donation process seamless and compliant.\n\nYour support can amplify our community-driven mission.",
    displayName: "Bio.xyz",
    impactDescription:
      "At our DAO accelerator for patient communities, our contributions on Optimism have been twofold:\n\nToken Vesting Contract: Deployed on Optimism, this not only saved costs but also optimized transaction speeds. It promotes genuine, long-term community involvement by providing immediate voting rights to contributors, aligning with Optimism's ethos of community empowerment.\n\nNFT Badges via Otterspace: To streamline the compliance process, we used Optimism for efficient NFT minting, ensuring that sizable contributions remain transparent and trustworthy. This approach has showcased Optimism’s potential in regulatory use-cases, further diversifying its applicability.\n\nOur efforts aim to enhance Optimism's community-centric vision.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "The Optimism Academy is a place where people can learn about Optimism in a structured and engaging way.\n\nWe created a series of to-the-point, engaging video courses combined with interactive quizzes and “real-world” assignments to facilitate understanding of the Collective and its underlying vision and tech.\n\nOur endgame is to have courses on all the major topics concerning Optimism. We started with an intro to Optimism course which features more than 20 videos covering:\n\n1. The Optimism Collective and it's vision\n2. Public Goods and RetroPGF\n3. Optimism Technology\n4. Optimism Governance\n5. How to get involved\n\n",
    displayName: "Optimistic Academy",
    impactDescription:
      "We created the first Optimism Academy and an Intro to Optimism course that makes learning about Optimism 10x easier.\n\nThe course features more than 20 videos (so far), all tied together in a structured way and complemented with quizzes and assignments.\n\nAfter months of work, we launched the academy a few weeks ago and had more than 30 people joining, despite not doing any marketing or publicity apart from publishing the link on the forum.\n\nWe've recently created Twitter and Youtube accounts to start distributing the content and reaching more people, but it's too soon to see it's real impact.\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Crypto has an education, user engagement, and retention problem. Layer3 is addressing this with immersive, informative Quests and Journeys anchored by on-chain actions.\n\nWe've onboarded a substantial user base to Optimism, Base, and Zora, educating them on key concepts such as security basics, switching networks, and revoking smart contract approvals, spanning DeFi, NFTs, and other emerging sectors.\n\nLayer3 ensures smooth cross-chain transfers with our native Bridge.\n\nWe champion Web3 democracy by educating users on direct voting or delegating OP tokens. Layer3 has 5,600 delegations and 179,000 OP voting power.\n\nIn total, we've empowered over 284,000 users to complete more than 5.9 million on-chain transactions on Optimism, all at no cost to the user.",
    displayName: "Layer3",
    impactDescription:
      "First, Layer3 brought users to Optimism through our native bridge, accounting for 89,000 bridging transactions to Optimism.\n\nThen, we provided open and immersive education verified by on-chain actions. Layer3 Quests are responsible for diving 285,000 users to make 5.9 million on-chain transactions across over 40 unique dapps on Optimism.\n\nFinally, we contributed to the OP superchain thesis by catalyzing 65,000 users to complete 364,000 transactions on Base. We celebrated the Zora OP Stack launch while encouraging artists to create their own collection, learn about music NFT and collect a Zorb in the process – driving 144,800 users to transact on Zora. ",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Hello, I am working alone on my website Defigourmet a Layers 1&2 Transactions Protocols Tracker. The main idea of the website is to find all transactions from different protocols / Layer 1&2 on a single website. The contributions i wish is help to improve the customer experience and add a lot of protocols. If I get any help, I will focus on implementing the Optimism protocols. ",
    displayName: "Defigourmet",
    impactDescription:
      "The primary objective of the website is to aggregate all transactions from various protocols, including Layer 1 and Layer 2, onto a single platform. The primary benefit is to enhance the user experience for both professional and non-professional Optimism users, allowing them to easily track all their protocol activities.",
    pwCategory: "Security & Cross-Chain Solutions",
  },
  {
    contributionDescription:
      'Revoke.cash provides crypto users with security services. \n\nThe main service is a token approvals dashboard that works with 60+ networks. The second service is a browser extension that warns users when they are about to perform potentially harmful actions, such as token approvals or NFT listings. This extension works with every EVM network out of the box.\n\nWe also provide educational content, both on Twitter and on our new knowledgebase section.\n\nThis year we created a number of important new features. One big feature is the "exploit checker" to quickly see if they are vulnerable to exploits like the big SushiSwap exploit in April this year or the recent Galxe hack. \n\nOther features include invalidating offchain signatures, "wallet health" metrics, support for 20+ new networks and more.',
    displayName: "Revoke.cash",
    impactDescription:
      "End users in the Optimism Collective and larger crypto ecosystem can use the Revoke.cash token approvals dashboard and browser extension, and consume our educational content. By doing so they can protect themselves from hack and scams. And by using our new exploit checker tool they can check if they are already affected by such exploits, and recover control over their wallet.\n\nThis directly benefits end users in the Collective by saving them money that they might have lost to exploits. It also indirectly benefits companies and projects building in the Collective by providing infrastructure that gives their users more confidence and peace of mind when using decentralised applications.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "We're a Native DEX and Launchpad, we build on Base, a layer 2 built base on OP Stack. First start we build a NFT collection on Ethereum, then we move our collection to OP Mainnet. Then we build a DEX on Base and grow our community to 200k follower https://twitter.com/DackieSwap.",
    displayName: "DackieSwap",
    impactDescription:
      "We're a Native DEX and Launchpad, we build on Base, a layer 2 built base on OP Stack. First start we build a NFT collection on Ethereum, then we move our collection to OP Mainnet. Then we build a DEX on Base and grow our community to 200k follower https://twitter.com/DackieSwap.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Uniting years of experience and deep expertise on infrastructure research & DeFi, we have dedicated 100s of hours towards holistically researching Optimism. Based on our research we have compiled the most comprehensive report that has ever been produced on Optimism, which we provide to the OP community for free as a public good.\n\nOn >100 pages we walk readers through:\n\n- Scaling Ethereum\n- Modular Thesis\n- Rollup Mechanics\n- OP Stack\n- Superchain\n- Key Metrics\n- Ecosystem & Community\n- Governance & Tokenomics\n- Team, Funding & Financials\n- Pumpamentals & Risks\n\nThe report had a profound impact on the community, educating existing users, inspiring new users to join the OP collective & encouraging developers to build on OP technology. Our impact is evidenced by the metrics of our posts on X!",
    displayName: "Redacted Research",
    impactDescription:
      "Our holistic research educates & empowers users to understand Optimism's technology & ecosystem, familiarizing them with the big potential the tech bears, the limitations it faces & the trust assumptions users are subject to. \n\nBased on feedback received, this resulted in many new users joining the OP collective & existing users feeling more comfortable to actively interact with the network. \n\nAlso, the granular technical breakdown & ecosystem analysis have proven to resonate well with builders, as it introduces devs to the vast opportunities Optimism's technology & ecosystem provide. Based on talks with builders, our research has inspired a significant # of innovators to start building on OP Mainnet and/or OP Stack.\n\nThis profound impact is proven by the strong metrics of our X post(s)!",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "L2 blockchains are promising technology with inherent risks. It’s clear users need a basic web3 training program to guide & protect their first steps.\n\nBankless Academy provides a free learning journey following Bankless & Ethereum values. We are onboarding users to Optimism, to enjoy optimized transactions in an ecosystem valuing community ownership, public goods & self-sovereignty.\n\n- Teaching essential web3 skills: wallet creation/security, dApp use, infrastructure theory, etc\n- Hosting an Optimism onboarding journey: funding your wallet, using DEXs, governing/delegating on Optimism\n- Building open-source education infrastructure: lessons w/ quests & NFT badges, sybil-resistance w/ Gitcoin Passport, multilingual content, community corrections, and hosting collectible content on Optimism",
    displayName: "Bankless Academy",
    impactDescription:
      "Increasing participation in Optimism Collective governance:\n\n- 240+ Explorers delegated in Optimism governance, through Optimism Governance lesson & delegation walkthrough\n\nImproving Optimism end user experience & adoption:\n\n- engaging format\n- free-to-use\n- teaching important basics required to navigate Optimism\n- building web3 identity by distributing 11,100+ badges to Explorers (protected by Gitcoin Passport) for lesson completions\n- 2370+ Explorers verified on Optimism, through ‘Layer 2s’ lesson and ‘How to Fund a Wallet on Layer 2’ walkthrough\n- 150+ Velodrome Explorers swapped on Optimism, through ‘Decentralized Exchanges’ lesson and ‘How to Swap on a DEX’ walkthrough\n- minted 145x Explorer’s Handbook (walkthroughs) NFTs on Optimism\n- minted 19x lesson collectible NFTs on Optimism",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Developer Relations is essential for helping the web3 ecosystem grow. At DevRel Uni, we teach people how to start in DevRel, while also improving the overall developer experience for protocols such as Optimism. We provide education for free to students all over the world that equip them with the skills, knowledge, and experience they need to excel in DevRel, while helping protocols foster stronger relationships with their developer communities. \n\nSo far we have trained 4 cohorts, each of them of 30-35 in size, from over 916 applications. After the theoretical session that is delivered by a professional DevRel, our students solidify their knowledge with workshops and homework assignments where they get to work on real world tasks that a DevRel would face (https://bit.ly/3S7IeMY).",
    displayName: "DevRel Uni",
    impactDescription:
      "DevRel Uni empowers students to both learn and create valuable DevRel assets across various protocols, all while championing the growth of the web3 ecosystem. Our program is a valuable public good (https://bit.ly/46FKUWE) for the entire ecosystem. Although it doesn't exclusively target a specific protocol, the knowledge gained also seamlessly translates to Optimism",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We maintain ChainList, a site used by >1.2M users monthly to add new chains, switch chains, review RPCs available on any chain, and switch RPCs as they need.\n\nThis involves us maintaining an updated list of RPCs, curating them, and also reviewing the privacy policies of all RPC providers to give them a rating and summarize the most relevant information to give it to our users directly so they can make informed decisions on which RPC to use without having to read the full privacy policy of each RPC, which are very long.",
    displayName: "ChainList",
    impactDescription:
      "Millions of users (concretely 1M-2M each month) get a much more convenient and safer experience onboarding to optimism when adding the chain through our site, as we curate the RPCs there to avoid any scam RPCs that they could run across on the wild otherwise.\n\nBy summarizing the privacy policies of all RPCs we make it viable for users to make choices based on that, as the alternative of having to read the multiple pages of legalese on the privacy policy of each individual RPC is just not viable for users to do. We aggregate this work so we just do it once and then everybody can benefit from it.",
    pwCategory: "Cross-Chain Interoperability",
  },
  {
    contributionDescription:
      "We built Optimism Prices, a set of open source smart contracts that can price any ERC20 asset that exists in a liquidity pool on Optimism or Base, which is capable of entirely replacing the need for centralized price APIs. The contracts support pricing that requires complex routes with many hops, support non-standard ERC20 implementations and non-standard AMM curves, and are even optimized to allow for pricing 100+ tokens in a single function call so that it can best take advantage of the public Optimism RPC without using unnecessary computation and getting throttled. The Optimism Prices contracts have been iterated upon for many months with direct feedback from some of the largest projects in the Optimism ecosystem, like Velodrome and Aerodrome, which use Optimism Prices in production.",
    displayName: "Optimism Prices Contracts",
    impactDescription:
      "Optimism Prices has encouraged the growth of the Optimism developer community by building a component of the stack that is not only public, trustless, and reliable, but also superior to shortcut centralized solutions. Optimism ecosystem devs no longer need to shell out cash for centralized pricing APIs with spotty uptime, instead they can merely execute a single RPC call using Optimism Prices. Optimism Prices' sole focus and dedication to the Optimism ecosystem allows us to maintain well-engineered integrations for the popular destinations for tokens on Optimism and Base, which lets us guarantee 100% coverage for pricing any asset. As a result, Optimism Prices is the sole price feed relied on by Velodrome and Aerodrome, the #2 and #1 projects by TVL on OP Mainnet and Base respectively.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "The team at DappRadar has supported Optimism into its platform since March 2022 by integrating the Optimism chain on rankings pages. Any Optimism dapp developer can list their dapps on DappRadar to showcase their activity to DappRadar’s blockchain-educated audience. This allows users to discover new Optimism dapps and identify the next project to use and invest in, educating and bridging DappRadar users into the Optimism ecosystem. \nAdditionally, DappRadar has made more integrations and support for Optimism Collective dapps by integrating the biggest Superchain - Base in August 2023, providing even more insights to users. On top of that, the team at DappRadar created numerous pieces of content to highlight positive Optimism activity within the dapp industry.",
    displayName: "DappRadar",
    impactDescription:
      "Optimism and Base developers leverage DappRadar’s 420k monthly unique users to their dapps. DappRadar core audience consists of blockchain experts. Integration has opened up Optimism and Base to the DappRadar community, who use the site as an informational hub for dapp discovery. The in-depth dapp data available on DappRadar, services the needs of existing Optimism users, while also attracting traders and investors from other communities, be it for collecting, playing, or investing.\nIn addition to dapp data, DappRadar provides educational content to its community, the success of which can be seen in the impact metrics below.\n\nNB: pageview and click metrics only include chain-specific searches and do not include numbers for users comparing Optimism/Base to other chains or multichain dapps.\n",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "The \"Eternal Garden: ORIGINS\" project  showcased Optimisms accessibility and efficiency for Music NFT transactions. The highlight was the significant engagement it drove: raising 7.4 ETH by selling over 7700 Optimism Music NFTs to 1100+ collectors. Unique partnerships led to innovative smart contract interactions & experiences for fans and collectors, ensuring the project's success. We believe this improved Optimism's prominence and credibility while drawing significant attention to the platform.  ",
    displayName: "Eternal Garden: ORIGINS",
    impactDescription:
      'Developer Ecosystem:\nOur contributions to the "Eternal Garden: ORIGINS" project played a pivotal role in enriching the Developer Ecosystem of the Optimism Collective. By collaborating with Coop Records, we developed an innovative custom smart contract that interacted with all seven songs simultaneously.\n\nEnd User Experience & Adoption:\nThe seamless integration with The Box allowed collectors to purchase on any chain without bridging. This reduced friction and complexity, making the NFT purchasing process more intuitive for end users. Moreover, the incentives for purchasing the full album was key in driving adoption. By selling over 7700 Optimism NFTs to more than 1100 collectors, we brought significant attention to Optimism and onboarded a new wave of users to the Collective. ',
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      'OPChainList provides vital information on OP Stack built blockchains, serving all users regardless of blockchains\' phase. Our dedication revolves around effectively introducing the community to all OP Stack built blockchains.\n\nKey Features:\nInclusive listing of all OP Stack built blockchains\nSafety measures through dedicated social media buttons, protecting the OPtimism community from potential scams\n"Interviews" section providing insights into blockchain jobs like DevRel and promoting blockchain teams within the OPtimism community\n"Apps" section customized for each blockchain page, fostering growth in emerging ecosystems\n\nAccomplishments:\n20 OP blockchains listed\nAttracted 120 new users from 22 countries, including the USA, UAE, Turkey, France, Nigeria, Canada, within the last 15 days.',
    displayName: "OPChainList",
    impactDescription:
      "Problem Addressed:\nThe lack of centralized, curated information on OP Stack built blockchains was hindering the growth and understanding of the OPtimism community. OPChainList emerged as a solution to bridge this crucial information gap.\n\nBeneficiaries:\n\nNew users seeking information about OP Stack built blockchains\nEmerging OP Stack built blockchains in need of exposure and support\nExisting OPtimism community members seeking a reliable resource to navigate the complex world of OP chains\n\nImpact:\n\nTangible: 120 new users from 22 countries within a short time frame\nIntangible: Strengthened community trust and knowledge sharing among OPtimists\n\nMetrics:\n\n20 OP blockchains listed\n120 new users from 22 countries within the last 15 days\n3 interviews conducted, fostering community engagement",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "In 2022, Sushi pioneered cross-chain swaps via LayerZero's Stargate, bridging liquidity and users across networks and fostering user cross-pollination within ecosystems. This first-of-its-kind capability in DeFi enables seamless asset transactions and liquidity provisions across multiple networks, enhancing user migration pathways to OP/Base from platforms like Ethereum Mainnet and Arbitrum. As an early Base protocol adopter, Sushiswap accounts for over 15% of Base's trade volume, affirming its role as a crucial liquidity nexus. This grant aims to fortify Sushi's position within the OP Stack, leveraging revamped tokenomics and robust liquidity incentives to optimize our offerings and user engagement, aligning with our extensive network that has facilitated over $268B in trades.",
    displayName: "Sushi",
    impactDescription:
      "Sushi's cross-chain swaps enable users from various chains to easily join the OP stack. These pioneering efforts foster user cross-pollination, securing strong liquidity vital for projects on the OP stack. Our engagement in the Optimism ecosystem is marked by a significant $239.6M trading volume on both chains YTD, contributing to 15% of Base's total activity. This throughput highlights our essential role in boosting the stack's liveliness and reach. More than just participants, we lead tech evolution, simplifying asset transfers, and liquidity solutions, affirming Sushi's commitment to broadening decentralized finance on the Optimism stack.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "As a rollup, Optimism leverages Ethereum for settlement & security assurances. It also uses several core infrastructure components (client implementations, specifications, test suites, etc) developed and maintained by Protocol Guild contributors over the years. Optimism also directly benefits from protocol upgrades such as proto-danksharding (EIP-4844), which will reduce the fees its users need to pay.\n\nAll of this work supports a mutual relationship;\n- Ethereum provides an infrastructural foundation with particular characteristics (eg social, political, technical, economic) that only it can provide\n- Optimism produces lower-cost blockspace, while still inheriting some of Ethereum's characteristics, but at the same time allowing for more experimentation",
    displayName: "Protocol Guild",
    impactDescription:
      "- Optimism can rely on Ethereum for settlement & security assurances, in no small part due to the research & implementation work that went into migrating to Proof-of-Stake, which helped make Ethereum the most secure & decentralized smart-contract platform\n- Guild members' efforts to reduce rollup fees through proto-danksharding & danksharding will expand Optimism's use-cases and user base\n- Optimism’s execution engine is a fork of Go Ethereum aka Geth, which is maintained by Guild members\n- Optimism leverages the Ethereum Virtual Machine with its EVM-equivalent architecture, making Optimism's ecosystem more accessible to builders\n- Ethereum's core protocol development has played a key role in establishing Ethereum's prominent reputation, lending credibility & legitimacy to Optimism as well",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Since Mirror launched Writing NFTs on Optimism Network as a default, we've contributed to the growth of the Optimism Network by being an app where other projects can share their ideas via Optimism NFTs. Early on we knew that for \"collect\" to be the new \"like\" users would need to find inexpensive and quick options for minting NFTs. That's where Optimism came in as an obvious choice, and we've since been one of Optimism's partners in bringing a more mainstream use case to the rollup. ",
    displayName: "Mirror",
    impactDescription:
      "Over 1 million Writing NFTs have been minted on Mirror using Optimistic Ethereum. That's more than any other network we support as Optimism is the default network in our settings. We have helped more people bridge to Optimism through our UX and encouraging users to collect entries. ",
    pwCategory: "Digital Identity & Social Privacy Innovations",
  },
  {
    contributionDescription:
      "𝗧𝗟𝗗𝗥\nA Dune dataset that makes it easy to query revenues and costs for all OP stack rollups and other L2s\n\n𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻\nI created a Dune Spell table that has data on rollup \n- on-chain revenues (transaction fees)\n- costs (posting data to L1) \n- and raw materials (L1 calldata) of rollups\n\nIt automatically updates to support new OP stack rollups.\n\nHere is a demo showing how to query Base revenue using the new Spell\nhttps://youtu.be/T2_j_JlGeDQ\n\nThe dataset is a great tool that analysts can use to generate rollup business metrics for OP stack teams and their communities.",
    displayName: "Rollup Economics Dune Spell",
    impactDescription:
      'This Dune Spell is an open-source model that makes it easy for analysts to surface useful rollup economics insights and share those with the community. \n\nIt\'s already being used by popular L2 Dune dashboards with more than 730 stars combined. For example, \n- https://dune.com/niftytable/rollup-economics (built by me)\n- https://dune.com/sealaunch/rollups-profits (built by the SeaLaunch team)\n\nThe open-source code is also being used by analytics platforms outside of Dune::\n\n"At Artemis, we routinely use the roll-up economics spellbook as a reference to understand how to calculate profit across OP Mainnet, OP Stack chains, and other roll-ups in the Ethereum ecosystem."\n- Nirmal Krishnan\n  [Head of Engineering at Artemis.xyz]',
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Here are some activities we delivered outside of the scope of the mission we presented and of Retro PGF2: \nWe gave grants for 3 people to assist Permissionless, we paid for the accommodation and the conference tickets. In total, the grants represented more than $4,000 USD\nWe provided scholarships for 7 devs to take a Development bootcamp with LeWagon; in total, there were more than $16,000 USD in scholarships\nWe've produced more than 50 episodes since we received the last RetroPGF\nWe released a specific episode to discuss a report we created about Optimism. The report was part of the mission, but the podcast episode was not part of the scope \nWe've produced more than 45 newsletters with diverse educational content; \nWe have invested more than 20,000 USD in educational content",
    displayName: "Espacio Cripto",
    impactDescription:
      "Some examples of how Espacio Cripto has helped the Optimistic vision:\nWeb3 name: brichis, Optimism Delegate\nEC has been instrumental in my journey, offering me a platform to inspire others. Here, I learned that success isn't about bull markets; it's about building for the future #WinandHelpWin\nWeb3 name: Chuy García, Dappnode community manager\nEC kickstarted communities nationwide by establishing the free sharing of knowledge as a core value in its own community. Most of us Mexicans in the ecosystem are here, in one way or another, thanks to Espacio Cripto.\nWeb3 name: AnaTech, Community manager @ Arbitrum Foundation\nEC was my starting point, where I found many friends and opportunities. At Espacio Cripto, I continued to share, learn, and gain new abilities and friends. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We implemented Optimism inside Verso Wallet and released it to all users both on Android and iPhones.\nTested on 50+ mobile devices.\n\nWe added following features : \n- Optimism chain to our mobile wallet (50.000 users).\n- Swap in Optimism\n- Bridge from/to Optimism \n- Configured Optimism tokens in our swap and market data section.",
    displayName: "Verso",
    impactDescription:
      "More than 50k EVM users have now access to Optimism.\nVia Verso use can have : \n1/ On-Ramp directly to Optimism with credit card (Apple pay, Google Pay) or wire purchase.\n2/ Access to Market data for Optimism tokens.\n3/ Swap tokens in Optimism using Paraswap aggregator. ",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Since RetroPGF 2 in March we've doubled down on our work to push forward the developer ecosystem of Optimism, the OP Stack, and the Superchain. In the last 207 days, 639 projects have been built at our events utilizing Optimism Mainnet or the OP Stack. That's an average of 3 projects a day!\n\nIn April, we ran Autonomous Worlds, an on-chain gaming hackathon powered by the OP Stack & MUD (0xPARC). Our favorite hack was Mudtendo, a customized OP Stack that allowed participants to use a 1985 Nintendo console to create collaborative stories.\n\nOur Aug hackathon, Superhack, was entirely focused on the Superchain vision and the OP Stack. Timed with the launch of Base, we collaborated with OP and every major OP Stack team to run a 1200-person, 2 week-long hackathon with too many great hacks to list.",
    displayName: "ETHGlobal",
    impactDescription:
      "Our events and community has been the place where some of the best developers from around the world come to learn, tinker, build, and ultimately deploy on Optimism Mainnet, custom OP Stacks, and other OP Stack chains.\n\nFor many in the community, an ETHGlobal hackathon is their first introduction to the Optimism Collective. We aim to continue to be one of the most effective channels for attracting talented developers to the Optimism ecosystem.\n\nThrough our events, we have not only encouraged developers to adopt Optimism technology, but we have also collaborated with OP Labs and other community members to enhance developer documentation, develop engagement strategies, and identify bugs in onboarding processes, ultimately smoothing out the journey for anyone looking to build on Optimism.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Airstack provides AI-powered APIs for searching across blockchains, dapps, and protocols and easily integrating into any application. \n\nAirstack is rapidly becoming go-to middleware for web3 ecosystems such as XMTP, Lens, Farcaster, 6551, POAPs, NFTs, and Mar-Tech. The company's AI-powered APIs uniquely enable devs to integrate cross-chain, cross-dapp, cross-protocol -- enabling composability and saving devs months of work and costs. Before Airstack devs would have to learn each protocol and keep up with their contracts, reorgs, versions and build backends to ingest their data; with Airstack they literally just plug-and-play APIs and keep moving. \n\nIn Q3 2023 Airstack extended its capabilities to Farcaster/Optimism and Base blockchains. ",
    displayName: "Airstack",
    impactDescription:
      "Airstack APIs enables developers to easily create Farcaster applications and integrate Farcaster with the broader Ethereum ecosystem. For example, at ETH NYC in September 2023, 25 teams used Airstack to build apps that combined data from Farcaster, Lens, XMTP, NFTs, POAPs and more.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "1. Project-specific dashboard. Dashboard that highlights OP Mainnet’s key KPIs (fees, revenue, token incentives, earnings, active users, core developers, etc.).\n\n2. Superchain explorer. Dashboard that highlights the top 1,000 gas-consuming contracts on both OP Mainnet and Base (including labels and 20+ key metrics).\n\n3. L2 economics research. Educational article with a walkthrough of L2 economics. \n\n4. Blockchain economics research. Educational article with a walkthrough of blockchain economics, with a highlight of OP L2.",
    displayName: "Token Terminal",
    impactDescription:
      "We showcase Optimism’s financial and alternative KPIs in a comprehensive set of dashboards that allow the protocol’s stakeholders to follow its development and benchmark its performance to competitors. \n\nIn addition to Token Terminal’s Crypto Twitter presence, we’re also the first crypto data provider to be available on the Bloomberg Terminal. Through this channel, we are able to share OP related data to a unique crowd of institutional investors.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "We've recently launched Wallet Watch, Webacy's real time notification, monitoring, and alerts system, on Optimism. The service has been well loved on Ethereum mainnet (over 25k users, 300k transactions a month, over 150M assets under monitoring), and we are so excited to bring Webacy safety tools to the Optimism ecosystem.\n\nWallet Watch allows users to monitor all of their wallets and accounts, receiving real time SMS and email notifications whenever ANYTHING interacts with their wallet. This means inbound and outbound transactions, airdrops, royalty payments, and even things like spam drops, drains, and other potentially malicious transactions. We believe knowledge is power. We're so excited to bring these self-custody safety tools to Optimism, making the chain safer for users!",
    displayName: "Webacy",
    impactDescription:
      "Webacy began in order to build better safety and UI tools for users to navigate the blockchain. We found great success on Ethereum mainnet, and were excited to bring our services to the amazing communities and projects on Optimism. After a lot of hard work, its' finally live, and we're so pumped to bring these safety tools to the ecosystem! Now any user on Optimism can monitor interactions, transactions, and assets on-chain, for as many wallets as they'd like! This not only brings more transparency to the space, but it also helps with the entire user experience, trust, and interaction across the communities.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Since 2020, zenbit.eth has undertaken an extensive collaborative research and development initiative with 27 talented individuals with a diverse skill set, from around the world. Together, they have developed over 25 public Open Source Projects, primarily at ETH Global hackathons.\n\nThese digital solutions encompass seven categories, leveraging advanced Ethereum technologies to address cities´ challenges like transparency, efficiency, and coordination. Our main contribution is the development of over 60 Solidity contracts deployed across multiple EVMs, with ≈28% of these contracts tested on the Optimism mainnet or Op Goerli networks. This has resulted in gas fee expenditure of  .116 ETH, bridging ≈10 ETH to the OP mainnet, and locking ≈4k USD in 2 OP chains until 2026.",
    displayName: "zenbit.eth",
    impactDescription:
      "- 21 members in zenbit discord server\n- more than 38k USD distributed among talent and zenbit operation expenses\n- 471 Gitcoin Beta Projects analyzed \n- 19 projects voted in Gitcoin Beta Mainrounds\n- 111 ReFi dao projects analyzed\n- Zenbit.eth is now officially registered as a commercial entity in Mexico.\n- 4 IP projects have been registered as trademarks in Mexico.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "RegenScore is an experiment created to support a more inclusive OP Citizen House. It can be used for the qualification of ecosystem members through a transparent, fair, and data-driven approach. Thus providing better governance access for public goods funding to verified regen actors across the wider web3 ecosystem. \n\nCurrent contributions include:\n\n- Analytical model for behaviour scoring described in documentation and supported by statistical sampling\n- A website for checking out your score and minting the on-chain attestation (including a schema, with separate scoring just for OP behaviours) (open source)\n- A series of communications with the OP and web3 community for feedback and engagement over various channels",
    displayName: "RegenScore",
    impactDescription:
      "The key impact we see so far is a good number of motivated and high-performing potential candidates for the citizen house:\n\n- Within a limited communication campaign the number of good candidates is already comparable to the current citizen house, proving the growth potential\n- Scores vary, but a median score of attested users is close to the level of the current OP Delegates (based on the formula and on-chain stats) \n- Users needed to pay a small fee on OP (to cover the fees for the on-chain writing), so it meant they had funds on the OP chain and were engaged in the reputation/governance game",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Kiwi helps crypto builders find the best content without social media noise. Our community consumes hundreds of sources a month to handpick and upvote top content for crypto founders & developers. From tweets, through essays, up to Dune dashboards and GitHub repos.\n\nWe a use P2P architecture - similar to Farcaster - so that most heavy data is stored offchain and only the most important elements, such as delegations & NFTs are stored onchain. The architecture promotes credible neutrality as it lets users run p2p nodes or clients with their own UI & moderation rules, such as kiwinews.lol run by our contributor, freeatnet or Kiwi News Search by matallo.\n\nWe are 100% Open Source. Our R&D on scaling ETH via the P2P protocol and OP key delegation  can be reused by others.",
    displayName: "Kiwi News",
    impactDescription:
      'UX: \nWe separate signals from noise. We are a trusted news source for builders, hence, we‘re strengthening the ecosystem. We had 5300+ unique visitors. We have around 80 monthly curators and 1,200 monthly readers.\n\nOP Stack:\nOur p2p protocol helps scale ETH. We use NFTs to authorize who can upvote/submit. We implement identity, i.e., FC and ENS. We store 4700 EIP-712 upvotes on our “side p2p network," to minimize onchain storage. We’ve delegated 123 keys to improve UX. We help to scale OP.\n\nDX:\n4 people (including us) have been shipping on Kiwi since April: Kiwi Search, kiwinews.lol and us. Delegator2 is a web3 UX breakthrough. We’ve co-organized DeSo meetups in Denver, Paris & Berlin. We gave talks at Protocol Berg, and Broadcast Summit. We’re growing DeSo on OP.',
    pwCategory: "Blockchain News & Media",
  },
  {
    contributionDescription:
      "EIP are standards for the Ethereum ecosystem. It connects the whole Ethereum community: Ethereum, Optimism, developers, builders, startups, EIP editors/authors, tech writers, etc., but the connections through EIP are weak.\n\nThe EIP Fun project consists of a Website, Community, EIP Fun Newsletter, EIP Tech workshops, etc. to serve EIP builders and scale the whole ecosystem.",
    displayName: "EIP Fun",
    impactDescription:
      "As of October 17th, we have published 17 issues of the EIP Fun Weekly (English and Chinese version), providing the Ethereum community with updates, important information, and fun memes related to EIPs.\n\nThrough community-building efforts (primarily on Twitter and Telegram groups), we have connected with some EIP authors (especially new authors) to help gather feedback from the community for their ideas and created an open space for builders to connect with one another and share thoughts.\n\nWe also worked on EIP tech workshops like ERC-6551 Workshop https://docs.google.com/presentation/d/1Mfo3hlTYlhu6aa-VbaOjfrn-8RJ0LQfVVzLGiYb2wz4/edit#slide=id.g2423be42a0f_0_214. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Forum Passkey Wallet:\n\n- In April this year we were the first team to launch a passkey wallet to a mainnet (Polygon for cheapest gas, since p256 signatures were expensive).\n\n- We are active members of the Account Abstraction & ERC-4337 communities, and regularly assist other teams with information regarding passkeys, webauthn, and ERC-4337 accounts.\n\n- Our contracts are open source, this includes our individual & group ERC-4337 passkey wallets, and all of our test utils for generating passkey signatures in Foundry. These tests are regularly shared in the 4337 mafia telegram group, and are used by a number of teams in the AA/Modular Account space.",
    displayName: "Forum",
    impactDescription:
      "- Our contracts and ERC-4337 passkey tests have been quoted dozens of times in the 4337 Mafia, Web Sessions, and Modular Accounts Telegram chats. \n\n- Our connect with Farcaster feature generated 500+ signups. These profiles have the option to deploy an ERC-4337 passkey account.",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "abi-to-sol is an open-source tool that auto-generates Solidity interfaces from ABI files. This streamlines smart contract deployment and interaction on Optimism's Layer 2. The tool aids in quick project migration to Optimism and serves the broader community by reducing manual effort. While not Optimism-specific, its utility in simplifying contract deployments makes it valuable for Optimism adoption.",
    displayName: "abi-to-sol",
    impactDescription:
      "abi-to-sol enhances interoperability within the Optimism ecosystem by automating Solidity interface generation from ABI files. This significantly lowers the barrier to interfacing with existing Optimism contracts. Without abi-to-sol, programmers would have to manually write these interfaces, a tedious and error-prone task. By eliminating this manual effort, the tool fosters a more interconnected blockchain ecosystem, encouraging the creation of complex, interlocking smart contracts on Optimism. Users across the smart contract development ecosystem regularly applaud abi-to-sol for its utility in streamlining this process.",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "We've developed the first audited, production-ready P256Verifier smart contract. Our open-source implementation has enabled developers to create better UX for secure self-custody on Optimism and Ethereum-equivalent L2s more broadly.\n\nP256 ECDSA signatures are available on a wide variety of consumer cryptosystems including Yubikey, Apple's Secure Enclave, the Android Keystore, passkeys, and WebAuthn. This makes P256 signature verification especially useful for smart-contract wallets, enabling hardware-based signing keys and safer, easier self-custody.\n\nSee our blog post (https://daimo.xyz/blog/p256verifier) for a more complete description of the features and under-the-hood details of the verifier.",
    displayName: "P256Verifier",
    impactDescription:
      "The verifier enables secure and friendly self-custody for contract wallets, starting with our own open-source wallet, Daimo.\n\nWe improved the precompile proposal EIP-7212 (https://eips.ethereum.org/EIPS/eip-7212) based on our learnings from P256Verifier and are co-authors. P256Verifier is also the reference implementation for our progressive precompiles idea (https://ethereum-magicians.org/t/prog/14821) for smoother precompile adoption on L2, both for 7212 and more broadly.\n\nWe’ve inspired multiple third party implementations in the developer community, including one in Huff: https://x.com/AmadiMichaels/status/1714418083186548910 and in Vyper: https://x.com/pcaversaccio/status/1713591896763679155",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "In September 2021, we identified a fragmented Crypto Job landscape, with many sites charging for postings, thus sidelining smaller protocols. In May 2022, our self-funded team unveiled JobStash, a platform for publishing jobs for both emerging and established protocols. We index vacancies from organization career pages, thus eliminating scams and the need for their direct involvement, and do not require financial contributions to list jobs.\n\nWe index  >4K jobs from 224 organizations deploying on 50+ chains. \n14 of these organizations deploy on Optimism.\nWe publish to >5k TG subs daily.\n\nUsing AI, we structure job details and add in both manually-researched data, like organizational headcounts, and auto-imported data, such as funding specifics, protocol financials, audits and hacks.",
    displayName: "JobStash",
    impactDescription:
      "We have been live since May 2023 and due to our growth we will discuss metrics for the last quarter, starting Aug 15 '23 to Oct 23 '23.\nOur app had 1.4k unique visitors and sent out 1.1k job applications for 315 unique applicants.\nOur non-technical telegram channel, accounting for half of our users, has grown to ±2.5k subscribers, but as we don’t have detailed analytics on applicants there we have to assume that the applicant stats are similar, thus doubling our impact in the last quarter to ±2200 applications across ±600 applicants.\nWe confirmed hires, and never took funds from protocols for this.\nWe deployed a backend to our staging env, allowing us to add any organization that we could not previously support, bringing us closer to our goal of indexing every organization in the space.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Apetimism Launchpad is Optimism's top no-code Superchain-compatible NFT Launchpad, simplifying the minting process for countless projects. \n\nKey Features:\n1. Easy NFT Creation: Quick launches for both seasoned and novice creators.\n2. Self-Service Model: Full autonomy and contract ownership for creators.\n3. Reliability & Security: 99.99% uptime with a bot-resistant system.\n4. Customizable Tools: Tailored minting rules and whitelists.\n\nWith about 3,000 NFT projects launched on Optimism, we're steadfast in broadening the ecosystem, championing accessible NFT creation in line with the Optimistic Vision.",
    displayName: "Apetimism Launchpad",
    impactDescription:
      "As the Optimism Collective embraced Superchain, our Launchpad expanded from serving only Optimism to all OP stack blockchains.\n\nOur goal: anticipate the rise of NFTs and eliminate technical barriers. Thus, we support blockchains like Base, Zora, and Base Goerli.\n\nImpacts:\n- NFT Owners: We offer a streamlined platform, lowering entry hurdles.\n  \n- Chain Owners: While creating blockchains is eased by OP stack, developing an ecosystem isn't. Our Launchpad bridges this gap, enhancing business opportunities.\n\n- OP Stack: As a \"Superchain-compatible\" launchpad, we rapidly onboard new chains, showcasing OP stack's ecosystem readiness and competitive edge.\n\nIn sum, Apetimism Launchpad enhances accessibility and growth, aligning with the Optimistic Vision and shaping the digital frontier.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Flexible Voting is an extension to the widely used OpenZeppelin Governor that enables novel DAO voting schemes to be created. Flexible Voting is developed and maintained by ScopeLift.\n\nFor a DAO that adopts it, the Flexible Voting extension allows delegates to split their voting weight across For/Against/Abstain options for a given proposal. This new building block allows arbitrary delegate contracts to be developed which can unlock all kinds of new use cases. Of particular relevance to Optimism is the ability to vote with tokens bridged to L2, a use case ScopeLift is currently building.\n\nIt also enables other use cases like Voting with tokens while earning yield in DeFi, shielded voting (i.e. secret/private voting), liquid delegation and more.",
    displayName: "Flexible Voting",
    impactDescription:
      "Flexible Voting has already been adopted by three significant DAOs: Gitcoin, PoolTogether, and Frax Finance. All three of these DAOs are heavily active in the Optimism ecosystem. Notably, Gitcoin runs Grants Rounds on Optimism, and has just launched their own OP Stack network (PGN), and PoolTogether just launched version 5 of their protocol on Optimism first.\n\nScopeLift is actively building a solution to cross chain voting, i.e. enable token holders for these DAOs (and future adopters of Flexible Voting), to bridge their tokens off mainnet and vote with them. The first network we are targeting for this product is Optimism. Within the next few months, we expect to go live, allowing token holders for these DAOs to bridge and vote from Optimism. ",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "The ECH emerged in response to specific challenges within the Ethereum community. While we have primarily been involved in the Ethereum ecosystem, we've contributed building developers' ecosystem for Optimism \nThe \"PEEPanEIP\" series by Ethereum Cat Herders is designed to offer deeper insights into the Ethereum Improvement Proposals (EIPs) and the processes surrounding them. For newcomers to the Ethereum community or those looking to deepen their understanding, the PEEPanEIP series serves as an educational resource.\nECH helped bring transparency to EIP processes by organizing EIPIP meetings and documenting discussions, decisions, and rationale.\nECH facilitated a smoother consensus-building process, organizing discussions, and gathering feedback to help reach a broader agreement.",
    displayName: "Ethereum Cat Herders",
    impactDescription:
      "\nWhile ECH have primarily been involved in coordination and communication activities surrounding the Ethereum mainnet we've played an essential role in enhancing the transparency and understanding of Ethereum's development here's how we have indirectly supported Optimism:\nMany EIPs have indirect implications for Optimism and Layer2 solutions. By facilitating discussions around these EIPs, the Ethereum Cat Herders have helped refine and implement features that are beneficial.\nWhile not exclusively focused on Optimism, the educational content produced helps in disseminating knowledge about the changes that may affect Optimism.\n A better-informed community can contribute more effectively to the evolution and integration of Optimism.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Web3 Onboard is Blocknative’s answer to delivering the best experience for developers and end users as they connect and engage across blockchains. Launched in 2019, it is the easiest way to add multi-wallet, multi-chain support to any project. With built-in modules for over 80 unique hardware, software, and browser wallets, Web3 Onboard saves time related to the UI and logic of connecting wallets to dapps throughout the EVM.  \n\nWeb3 Onboard is open-source, framework-agnostic JavaScript library accessible on Github. Developers can seamlessly connect users’ wallets to dapps, track wallet states, and match the UI of specific dapps. Transaction preview, an integrated feature, previews unsigned Ethereum transactions, which can help with testing and debugging transactions committed on-chain. ",
    displayName: "Blocknative | Web3 Onboard",
    impactDescription:
      "Web3 Onboard, one of the oldest and best maintained open source libraries, has wide adoption with 500,000+ user wallets connected, 130+ contributors, and 300+ community PRs. Web3 Onboard is used by Curve, Zapper, Compound, Iron Vank, Valk, Synthetix, Beefy, and many others. With native Optimism support added in 2022, users of 80+ wallets can transition effortlessly to and from Optimism when transacting on the most popular dapps in the ecosystem. \n\nWeb3 Onboard ensures users have an intuitive, multi-wallet, multi-chain option for connecting to their any dapps from any wallet. We want all end users to feel comfortable playing games, interacting with defi, and connecting wallets. Optimism is natively integrated so any of the 500,000+ connected user wallets can switch to Optimism with a click.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "We're dedicated to equipping African builders with skills and supporting their innovations to address challenges.\nTrained 66 professionals in product design, management, and smart contract engineering.\nThese professionals showcased their expertise in 10 global hackathons, securing over $17,000 in prizes.\nSince April, our community expanded to 1,312 Ethereum and L2-focused builders, actively collaborating and innovating.\nEngaged 254 Ghanaian computer science students with the Ethereum Campus Tour, introducing them to blockchain's core concepts.\nThe Ayathon at Web3Lagos in August 2023, focusing on L2s, featured 18 projects with 104 participants.\nOur model equips Africans with skills, fosters community growth, offers global opportunities, and supports innovations for continent-wide adoption.",
    displayName: "AyaHQ",
    impactDescription:
      "We have played a pivotal role in beginning to bridge the knowledge gap around Ethereum and L2s, including Optimism and Base, on the African continent. By cultivating a community of passionate builders, we have equipped a new wave of innovators with the tools and understanding they need to harness the power of blockchain technology. These projects confront diverse challenges, from preserving African heritage to introducing digital identity solutions. By also facilitating educational outreaches and deepening collaborations, we've expanded our influence. Regular feedback loops and mentorship programs further solidify our impact. We're wholeheartedly convinced that enabling African builders to solve local dilemmas will exponentially boost blockchain acceptance continent-wide.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "1. Educational Outreach: Through our #aPRENDOcripto workshops, we’ve educated over 330 individuals across 9 cities in 3 countries (Argentina, Uruguay, and Honduras) about blockchain and Optimism. We provide hands-on experience within vulnerable communities, directly contributing to Optimism's user base growth and diversity.\n\n2. #comunidadAPRENDO: Our post-graduate community where we provide ongoing support and learning within the Optimism ecosystem for our graduates.\n\n3. #criptoIMPULSO: We've created a ‘learn2earn’ program that provides financial incentives on Optimism.\n\n4. Showcase: We've hosted RetroPGF Projects Showcases events to spotlight Optimism RetroPGF2 projects.\n\n5. Governance: We participate in Optimism's governance and teach our graduates about it.",
    displayName: "Proof of Integrity",
    impactDescription:
      "User Base Growth: Through our #aPRENDOcripto program, we've educated and graduated underprivileged individuals who are now well-equipped to be active users in the Optimism ecosystem. They not only utilize the platform for their transactions and activities but also become advocates for Op within their communities, thereby contributing to organic growth.\n\nEcosystem Diversity: Our outreach in vulnerable communities brings new perspectives into the Optimism ecosystem. By incorporating these diverse viewpoints, Optimism becomes a more adaptable and inclusive platform.\n\nActive Engagement: Our #criptoIMPULSO learn2earn program serves as a catalyst for active interaction with Op. By offering financial incentives through the platform, we provide a real-world use-case for Optimism's solutions. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "- First asset / keystore separation architecture implementation on Optimism\n  - Which enables Optimism users to change their keys\n  - Sync across multi-networks, including mainnet, arbitrum, scroll, and others\n  - Receive and store tokens without needing to deploy the smart contract wallet\n- The earliest passkey wallet\n  - Create a wallet, send transaction with a face/touch ID\n  - Web-based. No need to download the plugin\n- Permissionless Social recovery with privacy built-in\n  - Your friends won't know your wallet address (until they perform social recovery)\n  - Add any Ethereum wallet addresses as guardian permissionless\n- Basic account abstraction features\n  - Pay gas fee on Optimism with stablecoin\n  - Free/Sponsored wallet creation",
    displayName: "Soul Wallet",
    impactDescription:
      "We don't have much data yet since we are going through a close beta testing period. We have deployed multi-testnet contracts, several hundred testnet transactions, and smart contract wallets on Optimism Goerli testnet work. Our team is continuously monitoring performance and gathering feedback. Upcoming updates will further refine the process.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Since integrating Optimism (14/7/2021), Tenderly has brought essential infrastructure and tools into both the OP ecosystem and the area of network portability, allowing teams to build instantly and move across Web3 with ease. Developers now simplify, automate, and speed up testing with CI/CD pipelines, end-to-end tests, and robust dApp staging environments synced with live data. They also simulate complex scenarios to ensure contracts and transactions execute as expected before deployment, and the observability solutions enable developers to set up custom alerts and automated responses for instant incident management. Finally, with API and SDK devs easily interact with and extend Tenderly functionalities, and access data in order to create workflows that work best for them.",
    displayName: "Tenderly",
    impactDescription:
      "Projects using Tenderly on OP have been executing on average 100,000+ events/month across our platform. 8/10 leading projects and 30+ projects in total on OP as well as over 2000 individual users currently using our services, with an average MAU of 434.",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      "TrueBlocks built a fully decentralized, open-source data indexing solution available to EVM-based blockchains (Optimism, Ethereum Mainnet, and others).\n\nUsers who want censorship-resistant, private, cheap, and fast access to unquestionably accurate chain data–free of any intermediaries and their direct or indirect costs–use TrueBlocks' local-first software.\n\nTrueBlocks uniquely enables Optimism and Ethereum users of all types to:\n\n- Build complete indexes as it looks for “every appearance of every address on the blockchain,”\n- Access pre-built indexes via IPFS and TrueBlocks’ Unchained Index smart contracts, which cheaply and equitably share the index for the public good,\n- Retrieve their on-chain data directly, cheaply, and quickly with consumer-grade hardware.\n\n",
    displayName: "TrueBlocks / Unchained Index",
    impactDescription:
      "TrueBlocks gives users a viable and scalable indexing alternative that:\n\n- Does not compromise on Optimism's nor Web 3.0’s core values of decentralization, open access, and data sovereignty.\n- Helps reduce the community’s reliance on web 2.0-like data intermediaries that put us at risk of censorship, user capture, privacy invasion, and rent-seeking,\n- Expands the utility of the node software, giving users another reason to run a node, thereby promoting decentralization,\n- Inspires node enhancement via EIP proposals and demonstrates how true decentralization can work,\n- Better insulate the entire community from regulatory overreach.\n",
    pwCategory: "Explorers, Security & Node Deployment Tools",
  },
  {
    contributionDescription:
      'Problem: \n\nDebugging smart contracts was a huge pain for smart contract engineers back in 201x era. \n\nSolution: \n\nA hardhat plugin called "hardhat-tracer" has made debugging smart contracts on hardhat easier by allowing the developer to see the call tree with parsed calldata/returndata along with events, storage ops, and more EVM opcodes while running the tests. It also gives programmatic access to the trace information for writing more advanced tests.\n\nI\'ve started this in 2019 for my personal use (even before Solidity console.log existed) and this tool was open-sourced as an installable hardhat plugin in 2020. It was again rewritten in 2022 to improve performance and add more features.',
    displayName: "Hardhat Tracer",
    impactDescription:
      "This tool has improved the ease of inspecting many situations on the EVM like finding revert causes during mainnet fork, unnecessary storage access, discovering unintended behaviour, various gas optimisations and more use cases. It has saved hours of debugging. Hence, it has gained adoption among numerous smart contract teams like 1inch, Aura Finance, Graph Protocol, Immunefi, LayerZero, Lyra Finance, Rainbow Wallet, Rareskills, Stargate, SushiSwap, UMA etc, just to name few who are related to the Optimism Collective.\n",
    pwCategory: "Development & Infrastructure",
  },
  {
    contributionDescription:
      "yAcademy is a trial-by-fire Fellowship program to shadow-audit alongside Resident and Guest auditors. The best Fellows who come through the yAcademy program are retained as full time Resident auditors. yAcademy and yAudit were started by Ali Atiia, a Yearn contributor. \n\nIn April 2023, yAcademy created yAudit, a professional services firm focused on security auditing. Yearn is a customer, along with Sonne, VMEX, and many projects in other ecosystems. \n\nyAcademy/yAudit Residents have scored in the top 10 (#8) of the Optimism Sherlock contest, audited Sonne Finance #6 TVL, audited Yearn #10 TVL, and audited VMEX Finance too.  ",
    displayName: "yAcademy/yAudit",
    impactDescription:
      "yAcademy educated over 100 top security engineers in crypto. The vast majority are very talented solo developers or researchers who come to us to learn. It’s not easy to become a yAcademy Fellow. In Block 5, we had 125 applicants and only 22 were able to meet the entry prerequisites. \nResident Contributions:\n1. Resident Usmannk scored #8 on your Sherlock Optimism contest finding a unique medium.\n2. Audited Sonne Finance, #5 highest TVL on Optimism.\n3. Audited VMEX, a new lending project on Optimism.\n4. Audited Yearn V3 \nWe've also contributed community research like our deep dive on proxy security, list of commonly forked hacks, or general research on web3 security issues. We also participate in audit and security contests such as Paradigm CTF where we placed 14th out of 414 teams in 2022.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We’ve created the first single deposit, up-only vaults on Optimism. We also created Velodrome LP vaults alongside our own new oracle technology for those vaults to be used as collateral. Lastly, we built and passed Aave and Sonne strategies through our security risk framework.\n\nOur pricing oracle produces reliable pricing for both stable and volatile Velodrome pools which can then be easily extended to include pricePerShare values for vault tokens, and also includes other features such as multi-day pessimistic lookback periods and adjustable upper/lower bounds to minimize the risk to protocols adding these pools as collateral. \n\nWe’ve deployed on Base too. We’re locking veVELO and veAERO long term.\n\nWe’ve also deployed Yearn Vaults V3 for testing on Optimism and Base.",
    displayName: "Yearn",
    impactDescription:
      "Yearn was as high as 6th in Optimism TVL and currently 10th. TVL peaked at $31.48 million and is currently $16.23 million.\n\nWe’ve distributed $OP for 23 weeks, and still have 552,865 $OP remaining. We’ve been able to reach ~$1 million in TVL for every $1,000 per week in $OP incentives.\n\nYearn has been in the top 5 veVELO lockers for 13 weeks. On Base, we’re currently 9th in the veAERO leaderboard. We’ve created 23 LP vaults for Aerodrome on Base.\n\nWe partnered with Ethos Reserve to build on top of our single deposit Yearn Vaults.\n\nWe partnered with Coinbase on a campaign to show CB Wallet users how to use Yearn’s yvWETH vault on Optimism and earn rewards.\n\nQiDao, Alchemix, VMEX, Ethos Reserve, Overnight Finance, and Resonate have built Yearn Vaults into their products.",
    pwCategory: "DeFi, Decentralized Finance",
  },
  {
    contributionDescription:
      "EVM.Finance is a one-stop DeFi asset management platform for multiple blockchains. Our platform provides user balances and transactions; a DeFi Screener; Interfaces for Uniswap trading and Aave lending; block readers; and detailed token pages. \n\nOptimism token pages with an Aave on Optimism lending interface, Uniswap trading interface, wallet balances, important token metrics and a price chart. Users like the side-by-side Aave and Uniswap interface when performing multiple steps creating Aave positions.\n\nAdded ABI contract interface based on RFG-2 request.\n\nEVM.Finance provides a user-friendly environment for  individuals to access balances and transactions for multiple blockchains, mitigating the DeFi fragmentation.\n\n",
    displayName: "EVM.Finance",
    impactDescription:
      "Our newest EVM.Finance product is the RFG-2.   We have implemented features of this previously for Aave and Uniswap interactions with conditional checks. Additionally or system supports this for multiple blockchains. \n\nThe newest version allows a user to select the ABI, Action, Method and Event. \n\nAdditionally our platform provides asset management for Optimism, in addition to support for Ethereum mainnet, Binance Smart Chain, XRPL, Polugon and others.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "The Support NERDs moderate the Optimism Discord. This includes: reporting scams, removing spam, onboarding new users into the ecosystem, answering user questions, helping dapps find the support they need, moderating and supporting the 14 non-English Discord channels. ",
    displayName: "Support NERDs",
    impactDescription:
      "SupNERDs create an informed and friendly community accessible to a global audience. They onboard new users into the Optimism ecosystem, helping them discover and use dapps, and debugging common issues. They ensure the community's safety through scam reporting and spam removal. Impact metrics are since the last retroPGF round. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Bankless Japan participated in Optimism DAOs Season 4 to create multimedia content in Japanese as well as organised physical onboarding workshops in Tokyo.\nWe punlished 9 articles and Bankless Academy contents into Japanese, and held one physical event to learn Optimism governance at Centrum, which is a web3 co-working space in Shibuya, Tokyo.",
    displayName: "Bankless Japan",
    impactDescription:
      "We were able to help propagate the Optimistic Vision and mission to a community of Japanese speakers via \n\n1. Newsletters\n9 articles / 4260 views\n\nFrom the Ashes of Moloch, Ether’s Phoenix Rises | Layer 2 Review\nOptimism’s Governance Is Tuned Into Community\nHands-On Learning for Optimistic Hearts\nWhat Is the Law of Chains?\nOP Grants Stack\nOptimism Provides a Shared Resource For DAOs\nThe Optimism Collective’s RetroPGF Learning Journey\nIntroduction of Optimism governance with Bankless Academy\n\n2. Social Media posts\n9 posts / 4825 views\n\nSame topic as newsletters\n\n3. Onboarding events - DAO Night - about Optimism Governance -\n​​This is a great opportunity to learn Optimism governance and delegation!\n\n4. Translation of Bankless Academy contents\nTranslated Optimism governance and Delegation\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We track all projects from Optimism ecosystem that got investments from Pre-seed to Series C rounds. We categorize these projects and provide users with the ability to filter the data, enabling them to conduct their own research. We operate a Telegram channel that provides instant updates on new funding rounds for projects within the Optimism ecosystem.",
    displayName: "Crypto Fundraising",
    impactDescription:
      "We have more then 200k views on our website monthly, telegram channel with 21k subscribers, twitter with 12,5k followers. This channel keeps users interested in the Optimism ecosystem instantly informed about promising new projects backed by renowned investors.\n",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "1. Onboard for 100+ new Crypto users directly to Optimism, from Q1 thru Q4 2022.\n2. Curated multiple educational quests. Goal: equip novice users with the tools needed to maintain wallet security and grow chain competence, and encouraging usage of reputable platforms (ex. Velodrome).\n3. Rewarded users of Optimism through fair OP distributions, reflecting what was achieved in learning and exploring the Optimistic ecosystem.\n4. Joined a number of social spaces to promote Optimism where there was none. (mostly twitter).\n5. Increased user's on-chain activity.",
    displayName: "DeFi Declassified (OptiNauts NFT collection)",
    impactDescription:
      "For about a year, we've provided educational resources, support and teachings to hundreds users on Optimism. Casually enhancing user's competence conducting themselves on-chain, while spreading the word of optimism and maintaining reasonable expectations through our lenses. My passion here on Optimism came from my passion for DeFi as a whole.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Snapshot has been used both by the Optimism Collective and 64 projects on Optimism to facilitate governance. All of these services have been provided for free, both for governance participants and the projects themselves. This has allowed Optimism to be the most active layer 2 in terms of governance and establish a strong ideological stance of decentralization and participative decision-making in the entire ecosystem. Snapshot allows projects to conduct votes that most of the people reading this forum have participated in.\n\nSince the start of Optimism’s governance:\n\n1.15M votes have been cast in the Optimism collective’s governance on 93 proposals.\n88650 participants have voted, which means the average participant has voted 13 times on average, the highest number for any major DAO.",
    displayName: "Snapshot",
    impactDescription:
      "Snapshot is the most widely used tool across the Optimism ecosystem to facilitate governance. Even though the Collective has stopped using it in favor of on-chain voting, today we have 491 spaces on Snapshot that call Optimism their home.\n\nWe've provided these services for free because we believe governance is for everyone, and we like to think that we're building the framework for new types of organizations to thrive. In addition, we're working on a new on-chain voting framework we call Snapshot X that will soon be available on Optimism and will be much more flexible than Compound Governor.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Ipsilon is a research team focusing on the execution environment of Ethereum (aka the EVM or any future versions of it).\n\nWe provide analysis and implementation of own and third party proposals (i.e. new EIPs proposing changes to the EVM), provide tooling (evmc, evmone, fizzy), and support existing teams (e.g. Solidity, go-ethereum, Silkworm, Erigon) with implementation and analysis.",
    displayName: "Ipsilon",
    impactDescription:
      "A number of our EIPs have been adopted by Ethereum Mainnet. We have meaningfully contributed to go-ethereum, Solidity, the ACD process, and Ethereum testing.\n\nCurrently our focus is EOF (EVM Object Format) and EVMMAX, revamping how the EVM works. Contributed to the selfdestruct-removal and EIP-4844 precompile.\n\nFun fact: Optimism's Solidity modifications were an inspiration for the RJUMP opcode of EOF.",
    pwCategory: "Data Analytics & Insights",
  },
  {
    contributionDescription:
      "We spent substantial time and effort building Optimism support into MultiBaas ahead of ETHGlobal Tokyo in April 2023, although the Optimism team was unfortunately unable to attend/sponsor at the last minute. We continue to promote Optimism amongst our customer base, and have extended support to Base in early October 2023 (now complete), with one major DApp now planning to build on Base. Our effort for both Optimism and Base includes working around differences from Ethereum, selecting and contracting with appropriate node providers, maintaining production infrastructure, and consulting with our customers about building on Optimism and Base.",
    displayName: "MultiBaas blockchain middleware",
    impactDescription:
      "Curvegrid’s MultiBaas blockchain middleware helps companies and developers build on Optimism and Base up to 10x faster than doing so from scratch. After adding support for Optimism into our MultiBaas blockchain middleware, we have continued to promote it within our user base as a credible platform to build DApps on or migrate them to. We have also helped bring at least one major DApp onto Base by adding support to MultiBaas. In addition, we have re-verified a Hardhat gas issue broadly affecting the Base Goerli Testnet (https://github.com/NomicFoundation/hardhat/issues/4190#issuecomment-1763641843) and provided notes to both the Optimism and Base teams on our experiences with it.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Cryptosquare is the first Web3 community in Belgium and Luxembourg, and a significant force in Francophone Europe.\n\nOver the past 3 years, we've organized more than 25 FREE events, featuring over 50 renowned speakers and attracting a crowd of 2500+ enthusiasts.\n\nOur Brussels and Luxembourg events focus on spotlighting various Web3 projects with goals like high-quality networking and connecting startups with investors.\n\nOur speaker lineup includes big names in DeFi, DAOs, and NFTs like : AAVE (Marc Zeller), \nAngle Protocol (Guillaume Nervo), Snapshot (Scott Piriou), Kraken (Alix Bouxaguet), Hasheur (Owen Simonin), Ambassador Salvador (Hugo Ortiz), ...\n\nWe are a dedicated team of +10 unpaid volunteers, fully committed to making Cryptosquare the vibrant community it is today.",
    displayName: "Cryptosquare",
    impactDescription:
      "With 3 years under our belt, we've organized over 25 major events, hosted 50+ renowned speakers, and attracted more than 2500 visitors. What's more, 70% of these visitors are repeat attendees, attesting to the quality and relevance of our events.\n\nBut it's not just about numbers. Projects have been created and launched and people have found jobs through networking at our events. \n\nCryptosquare has been entirely self-funded and independent for the past 3 years. Our events have always been free for participants, without external grants or funding. ",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "The mission of gang is to facilitate new connections and the effective exchange of knowledge between Farcaster users\n\nWe believe that 1:1 calls (video or audio) are the most effective way to do that. However, time is finite - so you will be able to choose to set a value on your time or have the other person donate to a DAO of your choice. You can also not specify payment and do it as a form of mentorship. In any case, this is a behaviour that's not common among web3 professionals and we think it should be\n\nPS payment system will be rolled out in the next 2-4 weeks, currently suggested donation are live. Some context and progress here: https://warpcast.com/antimofm.eth/0x6aa87c48",
    displayName: "gang",
    impactDescription:
      "We have facilitated a number of bookings between Farcaster users and sent about 0.08 eth to Purple DAO through donations. We continue to advertise and onboard users, and aim to become a tool for OP users to monetise their knowledge and expertise. Thanks",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "The `go-ethereum-hdwallet` library is a component within the OP Stack and is also widely utilized throughout the broader Ethereum ecosystem. In the context of the OP Stack, this library plays a crucial role in deriving an HD wallet private key from a mnemonic seed phrase, which is then employed by the sequencer service to sign transactions.",
    displayName: "go-ethereum-hdwallet",
    impactDescription:
      "The go-ethereum-hdwallet library has been included in the OP Stack since 2022 and remains in use by the Optimism sequencer service. Its adoption in 900+ Go projects on Github shows its broad impact, reliability, and functionality in the wider ecosystem.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "1. On May 20, 2023, we were among the organizers who held the first Kyiv ETH Day this year. In our presentation and pitch, we definitely pointed out the potential of the OP stack and explained why it would be a “super chain.” The main confirmation of our statements was the mint  NFTs to everyone who was interested, the result was 264 users joined the OP\nhttps://opensea.io/collection/kyiv-eth-day\n2. September 20 (20 is a lucky number for us lol) is recognized worldwide as International NFT Day. FNA acted as the organizer of the event. At the beginning of the speech, the CEO of FNA expressed the prospects of the OP as L2, why the OP claims to be called a super chain, and the main event of the event was the mint of NFTs issued on the OP\nhttps://opensea.io/collection/international-nft-day-kyiv",
    displayName: "First NFT Agency",
    impactDescription:
      "It's impressive to see such positive results from FNA's recent events. The data clearly supports the notion that direct user interaction is a highly effective means of introducing OP technology. In the last two events, hosted and co-hosted by FNA, over 1,000 individuals were educated about OP, and more than 400 users engaged with NFTs on the OP. This demonstrates the significant impact and potential of direct user engagement in promoting and familiarizing individuals with OP technology.",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "The Token Engineering Commons (TEC) supports the economic development of the field of token engineering. Since its launch in early 2022, the TEC has granted $470K to bringing engineering rigor to the development of crypto-economic systems. These grants build public faith that is critical to the widespread adoption of blockchain technologies. Our support has also directly benefited Optimism, including Inverter’s programmable smart contract workflows, cadCAD’s Ethereum models, Gravity DAO’s dispute resolution, Praise’s peer-based attested reputation, and the Token Engineering Academy’s graduates. Additionally, the TEC attracts token engineering practitioners to the Optimism developer ecosystem by running our Gitcoin Token Engineering Grants Round on Optimism.",
    displayName: "Token Engineering Commons",
    impactDescription:
      "Optimism is now benefiting from TEC cultural investments in Praise and Gravity. Our $174K in grants to the Token Engineering Academy has helped grow Optimism’s talent pool with graduates like Jonas, who now runs its RetroPGF. Other relevant TEC grants include:\n\n- $30K to Inverter, whose programmable smart contract workflows help app developers deploy on Optimism.\n- $54K to cadCAD, a tool used by the EF and others for Ethereum research (e.g. beacon chain, EIP-1559)\n\nOur latest Gitcoin Token Engineering Grants Round generated 2,608 contributions from 1,837 individuals on Optimism. It also uses Optimism-based “knowledge proof” NFTs to give an “expertise boost” to 192 Academy students. These rounds help bring the highly technical token engineering community to the Optimism developer ecosystem.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "Prettier Solidity is used by thousands of projects to format their Solidity code. Many of these projects are deployed to Optimism.\n\nA formatter is a fundamental tool for developers: it saves time and discussions. We believe that Prettier Solidity has had a significant impact in Solidity developers productivity, including those working on Optimism projects.",
    displayName: "Prettier Solidity",
    impactDescription:
      "Prettier Solidity is used by thousands of projects to format their Solidity code. Many of these projects are deployed to Optimism.\n\nA formatter is a fundamental tool for developers: it saves time and discussions. We believe that Prettier Solidity has had a significant impact in Solidity developers productivity, including those working on Optimism projects.",
    pwCategory: "Blockchain Developer Hub",
  },
  {
    contributionDescription:
      "Agora builds public gov infra that is open source for Optimism community builders to leverage. We focus on 3 areas of contribution:\n\n- vote.optimism.io client where we enable Token and Citizen House to vote, delegate and evaluate proposals and RPGF. Over 500,000 monthly visits.\n- Major governor upgrade that enables net new functionalities such as Approval Voting that powered Season 4 Intents.\n- Open API that powers other community members and clients such as Supermodular client in RetroPGF3.\n\nNo other on-chain governance has Approval Voting as Optimism has, we’re proud to be contributing alongside a community that’s at the bleeding edge of governance. ",
    displayName: "Agora",
    impactDescription:
      "By building the best-in-class governor contract & application for the Collective, we increased accountability, transparency, and decentralization for all projects in the Collective while maintaining high bars on accessibility and ease of use.\n\nWe have over 3,000 active delegate with profiles created on Optimism, along with over 400,000 votes casted and 100,000 unique monthly users. Over 1,000,000 delegation events have been made on Optimism.\n\nThrough on-chain Approval Voting, over 6M OP has been allocated to fund projects in Season 4 in a decentralized manner.\n\nOur app & contract are open source and MIT-licensed for any builder to leverage. Additionally, with the OP’s superchain coming into play — we plan to ship a 1 click deploy governance package for DAOs on top of OP Stack chains.",
    pwCategory: "DAOs, ReFi, and DAO Tooling",
  },
  {
    contributionDescription:
      "We organize fully on-chain Optimism raffles with online and offline participants. We also take time to onboard newcomers to the event.\n\nWe provide latam artists with comprehensive support throughout their journey, from onboarding and NFT creation to raffling their NFTs in our Randomness Ceremony and monetizing their work.\n\nIn addition, we airdrop ETH tokens to newcomer participants and artists so they can purchase tickets to get in our events and cover gas expenses.\n\nWe also develop the smart contracts, website, and randomness generation mechanisms that underpin our raffles.",
    displayName: "Randomness Ceremony",
    impactDescription:
      "Latam artists are guided and submit their NFTs to be featured and won by degens eager to acquire art and token prizes.\n\nOur website is becoming increasingly user-friendly, providing a positive experience for all visitors.\n\nWe are confident that our efforts are not merely onboarding participants to Optimism, but also forging associations between the platform and enjoyable community experiences.\n\nAlso all our code is open source and uploaded to github.\n\nBy inviting the friends we've made all around the world I believe we are building trust and community.\n\n\n\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "This past summer, Public Assembly introduced Assembly Press (AP), a comprehensive framework designed for Ethereum application development. AP streamlines the process of constructing your own application infrastructure by offering an accessible toolset for developers. The framework incorporates a singleton smart contract design pattern, complemented by a minimalist yet performant indexing solution, along with a compact set of React hooks designed to integrate your frontend with the rest of the framework.\nAP is catered towards developers unfamiliar with the challenges of creating high-performance Ethereum applications, as well as those who seek a straightforward, ready-to-use solution without the need to delve into the complexities of protocol design.\n",
    displayName: "Public Assembly ",
    impactDescription:
      "The category that best describes the significant impact of Public Assembly (PA) on Optimism Collective is the developer ecosystem. By creating and maintaining a robust set of open-source tools specifically designed for the Ethereum ecosystem, PA has simplified the process of developers to seamlessly navigate the complexities of application development at both protocol and full stack levels. This comprehensive suite of tools has effectively bridged the gap between  developers and the Ethereum ecosystem, fostering a dynamic and vibrant community of developers who can now leverage the power of the Ethereum protocol to build innovative and groundbreaking applications.\n",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "We created a free to collect 721 and onchain media manifesto, deployed to Base. Onchain media is a growing design and build space. The Onchain Media Enthusiast manifesto allows builders, creators, and collectors to showcase their support of the onchain media community.  ",
    displayName: "Onchain Media Enthusiast",
    impactDescription:
      "Our Onchain Media Enthusiast mint experience launched on Thursday Sept 28. It was deployed on Base and is free to collect forever. Minting allowed collectors to co-sign the Onchain Media Enthusiast manifesto. We surfaced collectors/co-signers to the native mint page. \n\nThe collectible garnered over 300 mints in the first 24 hours, and there have been 689+ since launch. To date, the Onchain Media Enthusiast mint has activated 571+ holders on the OP stack.  We purposefully built a delightful and seamless mint experience using Decent's The Box, and deployed to Base L2 in order to make the mint accessible to as many collectors as possible. \n\nIn addition to the native mint site build, we also created dynamic marketing assets to support distribution. ",
    pwCategory: "NFTs, POAPs & Collectibles",
  },
  {
    contributionDescription:
      "Grateful addresses the global challenge of monetization for diverse entities like projects, individuals, communities, creators, and DAOs, often struggling to monetize their contributions. Traditional solutions rely on sponsors or donations, rarely incorporating gratitude or recurring payments.\n\nEmphasizing the importance of recurring payments (subscriptions), Grateful establishes a predictable economic model, ensuring consistent support. The core lies in balancing giving and receiving. Grateful operates as a public good, charging 0% fees to both creators and subscribers. Sustainability is maintained through its own subscriptions, aligning with the model advocated for others.",
    displayName: "Grateful",
    impactDescription:
      "Grateful's primary impact on the Optimism Collective is providing the entire community of projects, creators, and individuals within the Optimism ecosystem with a seamless method for recurring payments. This initiative fosters financial stability, enabling sustainable growth and fostering a thriving ecosystem. Additionally, Grateful promotes a culture of gratitude, enhancing collaboration and mutual support among community members. By facilitating predictable revenue streams, Grateful empowers contributors, ensuring their continuous dedication to the collective's growth and innovation.",
    pwCategory: "Grants, Capital Allocation & Onboarding",
  },
  {
    contributionDescription:
      "Wallet Abstraction offers seamless, one-click user onboarding using only a smartphone or a laptop, thanks to the advanced features of account abstraction with passkeys. Users can generate passkey credentials, set up their smart accounts, and even mint an NFT—all with a single click! The wallet remains completely invisible to the user.\n\nWe deploed on Optimism demonstrating that optimism can support this innovative (Yet very secure) wallet mechanism. By bringing this first example of complete application that includes 4337 wallet + Webauthn (Passkeys) + Seamless UX. We demonstrate that optimism can verify secp256r1 signatures for a cheap amount of gas. Which ultimately demonstrates that every recent hardware can use built in secure enclave as smart wallet.",
    displayName: "Wallet Abstraction",
    impactDescription:
      "Showing the Optimism community that it is possible to generate passkey credentials, set up their smart accounts, and even mint an NFT—all with a single click! The wallet remains completely invisible to the user. This is a quite recent innovation so the impact is limited. However we showcased in front of a large crowd. We then received a lot of questions on 4337 related groups (4337 mafia), we are now helping different team to leverage this.\n\nDoing this project we also discovered two critical vulnerabilities in passkey implementations that were used. We did a responsible disclosure free of charges, we thus have protected users from potential loss.",
    pwCategory: "Exchanges, DEX, Trading & Liquidity",
  },
  {
    contributionDescription:
      "Announced in December, on February 28, 2023, the Virtual Assets project office within Ukraine’s Ministry of Digital Transformation launched an educational project on crypto literacy and blockchain that aims to teach Ukrainians how to proficiently use crypto assets and introduce them to the fundamentals of blockchain technology and the web3 world. The course comprises four modules and offers a total of 100 hours of theoretical and practical training. All modules are free and accessible for study on the national platform Diia.Osvita. Information on Optimism was included in the main syllabus from the outset in Module I and is compulsory for all the students. Besides, the Optimism Foundation has been mentioned in all communications on the same level as other core partners, 7M outreach.",
    displayName: "Basic course in blockchain and crypto literacy ",
    impactDescription:
      "The course consists of four modules. Each module features 9-14 lessons. Lessons consist of videos, text lectures, illustrations and diagrams, tests, additional materials, and practical cases. All tests and cases are compulsory and a student must finish every lesson and complete every task within a module in order to complete the module and receive a certificate.\n\nMaterials featuring Optimism are found in Module 01 in Lesson 9: “Blockchain Layers. Sidechains,” including a dedicated 6-minute video on Optimistic rollups & OP Stack, additional materials, and a test question. Materials on Optimism were developed with Rev Miller and CJ Hetherington from Atlantis World with CJ presenting the information in the video. Also, Optimism Foundation is positioned as a core partner in all communications.",
    pwCategory: "Web3 Education - Skill & Community Development",
  },
  {
    contributionDescription:
      "Tokepad is the easiest way to create a token and launch your community.\n\nIn one transaction, a user can deploy an ERC20 token, create a Liquidity Pool on Uniswap's v2, burn the Liquidity Provider's token to prevent a sudden withdrawal of this liquidity, and optionally send the token to defined addresses. The smart contract responsible for this interaction is deployed to the Base/Optimism to achieve low costs and speed that contribute to superior ease of use and accessibility of the product.\n\nTokepad simplifies token creation through a beautiful user interface and democratizes the process for everyone. It leads to fewer mistakes and fewer fraudulent behaviors in the space, making the end-user much more protected. ",
    displayName: "Tokepad",
    impactDescription:
      "Since the launch, we've seen more than 31k deployed tokens and more than 90k visitors to the page. Posted YouTube videos have thousands of views. \n\nOur work helped people create their tokens without relying on complicated processes and shady interfaces. By giving everyone the power to create tokens while teaching them best practices around liquidity, we made users more aware of the technology and, in turn, more resistant to fraudulent behaviors.",
    pwCategory: "Blockchain Developer Hub",
  },
];
