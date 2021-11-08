import React from 'react'
import PropTypes from 'prop-types'

function SplitSection(props) {
    return (
        <div className="gradient websitePadding grid grid-cols-2">
            <div className="flex content-center flex-col text-primary-contrast-text justify-center min-h-[400px]">
                <h1>ENIS</h1>
                <h4>Read what peopla are saying about us on the social networks</h4>
            </div>
            <div className="text-bg-black-contrast-text p-8">
                <details>
                    <summary>Hello </summary>
                    <p>Enis</p>
                    <p>Enis</p>
                    <p>Enis</p>
                    <p>Enis</p>
                    <p>Enis</p>
                    <details>
                        <summary>Hello </summary>
                            <p>Enis</p>
                            <p>Enis</p>
                            <p>Enis</p>
                            <p>Enis</p>
                            <p>Enis</p>
                            <p>Enis</p>
                        </details>
                    </details>
                <details>
                    <summary>Hello </summary>
                    <p>Enis</p>
                    <p>Enis</p>
                    <p>Enis</p>
                    <p>Enis</p>
                    <p>Enis</p>
                    <p>Enis</p>
                </details>
                <input type="text" list="someList" placeholder="search" />
                <datalist id="someList" className="text-primary-color">
                    <optgroup label="important">
                        <option className="text-primary-color">enis</option>
                        <option className="text-primary-color">suad</option>
                        <option className="text-primary-color">reihan</option>
                    </optgroup>
                    <optgroup>
                        <option className="text-primary-color">amela</option>
                        <option className="text-primary-color">demir</option>
                    </optgroup>
                </datalist>
            </div>
        </div>
    )
}

SplitSection.propTypes = {

}

export default SplitSection

