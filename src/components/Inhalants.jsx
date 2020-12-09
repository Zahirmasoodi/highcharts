import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "reactstrap";

const Inhalants = () => {
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
      text: "STATE WISE DATE OF USE OF INHALANTS",
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
          1.22,
          3.38,
          1.01,
          0.17,
          1,
          2.63,
          4.48,
          0.13,
          0.69,
          0.08,
          0.36,
          1.61,
          0.03,
          0.58,
          1.15,
          0.1,
          0,
          1.99,
          0.76,
          0.78,
          0.43,
          2.56,
          1.05,
          0.53,
          0.2,
          1.71,
          1.66,
        ],
        name: "Inhalants Cannabis Use",
      },
      {
        data: [
          0.13,
          0.38,
          0.11,
          0.02,
          0.11,
          0.29,
          0.5,
          0.01,
          0.07,
          0.01,
          0.04,
          0.17,
          0,
          0.06,
          0.12,
          0.01,
          0,
          0.22,
          0.09,
          0.09,
          0.05,
          0.29,
          0.12,
          0,
          0.02,
          0.19,
          0.19,
        ],
        name: "Inhalants dependency",
      },
      {
        data: [
          0.36,
          1.03,
          0.31,
          0.05,
          0.29,
          0.7,
          1.34,
          0.04,
          0.19,
          0.02,
          0.11,
          0.46,
          0.01,
          0.17,
          0.33,
          0.03,
          0,
          0.59,
          0.23,
          0.24,
          0.13,
          0.8,
          0.33,
          0.16,
          0.06,
          0.53,
          0.51,
        ],
        name: "Inhalants 'Quantum of work'",
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

export default Inhalants;
