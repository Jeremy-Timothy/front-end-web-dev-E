// Komponen header
const Header = () => {
    return (
        <header className="header">
            <h1>Buat Header Menggunakan JSX</h1>
            <p>Tutorial JSX Sederhana</p>
        </header>      
    );
};

// Komponen Table
const Table = () => {
  return (
    <table border="1" cellPadding="10" style={{width: "100%", textAlign: "center"}}>
    <thead>
        <tr>
            <th>kolom 1</th>
            <th>kolom 2</th>
            <th>kolom 3</th>
            <th>kolom 4</th>
            <th>kolom 5</th>
        </tr>
    </thead>
    <tbody>
        {[...Array(5)].map((_,rowIndex) => (
            <tr key={rowIndex}>
                {[...Array(5)].map((_, colIndex) => (
                    <td key={colIndex}>Baris {rowIndex + 1} kolom {colIndex + 1}</td>
                ))}
            </tr>
        ))}
    </tbody>
</table>
  ); 
};

// Komponen utama (App)
const App = () => {
    return (
        <div>
            <Header />
            <Table />
        </div>
    )
}

// render elemen ke DOM
ReactDOM.render(<App />, document.getElementById('app'));