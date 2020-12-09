import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "reactstrap";

const Cannibas = () => {
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
      text: "USE OF CANNABIS IN INDIAN STATES",
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
          1.31,
          3.18,
          12.55,
          0.71,
          3.38,
          6.43,
          8.12,
          0.13,
          7.36,
          1.35,
          0.88,
          0.6,
          5.24,
          4.98,
          1.35,
          0.69,
          1.86,
          0.28,
          1.95,
          1.04,
          0.54,
          1.34,
          0.18,
          1.28,
          0.16,
          0.17,
          0.27,
        ],
        name: "Current Cannabis Use",
      },
      {
        data: [
          0.12,
          0.27,
          0.42,
          0.12,
          0.53,
          0.57,
          0.73,
          0.23,
          0.5,
          0.23,
          0.04,
          0.06,
          0.52,
          0.86,
          0.06,
          0.52,
          0.86,
          0.06,
          0.02,
          0.55,
          0,
          0.16,
          0.09,
          0.09,
          0.1,
          0,
          0.11,
          0.09,
          0.01,
          0,
        ],
        name: "Cannabis dependency",
      },
      {
        data: [
          0.15,
          1.29,
          1.59,
          0.25,
          0.12,
          0.82,
          0.04,
          0.44,
          0.24,
          0.17,
          0.29,
          0.03,
          0.29,
          0.12,
          0.04,
          0.04,
        ],
        name: "Cannabis 'Quantum of work'",
      },
    ],
  };
  return (
    <Container>
      <HighchartsReact
        containerProps={{
          style: { height: "85vh" },
        }}
        highcharts={Highcharts}
        options={options}
      />
    </Container>
  );
};

export default Cannibas;
