type LabelProp = {
  name?: String
}
const Label: React.FC<LabelProp> = ({ name }) => {
  let styles: string
  switch (name) {
    case 'Action':
      styles =
        'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
      break
    default:
      styles =
        'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
  }
  return (
    <span
      className={`${styles} focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-2`}
    >
      {name}
    </span>
  )
}

export default Label
