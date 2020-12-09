import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "reactstrap";

const Cocaine = () => {
  const options = {
    yAxis: [
      {
        height: "75%",
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "",
        },
      },
      {
        top: "75%",
        height: "25%",
        labels: {
          align: "right",
          x: -3,
        },
        offset: 0,
        title: {
          text: "",
        },
      },
    ],
    title: {
      text: "USE OF COCAINE IN INDIAN STATES",
    },
    xAxis: {
      categories: [
        "JAMMU & KASHMIR",
        "HIMACHAL PRADESH",
        "PUNJAB",
        "CHANDIGARH",
        "UTIARAKHAND",
        "HARYANA",
        "DELHI",
        "RAJASTHAN",
        "UTTAR PRADESH",
        "BIHAR",
        "WEST BENGAL",
        "JHRKHAND",
        "ODISHA",
        "CHHATTISGARH",
        "MADHYA PRADESH",
        "GUJARAT",
        "DAMAN & DIU",
        "DADRA & NAGAR HAVELI",
        "MAHARASHTRA",
        "ANDHRA PRADESH",
        "KARNATAKA",
        "GOA",
        "LAKSHADWEEP",
        "KERALA",
        "TAMIL NADU",
        "PUDUCHERRY",
        "ANDA MAN & NICOBAR ISLANDS",
      ],
    },

    series: [
      {
        data: [
          0.02,
          0.04,
          0.66,
          0.05,
          0.02,
          0.09,
          0.08,
          0.1,
          0.02,
          0,
          0,
          0.01,
          0,
          0,
          0.07,
          0,
          1.38,
          0.81,
          0.53,
          0,
          0.08,
          0.38,
          0.63,
          0.05,
          0.01,
          0,
          0.5,
        ],
        name: "Cocaine Cannabis Use",
      },
      {
        data: [
          0,
          0.01,
          0.11,
          0.01,
          0,
          0.02,
          0.01,
          0.02,
          0,
          0,
          0,
          0,
          0,
          0,
          0.01,
          0,
          0.23,
          0.13,
          0.09,
          0,
          0.01,
          0.06,
          0.1,
          0.01,
          0,
          0,
          0.08,
        ],
        name: "Cocaine dependency",
      },
      {
        data: [
          0,
          0.01,
          0.2,
          0.01,
          0.01,
          0.03,
          0.03,
          0.03,
          0.01,
          0,
          0,
          0,
          0,
          0,
          0.02,
          0,
          0.42,
          0.24,
          0.16,
          0,
          0.03,
          0.11,
          0.19,
          0.02,
          0,
          0,
          0.15,
        ],
        name: "Cocaine 'Quantum of work'",
      },
    ],
  };
  return (
    <Container>
      <HighchartsReact
        containerProps={{ style: { height: "85vh" } }}
        highcharts={Highcharts}
        options={options}
      />
    </Container>
  );
};

export default Cocaine;
