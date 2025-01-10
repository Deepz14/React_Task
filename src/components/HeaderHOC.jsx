const withHeader = (WrappedComponent) => {
    return function WrappedWithHeader(props) {
        return (
          <div>
            <header className="bg-blue-500 text-white py-4 text-center text-xl font-semibold shadow">
              Welcome to the Dashboard
            </header>
            <div className="p-4">
              <WrappedComponent {...props} />
            </div>
          </div>
        );
    }
}

export default withHeader;