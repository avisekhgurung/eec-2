import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MangTableSort() {
    const [classes, setClass] = useState([]);
    const [sections, setSection] = useState([]);
    const [subject, setSubject] = useState([""])

    useEffect(() => {
        loadClasses();
    }, []);

    const loadClasses = async () => {
        const result = await axios.get("http://localhost:8000/api/all_classes");
        setClass(result.data.reverse());
    };
    const onSectionChange = async e => {
        const result = await axios.get(`http://localhost:8000/api/get_sec/${e.target.value}`);
        setSection(result.data.sections)
        setSubject(result.data.subject)
    };
    return (
        <React.Fragment>
            <div class="form-row mt-3">
                <div class="form-group col-md-3">
                    <div class="input-group">
                        <input type="text" class="form-control search" placeholder="Search.." />
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <img src="images/icon/search-black.png" alt="Search" width="20" />
                            </span>
                        </div>
                    </div>
                </div>
                <div class="form-group col-md-3">
                    <select class="form-control sort"
                        onChange={e => onSectionChange(e)}>
                        <option selected>Sort By Class</option>
                        {classes.map((e, key) => {
                            return <option key={key} value={e.classname}>{e.classname}</option>;
                        })}
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <select class="form-control sort">
                        <option selected>Sort By Section</option>
                        {sections.map((e =>
                            <option>{e}</option>
                        ))}
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <select class="form-control sort">
                        <option selected>Sort By Subject</option>
                        {(
                            <option>{subject}</option>
                        )}
                    </select>
                </div>
            </div>
        </React.Fragment>
    )
}