import React, { useEffect, useState } from "react";
import { getTables } from "../../apis/table.api.ts";
import Table from "../../components/Table.js";

const TableList = () => {
    const [listTables, setListTables] = useState([]);

    // console.log(listTables);

    useEffect(() => {
      (async () => {
        const data = await getTables()
        setListTables(data)
      })()

    }, []);

    return (
        <>
            <section className="py-5 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
                      {listTables.map(i => (
                        <Table 
                          key={i._id}
                          table={i}
                        />
                      ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TableList;
