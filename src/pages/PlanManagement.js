import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlan } from '../features/plan/plan';

const PlanManagement = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [dataFetched, setDataFetched] = useState(false);

  const handleFetchPlan = () => {
    dispatch(fetchPlan());
    setDataFetched(true);
  };

  console.log("State", state);

  const renderTable = (data) => {
    if (!data || data.length === 0) return null;

    const headers = Object.keys(data[0]);

    return (
      <table className="table-auto w-full">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {headers.map((header) => (
                <td key={header} className="border px-4 py-2">{item[header]?.toString()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="p-2">
      <h1 className="text-lg font-semibold mb-4">Plan Management</h1>
      <button onClick={handleFetchPlan} className="bg-blue-500 text-white py-1 px-3 rounded mb-4">
        Fetch Plan random API
      </button>
      {state.plan.isLoading ? (
        <h1>Loading....</h1>
      ) : (
        dataFetched && renderTable(state.plan.data)
      )}
    </div>
  );
};

export default PlanManagement;





// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos } from '../features/plan/plan';

// const PlanManagement = () => {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);

//   const handleFetchTodos = () => {
//     dispatch(fetchTodos());
//   };

//   return (
//     <div className="p-2">
//       <h1 className="text-lg font-semibold mb-4">Plan Management</h1>
//       <button onClick={handleFetchTodos} className="bg-blue-500 text-white py-1 px-3 rounded">
//         Fetch Todos
//       </button>
//       {state.todo.isLoading ? (
//         <h1>Loading....</h1>
//       ) : (
//         <ul>
//           {state.todo.data && state.todo.data.map((e) => (
//             <li key={e.id}>{e.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default PlanManagement;
