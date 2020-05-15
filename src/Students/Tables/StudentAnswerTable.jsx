import React from 'react';
import MaterialTable from 'material-table';

export default function Table() {
    const [state, setState] = React.useState({
        columns: [
            {
                title: 'Student Name', field: 'name', render: rowData => (
                    <>
                        <select>
                            <option>Student 1</option>
                            <option>Student 2</option>
                        </select>
                    </>
                )
            },
            { title: 'Question', field: 'qn' },
            { title: 'Student Answer', field: 'answer' },
            { title: 'Final Grade', field: 'finalgrade' },
            { title: 'Suggested Grade', field: 'suggestedgrade' },
        ],
        data: [
            { qn: 'What Do You Mean', answer: 'Idk', finalgrade: 'A', suggestedgrade: 'B' },
        ],
    });

    return (
        <MaterialTable
            title="List Of Students"
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
                }
            }}
        />
    );
}
