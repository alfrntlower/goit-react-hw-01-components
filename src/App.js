//import logo from './logo.svg';
import './App.css';

import SectionProfile from './components/Profile/Section-profile';
import PaintingProfile from './components/Profile/Painting-profile';
import user from './user.json';

import SectionStatistics from './components/Statistics/Section-statistics';
import PaintingStatistics from './components/Statistics/Painting-statistics';
import data from './data.json';

import SectionFriendlist from './components/FriendList/Section-friendList';
import PaintingFriendlist from './components/FriendList/Painting-friendlist';
import friends from './friends.json'

import SectionTransactionshistory from './components/TransactionHistory/Section-transactionhistory';
import PaintingTransactions from './components/TransactionHistory/Painting-tradsaction';
import transactions from './transactions.json'

export default function App() {
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