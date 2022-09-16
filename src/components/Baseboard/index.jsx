export const Baseboard = () => {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-6 border-top bg-dark sty-footer">
                <div className="col-md-6 d-flex align-items-center">
                <span className="text-footer mb-3 mb-md-0 text-white">IFMS Dourados Trabalho de Frameworks2 – Guilherme Alencar e Lucas Andrade</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <a class="ms-3 text-muted" href="#"><i className="text-white fab fa-facebook-f"></i></a>
                    <a className="ms-3 text-muted" href="#"><i className="text-white fab fa-instagram"></i></a>
                    <a className="ms-3 text-muted" href="#"><i className="text-white fab fa-github"></i></a>
                </ul>
            </footer>
            </body>
        </html>
    )
}