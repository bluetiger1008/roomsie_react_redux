import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Checkbox, Div, Column } from 'components/common';

const Container = Column.extend`
  .data-table {
    border: none;
  }

  .data-table .rt-thead.-header {
    display: none;
  }

  .data-table .rt-th,
  .data-table .rt-td {
    padding: 17px 12px;
  }
`;

const Name = Div.extend`
  color: #000;
`;

const Time = Div.extend`
  text-align: right;
  justify-content: flex-end;
  color: #070707;
`;

const Bold = Div.extend`
  font-weight: bold;
`;

const Message = Div.extend`
  color: #434343;
  font-size: 16px;
`;

class DataTable extends Component {
  render() {
    const data = [
      {
        selected: false,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: false
      },
      {
        selected: false,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: false
      },
      {
        selected: false,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: false
      },
      {
        selected: false,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: true,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: true,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: true,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: true,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: true,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: true,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: true,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: true,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: true,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: true,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: false,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: false,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      },
      {
        selected: false,
        name: 'Tanner Linsley',
        message: 'Request sent for Capitol Hill as Its Finest!',
        time: '2:45 PM',
        read: true
      }
    ];

    const columns = [
      {
        Header: 'Selector',
        accessor: 'selected',
        Cell: props => <Checkbox checked={props.value} />,
        width: 40
      },
      {
        Header: 'Name',
        accessor: 'name', // String-based value accessors!
        maxWidth: 140,
        Cell: props =>
          props.original.read === false ? (
            <Name>
              <Bold>{props.value}</Bold>
            </Name>
          ) : (
            <Name>{props.value}</Name>
          )
      },
      {
        Header: 'Message',
        accessor: 'message',
        Cell: props =>
          props.original.read === false ? (
            <Message>
              <Bold>{props.value}</Bold>
            </Message>
          ) : (
            <Message>{props.value}</Message>
          )
      },
      {
        Header: 'Time',
        accessor: 'time',
        Cell: props =>
          props.original.read === false ? (
            <Time>
              <Bold>{props.value}</Bold>
            </Time>
          ) : (
            <Time>{props.value}</Time>
          )
      }
      // {
      //   id: 'friendName', // Required because our accessor is not a string
      //   Header: 'Friend Name',
      //   accessor: d => d.friend.name // Custom value accessors!
      // },
      // {
      //   Header: props => <span>Friend Age</span>, // Custom header components!
      //   accessor: 'friend.age'
      // }
    ];

    return (
      <Container>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={15}
          showPaginationBottom={false}
          showPageSizeOptions={false}
          className={'data-table'}
        />
      </Container>
    );
  }
}

export default DataTable;
