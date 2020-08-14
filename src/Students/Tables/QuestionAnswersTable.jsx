import React from 'react';
import MaterialTable from 'material-table';
//npm install material-table --save
//npm install @material-ui / core--save

//Table For Displaying Selected Question And All Student Answers To Said Question
//Tests And Questions Will Be Filtered Via DropDown
export default function Table() {
    const [state, setState] = React.useState({

        //Columns Of Table
        columns: [
            {
                title: 'Test', field: 'test', render: rowData => (
                    <>
                        <select>
                            <option>Test 1</option>
                            <option>Test 2</option>
                        </select>
                    </>
                )
            },
            {
                title: 'Question', field: 'qn', render: rowData => (
                    <>
                        <select>
                            <option>Question 1</option>
                            <option>Question 2</option>
                            <option>Question 3</option>
                            <option>Question 4</option>
                            <option>Question 5</option>
                            <option>Question 6</option>
                        </select>
                    </>
                )
            },
            { title: 'Class', field: 'class' },
            { title: 'Student Name', field: 'name' },
            { title: 'Student Answer', field: 'answer' },
            { title: 'Suggested Grade', field: 'suggestedgrade' },
            { title: 'Confirmed Grade', field: 'confirmedgrade' },
        ],
        //End Columns Of Table

        //Row Data Of Table
        data: [
            { class: 'Class 1', name: 'James', answer: 'Idk', suggestedgrade: 'A', confirmedgrade: 'B' },
            { class: 'Class 1', name: 'Jon', answer: 'Idk', suggestedgrade: 'A', confirmedgrade: 'B' },
        ],
        //End Of Row Data Of Table
    });

    return (
        <MaterialTable
            title="List Of Students"
            columns={state.columns}
            data={state.data}
            editable={{

                //Add Row Function
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                //End Of Add Row Function

                //Edit Row Data Function
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                //End Of Edit Row Data Function

                //Delete Row Function
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                //End Of Delete Row Function
            }}
            //Options To Customize Table Style Etc.
            options={{
                headerStyle: {
                    fontSize: '11px'
                }
            }}
            //End Of Options To Customize Table Style Etc.
        />
    );
}
