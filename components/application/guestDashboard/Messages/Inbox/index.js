import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import Pagination from './Pagination';
import DataTable from './DataTable';
import MessageContainer from '../Common/MessageContainer';

const Margin = styled.div`
  margin: 20px 0 0;
`;

const MessageInbox = () => (
  <MessageContainer>
    <Search />
    <Margin>
      <Pagination />
      <DataTable />
    </Margin>
  </MessageContainer>
);

export default MessageInbox;
