
import { LineChart as LChart, Line } from 'recharts';

const Linechart = () => {
    const mathMarksData = [
        { id: 1, name: "Alice", subject: "Math", marks: 78 },
        { id: 2, name: "Bob", subject: "Math", marks: 85 },
        { id: 3, name: "Charlie", subject: "Math", marks: 92 },
        { id: 4, name: "David", subject: "Math", marks: 76 },
        { id: 5, name: "Eve", subject: "Math", marks: 88 },
        { id: 6, name: "Frank", subject: "Math", marks: 95 },
        { id: 7, name: "Grace", subject: "Math", marks: 80 },
        { id: 8, name: "Hank", subject: "Math", marks: 83 },
        { id: 9, name: "Ivy", subject: "Math", marks: 91 },
        { id: 10, name: "Jack", subject: "Math", marks: 87 }
    ];
    
    return (
        <div>
            <LChart width ={500} height ={400} data={mathMarksData}>
            <Line dataKey="math"></Line>
            </LChart>
        </div>
    );
};


export default Linechart;