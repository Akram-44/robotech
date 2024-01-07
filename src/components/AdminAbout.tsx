import { fetchJsonData } from "@/helpers/getJSONData";
import { useEffect, useState } from "react";

const AdminAbout = () => {

    const [jsonArray, setJsonArray] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchJsonData('robotech/pages/about.json');
                setJsonArray(data);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchData();
    }, []);


    return (
        <div className={` lg:p-3 w-full z-10 bottom-0 left-0 lg:relative overflow-hidden mt-5 `}>
            <h2 className="font-bold mb-4">Current About data:</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">id</th>
                            <th className="border px-4 py-2">title</th>
                            <th className="border px-4 py-2">description</th>
                            <th className="border px-4 py-2">link text</th>
                            <th className="border px-4 py-2">link url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonArray.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.id}</td>
                                <td className="border px-4 py-2">{item.title}</td>
                                <td className="border px-4 py-2">{item.description}</td>
                                <td className="border px-4 py-2">{item.link_text}</td>
                                <td className="border px-4 py-2">{item.link_url}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default AdminAbout;
