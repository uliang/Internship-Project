import React from 'react';
import MaterialTable from 'material-table';

export default function Table() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'No.', field: 'number' },
            { title: 'StudentId', field: 'id' },
            { title: 'Class', field: 'class' },
            { title: 'FullName', field: 'name' },
            { title: 'Sex', field: 'sex' },
            { title: 'Age', field: 'age' },
            { title: 'Birth Date', field: 'birthdate' },
            { title: 'Email Address', field: 'email' },
            { title: 'Current Grade', field: 'grade' },
        ],
        data: [
            { number: 1, id: 'P1234567', class: 'Class 1', name: 'Ree', sex: 'M', age:19, birthdate: '2/3/1999', email: 'IDK@Gmail.com', grade: 'A-' },
            { number: 2, id: 'P2345678', class: 'Class 2', name: 'John', sex: 'M', age: 20, birthdate: '2/3/1999', email: 'IDK@Gmail.com', grade: 'B+' },
            { number: 3, id: 'P2345678', class: 'Class 2', name: 'John', sex: 'M', age: 20, birthdate: '2/3/1999', email: 'IDK@Gmail.com', grade: 'B+' },
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
