import React from 'react';
import MaterialTable from 'material-table';

export default function Table() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'No.', field: 'number', type:'numeric' },
            { title: 'Classes', field: 'class' },
            { title: 'Students', field: 'students', type: 'numeric' },
            {
                title: 'Tests',
                field: 'tests',
            },
        ],
        data: [
            { number: '1', class: 'Class 1', students: 40, tests: 'Test 1' },
            { number: '2', class: 'Class 2', students: 50, tests: 'Test 2' },
            { number: '3', class: 'Class 3', students: 40, tests: 'Test 1' },
        ],
    });

    return (
        <MaterialTable
            title="List Of Classes"
            columns={state.columns}
            data={state.data}
            editable={{
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
            }}
            options={{
                headerStyle: {
                    fontSize: '11px'
                },
            }}
        />
    );
}
