import React from 'react';
import MaterialTable from 'material-table';

export default function Table() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'No.', field: 'number' },
            { title: 'Test Name', field: 'name' },
            { title: 'Test Description', field: 'desc' },
            { title: 'Classes', field: 'class' },
        ],
        data: [
            { number: '1', name: 'Test 1', desc: 'ree', class: 'Class 1' },
        ],
    });

    return (
        <MaterialTable
            title="List Of Tests"
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
