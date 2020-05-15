import React from 'react';
import MaterialTable from 'material-table';

export default function Table() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Test', field: 'test' },
            { title: 'No.', field: 'number' },
            { title: 'Questions', field: 'questions' },
            { title: 'Reference Answer', field: 'refans' },
        ],
        data: [
            { test: 'Test 1', number: '1', questions: 'ree', refans: 'idk' },
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
