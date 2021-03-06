// import React from "react";
// import * as SwiftypeAppSearch from "swiftype-app-search-javascript";

// const client = SwiftypeAppSearch.createClient({
//     hostIdentifier: process.env.REACT_APP_HOST_IDENTIFIER || "host",
//     apiKey: process.env.REACT_APP_SEARCH_KEY||"search",
//     engineName: "node-modules"
// });
// // We can query for anything -- <code>foo</code> is our example.
// const query = "foo";
// const options = {};
// client.search(query, options)
//     .then(resultList => console.log(resultList))
//     .catch(error => console.log(error))
// class ElasticSearch extends React.Component {
//     state = {
//         // A new state property, which tracks value from the search box
//         queryString: "",
//         response: null
//     };
//     componentDidMount() {
//         // Remove hard-coded search for "node"
//         this.performQuery(this.state.queryString);
//     }
//     // Handles the <code>onChange</code> event every time the user types in the search box.
//     updateQuery = e => {
//         const queryString = e.target.value;
//         this.setState(
//             {
//                 queryString // Save the user entered query string
//             },
//             () => {
//                 this.performQuery(queryString); // Trigger a new search
//             }
//         );
//     };
//     performQuery = queryString => {
//         client.search(queryString, {}).then(
//             response => {
//                 this.setState({
//                     response
//                 });
//             },
//             error => {
//                 console.log(`error: ${error}`);
//             }
//         );
//     };
//     render() {
//         const { response, queryString } = this.state;
//         //   if (!response) return null;
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <h1 className="App-title">Node Module Search</h1>
//                 </header>
//                 {/* A search box, connected to our query string value and onChange
//            handler */}
//                 <input
//                     className="App-search-box"
//                     type="text"
//                     placeholder="Enter a search term here"
//                     value={queryString}
//                     onChange={this.updateQuery}
//                 />
//                 {/* <h2>{response.info.meta.page.total_results} Results</h2> */}
//                 {response && response.results.map(result => (
//                     <div key={result.getRaw("id")}>
//                         <p>Name: {result.getRaw("name")}</p>
//                         <p>Description: {result.getRaw("description")}</p>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }
// export default ElasticSearch;