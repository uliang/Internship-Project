import React from 'react';
import MaterialTable from 'material-table';
//npm install material-table --save
//npm install @material-ui / core--save

//Table To Show List Of Classes
export default function Table() {
    const [state, setState] = React.useState({
        //Columns of Table
        columns: [
            { title: 'No.', field: 'number' },
            { title: 'Classes', field: 'class' },
            { title: 'Students', field: 'students', },
            { title: 'Tests', field: 'tests', },
        ],
        //End Of Columns of Table

        //Row Data Of Table
        data: [
            { number: '1', class: 'Class 1', students: 3, tests: 'Test 1' },
            { number: '2', class: 'Class 2', students: 3, tests: 'Test 2' },
        ],
        //End Of Row Data Of Table
    });

    return (
        <MaterialTable
            title="List Of Classes"
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
                },
                actionsColumnIndex:-1
            }}
            //End Of Options To Customize Table Style Etc.
        />
    );
}
