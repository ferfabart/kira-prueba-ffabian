import { Dispatch, SetStateAction } from "react"

interface PaginationProps {
    page: number
    setPage: any
}

export default function Pagination(props: PaginationProps) {
    const { page, setPage } = props
    return (
        <nav aria-label="Page navigation example">
            <ul className="list-style-none flex ">
                {page > 1 &&
                    <>
                    <li>
                        <a className="relative block rounded bg-trasnparent px-5 py-3 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 " onClick={() => setPage(page - 1)}>
                            Previous
                        </a>
                    </li>
                    <li>
                        <a className="relative block rounded bg-trasnparent px-5 py-3 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
                                onClick={() => setPage(page - 1)}>
                                {page - 1}</a>
                        </li>
                        </>
                }

                <li aria-current="page">
                    <a className="relative block rounded bg-black px-5 py-3 text-lg font-medium text-white transition-all duration-300"
                        onClick={() => setPage(page)}>
                        {page}

                        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                            (current)
                        </span>
                    </a>
                </li>

                <li>
                    <a className="relative block rounded bg-trasnparent px-5 py-3 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 " onClick={() => setPage(page + 1)}>
                        {page + 1}
                    </a>
                </li>
                <li>
                    <a className="relative block rounded bg-trasnparent px-5 py-3 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 " onClick={() => setPage(page + 1)}>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}