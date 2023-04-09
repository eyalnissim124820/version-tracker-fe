import axios from 'axios'
import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

export function useApp() {
    return useContext(AppContext)
}

export default function AppContextProvider({ children }) {

    const mockData = [
        {
            id: 123,
            name: 'client01',
            ip: "46.120.92.25",
            client_version: '3.0.0',
            dependencies: [
                {
                    id: "200",
                    name: "react",
                    version: "2.1.2"
                },
                {
                    id: "201",
                    name: "axios",
                    version: "1.3.4"
                },
                {
                    id: "202",
                    name: "designpkg",
                    version: "2.8.5"
                }
            ],
        },
        {
            id: 124,
            name: 'client02',
            ip: "46.120.92.25",
            client_version: '2.0.0',
            dependencies: [
                {
                    id: "203",
                    name: "atob",
                    version: "2.1.2"
                },
                {
                    id: "201",
                    name: "axios",
                    version: "1.3.4"
                },
                {
                    id: "200",
                    name: "react",
                    version: "2.1.2"
                },
                {
                    id: "205",
                    name: "cors",
                    version: "2.8.5"
                },
            ],
        },
        {
            id: 125,
            name: 'client03',
            ip: "46.120.92.25",
            client_version: '1.0.0',
            dependencies: [
                {
                    id: "206",
                    name: "regex",
                    version: "2.1.2"
                },
                {
                    id: "201",
                    name: "axios",
                    version: "1.3.4"
                },
                {
                    id: "200",
                    name: "react",
                    version: "2.1.2"
                },
                {
                    id: "204",
                    name: "@react-router",
                    version: "2.8.5"
                },
            ],
        },
    ]

    const mockPKG = [
        {
            id: "200",
            name: "react",
            version: "2.8.5"
        },
        {
            id: "201",
            name: "axios",
            version: "1.3.4",
            url: "https://github.com/axios/axios"
        },
        {
            id: "202",
            name: "designpkg",
            version: "2.8.5"
        },
        {
            id: "203",
            name: "atob",
            version: "2.1.2"
        },
        {
            id: "204",
            name: "@react-router",
            version: "2.8.5"
        },
        {
            id: "205",
            name: "cors",
            version: "2.8.5"
        },
        {
            id: "206",
            name: "regex",
            version: "2.1.2"
        },
    ]

    const [clickedPKG, setClickedPKG] = useState({
        name: null,
        id: null,
        version: null
    })

    const getRepoDep = async () => {
        try {
            const res = await axios.get("http://localhost:8080/git/json/");
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const value = {
        mockData,
        mockPKG,
        clickedPKG,
        setClickedPKG,
        getRepoDep
    }

    return (
        <>
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        </>
    )
}
