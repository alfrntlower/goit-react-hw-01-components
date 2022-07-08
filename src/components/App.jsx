//import logo from './logo.svg';
//import './App.css';

// import SectionProfile from './files/Profile/Section-profile';
// import PaintingProfile from './files/Profile/Painting-profile';
// import user from './user.json';

// import SectionStatistics from './files/Statistics/Section-statistics';
// import PaintingStatistics from './files/Statistics/Painting-statistics';
// import data from './data.json';

import SectionFriendlist from './files/FriendList/Section-friendList';
import PaintingFriendlist from './files/FriendList/Painting-friendlist';
import friends from './friends.json'

import SectionTransactionshistory from './files/TransactionHistory/Section-transactionhistory';
import PaintingTransactions from './files/TransactionHistory/Painting-tradsaction';
import transactions from './transactions.json'

export const App = () => {
  return (
    <div>
      {/* <SectionProfile title ='Task 1 - Social network profile'>
        <PaintingProfile
          username = {user.username}
          tag = {user.tag}
          location = {user.location}
          avatar = {user.avatar}
          stats = {user.stats}
        />
      </SectionProfile>

      <SectionStatistics title ='Task 2 - Statistics Section'>
        <PaintingStatistics stats ={data}/>
      </SectionStatistics> */}

      <SectionFriendlist title='Task 3 - Friend list'>
        <PaintingFriendlist friends = {friends}/>
      </SectionFriendlist>

      <SectionTransactionshistory title='Task 4 - Transaction History'>
        <PaintingTransactions 
          // key = {transactions.id}
          // type= {transactions.type}
          // amount = {transactions.amount}
          // currency={transactions.currency}
          transactions = {transactions}
        />
      </SectionTransactionshistory>
      
    </div>
  )
}

// Task 1 - Social network profile
// Task 2 - Statistics Section
// Task 3 - Friend list
// Task 4 - Transaction History