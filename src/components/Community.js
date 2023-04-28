import data from './communityData.json';

function CompanyList() {
  return (
    <>
      <div className="mx-auto px-6 py-6 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-20 text-center text-gray-900">Grow with Communities</h1>
          {['business', 'startup incubators', 'tech community', 'communities'].map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {Object.entries(data[category][0]).map(([key, value]) => (
                  <li key={key} className={`p-8 bg-white border-${Object.keys(data[category][0]).length > 1 ? '2' : '4'} border-gray-300 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out overflow-hidden`}>
                    <div className="flex flex-col h-full justify-center items-center">
                      {value.logo && (
                        <div className="h-20 w-36 mb-4 sm:mr-4 sm:mb-0 ">
                          <img
                            src={value.logo}
                            alt={key}
                            className="object-contain h-full w-full rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex flex-col text-left">
                        <h3 className="text-lg font-bold mb-2 text-gray-900">{key}</h3>
                        {value.description && <p className="text-sm mb-2 text-gray-700">{value.description}</p>}
                        {value.url && (
                          <p className="text-blue-600 hover:underline">
                            <a href={value.url} target="_blank" rel="noopener noreferrer">Link to the community</a>
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CompanyList;
