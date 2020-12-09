import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "reactstrap";

const Sedatives = () => {
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
      text: "USE OF SEDATIVES IN INDIAN STATES",
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
          1.54,
          2.07,
          4.25,
          1.48,
          2.09,
          2.78,
          2.92,
          0.32,
          1.1,
          0.06,
          0.71,
          0.56,
          1.66,
          1.45,
          1,
          1.26,
          0.14,
          0.25,
          1.12,
          1.65,
          0.48,
          1.34,
          1.11,
          0.5,
          0.3,
          3.91,
          0.83,
        ],
        name: "Sedatives Current Use",
      },
      {
        data: [
          0.15,
          0.21,
          0.42,
          0.15,
          0.21,
          0.28,
          0.29,
          0.03,
          0.11,
          0.01,
          0.07,
          0.06,
          0.17,
          0.14,
          0.1,
          0.13,
          0.01,
          0.03,
          0.11,
          0.17,
          0.05,
          0.13,
          0.11,
          0.05,
          0.03,
          0.39,
          0.08,
        ],
        name: "Sedative dependency",
      },
      {
        data: [
          0.29,
          0.39,
          0.8,
          0.28,
          0.39,
          0.52,
          0.55,
          0.06,
          0.2,
          0.01,
          0.13,
          0.1,
          0.31,
          0.27,
          0.18,
          0.23,
          0.03,
          0.05,
          0.21,
          0.31,
          0.09,
          0.25,
          0.21,
          0.09,
          0.06,
          0.74,
          0.22,
        ],
        name: "Sedative 'Quantum of work'",
      },
    ],
  };
  return (
    <Container className="mt-5">
      <HighchartsReact
        containerProps={{ style: { height: "75vh" } }}
        highcharts={Highcharts}
        options={options}
      />
    </Container>
  );
};

export default Sedatives;
