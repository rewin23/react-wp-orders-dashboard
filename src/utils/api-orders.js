import axios from 'axios';



const fetchData = async (dateStart, dateEnd) => {
  try {
    // eslint-disable-next-line no-undef
    //const { data } = await axios.get(process.env.GATSBY_API_URL, {
    const c_key= 'ck_55cbe62c1cc4324a9ac0218f15e80eee5a8a2cfa';
    const c_sec= 'cs_f7aedccca1649017be924d220b9da0de7a0cba66';
    const { data } = await axios.get(`https://papelesalpormayor.lobulo.dev/wp-json/wc/v3/orders?after=${dateStart}&before=${dateEnd}&consumer_key=${c_key}&consumer_secret=${c_sec}`);
    return data;
  } catch (error) {
    console.error('Error on updating from API' + error);

    return [];
  }
};

const parseData =  (data) => {
    return ( data.map((order) => {
      return ({
          status: order.status,
          date: order.date_created,
          firstName: order.billing.first_name,
          lastName: order.billing.last_name,
          city: order.billing.city,
          region: order.billing.state,
          email: order.billing.email,
          phone: order.billing.phone,
          address: order.billing.address_1,
          paymentGateway: order.payment_method_title,
          paidDate: order.date_paid,
          items: order.line_items.length,
          itemsName: order.line_items.map((item) => item.name ),
          total: order.total
        })} ));
  };

export { fetchData, parseData };