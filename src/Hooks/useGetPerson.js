import { getDatabase, onValue, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function useGetPerson() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            //databse related works
            const db = getDatabase();
            const personRef = ref(db, "Sheet1");
            const dataQuery = query(personRef);
            try {
                setError(false);
                setLoading(true);
                //request firebase database;
                onValue(dataQuery, (snapshot) => {
                    setLoading(false);
                    if (snapshot.exists()) {
                        const dataSnapshot = snapshot.val();
                        let dataList = [];
                        for (const id in dataSnapshot) {
                            dataList.push({ key: id, ...dataSnapshot[id] });
                        }
                        setData((prevCashout) => {
                            return [...dataList];
                        });
                    }
                });
            } catch (err) {
                setLoading(false);
                setError(true);
            }
        }
        fetchData();
    }, []);

    return { loading, error, data };
}
