import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingCart,
  faStar,
  faShareAltSquare,
} from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { useParams, useHistory } from "react-router-dom"

import {
  isBookInCartDetailSelector,
  isBookInFavoriteDetailSelector,
} from "../Books/selectors"
import { toggleCart, toggleFavorite, getBookById } from "../Books/actions"
import booksPropTypes from "../../propTypes/booksPropTypes"
import { books } from "../../constants/routes"

import "./details.css"

const Detail = ({
  selectedBook,
  isBookInCart,
  isBookInFavorite,
  toggleCart,
  toggleFavorite,
  getBookById,
}) => {
  const favClassName = classNames("favBook", { inFavorite: isBookInFavorite })
  const cartClassName = classNames("buyBook", { inCart: isBookInCart })
  const { bookId } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (!selectedBook) {
      getBookById(bookId)
    }
  }, [selectedBook])

  const handleCart = () => {
    toggleCart(bookId)
  }

  const handleFavorite = () => {
    toggleFavorite(bookId)
  }

  const handleBack = () => {
    history.push(books)
  }

  const renderBookDetails = () => {
    const { bookName, currency, price, image, longDescription } = selectedBook
    return (
      <section className="bookDetails">
        <img className="bookImage" src={image} alt={image} />
        <div className="bookContent">
          <div className="bookDetailedTitle">{bookName}</div>
          <div className="bookDetailedDescription">{longDescription}</div>
          <div className="bookButtons">
            <button
              type="button"
              className={favClassName}
              onClick={handleFavorite}
            >
              <FontAwesomeIcon icon={faStar} size="2x" />
            </button>
            <button type="button" className="shareBook">
              <FontAwesomeIcon icon={faShareAltSquare} size="2x" />
            </button>
            <div className="bookPrice">
              {currency} {price}
            </div>
            <button
              type="button"
              className={cartClassName}
              onClick={handleCart}
            >
              <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className="detail">
      <div className="backButtonDiv">
        <button type="button" className="backButton" onClick={handleBack}>
          Back
        </button>
      </div>
      {selectedBook && renderBookDetails()}
    </main>
  )
}

Detail.propTypes = {
  selectedBook: booksPropTypes,
  toggleCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  getBookById: PropTypes.func.isRequired,
  isBookInFavorite: PropTypes.bool,
  isBookInCart: PropTypes.bool,
}

Detail.defaultProps = {
  isBookInCart: false,
  isBookInFavorite: false,
  selectedBook: null,
}

const mapStateToProps = (state) => ({
  selectedBook: state.booksStore.selectedBook,
  isBookInCart: isBookInCartDetailSelector(state),
  isBookInFavorite: isBookInFavoriteDetailSelector(state),
})

export default connect(mapStateToProps, {
  toggleCart,
  toggleFavorite,
  getBookById,
})(Detail)
