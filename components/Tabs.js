const Tabs = ({ items }) => {
    return <ul>
        {items.map ((item, index) => {
            return <li key={`tabItem${index}`}>{item}</li>
        })}
        </ul>
}
export default Tabs;