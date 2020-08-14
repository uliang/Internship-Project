import React from 'react';
import MaterialTable from 'material-table';
//npm install material-table --save
//npm install @material-ui / core--save

//Table To Display List Of Tests
export default function Table() {
    const [state, setState] = React.useState({
        //Columns Of Table
        columns: [
            { title: 'No.', field: 'number' },
            { title: 'Test Name', field: 'name' },
            { title: 'Test Description', field: 'desc' },
            { title: 'Classes', field: 'class' },
        ],
        //End Of Columns Of Table

        //Row Data Of Table
        data: [
            { number: '1', name: 'Test 1', desc: 'Google plans to reopen some offices in July', class: 'Class 1' },
            { number: '2', name: 'Test 2', desc: 'Australia angered China by calling for a coronavirus investigation. Now Beijing is targeting its exports', class: 'Class 2' },
        ],
        //End Of Row Data Of Table
    });

    return (
        <MaterialTable
            title="List Of Tests"
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
            }}
            //End Of Options To Customize Table Style Etc.
        />
    );
}
