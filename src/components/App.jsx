import SectionProfile from './Profile/Section-profile';
import PaintingProfile from './Profile/Painting-profile';
import user from './data/user.json';

import SectionStatistics from './Statistics/Section-statistics';
import PaintingStatistics from './Statistics/Painting-statistics';
import data from './data/data.json';

import SectionFriendlist from './FriendList/Section-friendList';
import PaintingFriendlist from './FriendList/Painting-friendlist';
import friends from './data/friends.json'

import SectionTransactionshistory from './TransactionHistory/Section-transactionhistory';
import PaintingTransactions from './TransactionHistory/Painting-tradsaction';
import transactions from './data/transactions.json'

export const App = () => {
  return (
    <div>
      <SectionProfile title ='Task 1 - Social network profile'>
        <PaintingProfile
          username = {user.username}
          tag = {user.tag}
          location = {user.location}
          avatar = {user.avatar}
          stats = {user.stats}
        />
      </SectionProfile>
     
      <SectionStatistics title ='Task 2 - Statistics Section'>
        <PaintingStatistics stats={data}
          header= "Upload stats"
        />
      </SectionStatistics>

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
