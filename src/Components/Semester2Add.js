import React from "react";

const Add1 = ({handleChange, formInputData, handleSubmit}) => {
	
	return (
		<div>
			<center>
				<table border="1" cellspacing="5" bgcolor="white">
					<caption>
						<b>Input Marks</b>
					</caption>
					<tr>
						<th rowSpan="2">Name</th>
						<th colSpan="4">Score</th>
					</tr>
					<tr>
						<th>English</th>
						<th>Maths</th>
						<th>Science</th>
						{/* <th>Percentage</th> */}
					</tr>
					<tr>
						<td>
							<input
								type="text"
								name="fullName"
								required="required"
								
								placeholder="Enter a name..."
                                onChange={handleChange}
                                value={formInputData.fullName}
                                
							/>
						</td>
						<td>
							<input
								type="number"
								name="english"
								required="required"
								placeholder="Enter a Marks..."
                                onChange={handleChange}
                                value={formInputData.english}
                                
							/>
						</td>
						<td>
							<input
								type="number"
								name="maths"
								required="required"
								placeholder="Enter a Marks..."
                                onChange={handleChange}
                                value={formInputData.maths}
                                
							/>
						</td>
						<td>
							<input
								type="number"
								name="science"
								required="required"
								placeholder="Enter a Marks..."
                                onChange={handleChange}
                                value={formInputData.science}
							/>
						</td>
						{/* <td>
								<input
								type="number"
								name="percentage"
								onChange={handleChange}
								value= {formInputData.percentage}
								/>
								<p>{percentage}</p>
						</td> */}
					</tr>
					<tr>
						<th colspan="5" height="30">
							<input type="submit" value="Add To Table"
							onClick={handleSubmit}  />
						</th>
					</tr>
				</table>
			</center>
		</div>
	);
};

export default Add1;
