import React from 'react';
import MaterialTable from 'material-table';
//npm install material-table --save
//npm install @material-ui / core--save

//Table To Display List Of Student Details
export default function Table() {
    const [state, setState] = React.useState({

        //Columns Of Table
        columns: [
            { title: 'No.', field: 'number', editable: 'onEdit' },
            { title: 'StudentId', field: 'id' },
            { title: 'Class', field: 'class' },
            { title: 'FullName', field: 'name' },
            { title: 'Sex', field: 'sex' },
            { title: 'Age', field: 'age' },
            { title: 'Birth Date', field: 'birthdate' },
            { title: 'Email Address', field: 'email' },
            { title: 'Current Grade', field: 'grade' },
        ],
        //End Of Columns Of Table

        //Row Data Of Table
        data: [
            { number: 1, id: 'P1234567', class: 'Class 1', name: 'James', sex: 'M', age: 21, birthdate: '8/1/1999', email: 'IDK@Gmail.com', grade: 'A-' },
            { number: 2, id: 'P1234567', class: 'Class 1', name: 'Jon', sex: 'M', age: 21, birthdate: '21/5/1999', email: 'IDK@Gmail.com', grade: 'A+' },
            { number: 3, id: 'P1234567', class: 'Class 1', name: 'George', sex: 'M', age: 21, birthdate: '12/7/1999', email: 'IDK@Gmail.com', grade: 'C+' },
            { number: 4, id: 'P2345678', class: 'Class 2', name: 'John', sex: 'M', age: 22, birthdate: '2/3/1998', email: 'IDK@Gmail.com', grade: 'B+' },
            { number: 5, id: 'P2349878', class: 'Class 2', name: 'Jane', sex: 'F', age: 22, birthdate: '2/4/1998', email: 'IDK@Gmail.com', grade: 'B+' },
            { number: 6, id: 'P2369878', class: 'Class 2', name: 'Joan', sex: 'F', age: 22, birthdate: '5/3/1998', email: 'IDK@Gmail.com', grade: 'B-' },
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
