import React, {useEffect} from "react"

export default function DashCatalogEdit({setCurrentPage}) {

  useEffect(() => {
    setCurrentPage("Edit Catalog")
  }, [])

  return (
    <div>Dash Catalog Edit</div>
  )
}