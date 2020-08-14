import React from 'react';
import MaterialTable from 'material-table';
//npm install material-table --save
//npm install @material-ui / core--save

//Table For Displaying Selected Student And All Said Student Answers
//Class And Student Name Will Be Filtered Via DropDown
export default function Table() {
    const [state, setState] = React.useState({

        //Columns Of Table
        columns: [
            {
                title: 'Class', field: 'class', render: rowData => (
                    <>
                        <select>
                            <option>Class 1</option>
                            <option>Class 2</option>
                        </select>
                    </>
                )
            },
            {
                title: 'Student Name', field: 'name', render: rowData => (
                    <>
                        <select>
                            <option>James</option>
                            <option>Jon</option>
                            <option>George</option>
                            <option>John</option>
                            <option>Jane</option>
                            <option>Joan</option>
                        </select>
                    </>
                )
            },
            { title: 'Test', field: 'test' },
            { title: 'Question', field: 'qn' },
            { title: 'Student Answer', field: 'answer' },
            { title: 'Suggested Grade', field: 'suggestedgrade' },
            { title: 'Confirmed Grade', field: 'confirmedgrade' },
        ],
        //End Of Columns Of Table

        //Row Data Of Table
        data: [
            { test: 'Test 1', qn: 'When does Google plan to reopen "more buildings in more cities"', answer: 'Idk', suggestedgrade: 'A', confirmedgrade: 'B' },
            { test: 'Test 1', qn: 'What plans have both Twitter and Facebook announced going forward.', answer: 'Idk', suggestedgrade: 'A', confirmedgrade: 'B' },
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
