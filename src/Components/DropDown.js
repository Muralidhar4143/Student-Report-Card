import React, { useState, useEffect} from "react";
import Add from "./Semester1Add";
// import Add1 from "./Semester2Add";
import Semester1 from "./Semester1";
// import Semester2 from "./Semester2";

const DropDown = () => {
	const [isShown1, setIsShown1] = useState(false);
	// const [isShown2, setIsShown2] = useState(false);
    const [tableData, setTableData] = useState([])
    // const [tableData1, setTableData1] = useState([])
    const [percentage, setPercentage] = useState();

  
  useEffect(() => {
    // Not sure but percentage should be divided 300 I guess
    
  }, );



    const [formInputData, setformInputData] = useState(
        {
        fullName:'',
        english:'',
        maths:'',
        science:'',
        percentage:''
       }
    );

    
    const handleChange=(evnt)=>{  
        const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
       setformInputData(newInput)
    }

     
    const handleSubmit= (evnt) =>{
        evnt.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
        if(checkEmptyInput)
        {
        const per = ((Number(formInputData.english) + Number(formInputData.maths) + parseInt(formInputData.science))/300)*100;
        setPercentage(per);
        
         const newData = (data)=>([...data, formInputData])
         console.log(per)
         setTableData(newData,per);
         const emptyInput= {fullName:'',
         english:"",
         maths:'',
         science:'',
         percentage: ''}
         setformInputData(emptyInput)
        }
    }  


	const handleClick1 = (event) => {
		// 👇️ toggle shown state
		setIsShown1((current) => !current);
	};



	return (
		<div>
			<button onClick={handleClick1}>Semester1</button>

			{/* 👇️ show semester1 on click */}
			{isShown1 && (
				<div>

              <Add percentage={percentage} handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
              <Semester1 percentage={percentage} tableData={tableData}/>
              {/* <Percentage= {percentage}</h1> */}
				</div>
			)}

		</div>
	);
};

export default DropDown;
