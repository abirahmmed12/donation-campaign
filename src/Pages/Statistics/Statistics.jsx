import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Statistics = () => {
  const [data, setData] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);
  const [myDonation, setMyDonation] = useState(0);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('./data.json')
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setTotalDonations(jsonData.length);
        // Set the data from the JSON file
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    const items = JSON.parse(localStorage.getItem('item'));
    if (items) {
      setMyDonation(items.length);
    }
  }, []);

  const percentageDonations = Math.round((myDonation / totalDonations) * 100);

  const chartData = [
    { name: 'My Donation', value: myDonation },
    { name: 'Remaining', value: totalDonations - myDonation },
  ];

  return (
    <div>
      <h2>Your Donations Percentage: {percentageDonations}%</h2>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Label
              content={({ value, name, percent }) => {
                return `${name} (${percent}%)`;
              }}
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
