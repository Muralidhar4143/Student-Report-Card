import React from 'react'

const Semester2 = ({tableData, percentage}) => {

  // const [percentage, setPercentage] = useState();

  // useEffect(() => {
    // Not sure but percentage should be divided 300 I guess
  //   const per = ((tableData.english + tableData.maths + tableData.science) / 300) * 100;
  //   setPercentage(per);
  // }, [tableData]);

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setData({
  //     ...data,
  //     [e.target.name]: parseInt(e.target.value)
  //   });
  // };

  // console.log(data.maths)

  return (
    <div>
      <center>
    <table border="1" cellspacing="5" bgcolor="white">
    
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>English</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Percentage of each student</th>
        </tr>
        <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index} >
                            <td>{index+1}</td>
                            <td>{data.fullName}</td>
                            <td>{data.english}</td>
                            <td>{data.maths}</td>
                            <td>{data.science}</td>
                            <td>{percentage}</td>
                        </tr>
                    )
                })
            }
            </tbody>
    </table>
    </center>
    </div>
  )
}

export default Semester2
