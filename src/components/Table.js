import React, { useState } from 'react';
import styled from 'styled-components';
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;

const TableOrders =  ({orders}) => {
  const cols = [{label: 'Status', data:'status' },
                   { label: 'Fecha', data:'date' },
                   { label: 'Nombre', data:'firstName' },
                   { label: 'Apellido', data:'lastName' },
                   { label: 'Ciudad', data:'city' },
                   { label: 'Region', data:'region' },
                   { label: 'Email', data:'email' },
                   { label: 'Telefono', data:'phone' },
                   { label: 'Direccion', data:'address' },
                   { label: 'Metodo de Pago', data:'paymentGateway' },
                   { label: 'Fecha de pago', data:'paidDate' },
                   { label: 'Nº de Items', data:'items' },
                   { label: 'Items', data:'itemsName' },
                   { label: 'Total', data:'total' },
                ];
  return (
    <div> 
      <Table
          height={600}
          data={orders}
        > 
        { cols.map((col) => {
            return (
                <Column  align="center" fixed>
                  <HeaderCell> {col.label} </HeaderCell>
                  <Cell dataKey={col.data} />
                </Column>
               )
          })
        }
        </Table>
    </div>
  )
}

export default TableOrders;


