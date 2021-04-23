import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import Table from './Table';
import { parseData, fetchData } from '../utils/api-orders';
import 'rsuite/dist/styles/rsuite-default.css';

import {Button, IconButton, Icon, Divider, DateRangePicker } from 'rsuite';

const App = () => {
  const [orders, setOrders] = useState([]);
  const today = new Date();
  const lastMonth = new Date();
  const [dateEnd, setDateEnd] = useState(today );
  const [dateStart, setDateStart] = useState(new Date(lastMonth.setMonth(lastMonth.getMonth() - 1 ) ));


  const updateDate = ( [start, end] ) => {
    console.log("updateting range");
  	setDateStart(start);
  	setDateEnd(end);
    load();
  }

  const load = async () => {
    const data = await fetchData(dateStart.toISOString(), dateEnd.toISOString());
    setOrders( parseData(data));
    console.log("update orders");
	};

	useEffect(() => {
		load();
	},[]);

  return (
    <div className = "wrap">
      <h1 className = "wp-heading-inline">Reportes</h1>
      <br />
      <DateRangePicker
        size="lg"
        onOk={(value)=>  updateDate(value)}
        defaultValue={[dateStart, dateEnd]}

      />
      <CSVLink data={orders}>
        <IconButton icon={<Icon icon="file-download" />} active >Descargar registros</IconButton>
      </CSVLink>
      <Divider />
      { (orders.length != 0)  ?  <Table orders={orders} /> : "LOADING..."  }
    </div>
  );
}

export default App;
