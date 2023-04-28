import data from './communityData.json';

function CompanyList() {
  return (
    <>
    <div className="mx-auto px-6 py-6 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-20 text-center">Communities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['business', 'startup incubators', 'tech community', 'communities'].map((category) => (
            <div key={category}>
              <h2 className="text-3xl font-bold mb-6 text-indigo-600">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <ul>
                {Object.entries(data[category][0]).map(([key, value]) => (
                  <li key={key} className="mb-6 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2">{key}</h3>
                    {value.url && (
                      <p className="text-blue-600 hover:underline">
                        <a href={value.url}>{value.url}</a>
                      </p>
                    )}
                    {value.description && <p className="text-sm">{value.description}</p>}
                    {value.logo && (
                      <img
                        src={value.logo}
                        alt={key}
                        className="h-12 w-auto mt-2"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default CompanyList;
