export default function Review() {
  return (
    <div className="review">
      <div className="review-body">
        <div className="row">
          <div className="col-12 col-md-auto">
            {/* Avatar */}
            <div className="avatar avatar-xxl mb-6 mb-md-0">
              <span className="avatar-title rounded-circle">
                <i className="fa fa-user" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md">
            {/* Header */}
            <div className="row mb-6">
              <div className="col-12">
                {/* Rating */}
                <div className="rating font-size-sm text-dark" data-value={5}>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* Time */}
                <span className="font-size-xs text-muted">
                  Logan Edwards, <time dateTime="2019-07-25">25 Jul 2019</time>
                </span>
              </div>
            </div>
            {/* Title */}
            <p className="mb-2 font-size-lg font-weight-bold">So cute!</p>
            {/* Text */}
            <p className="text-gray-500">
              Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales
              curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet odio
              hendrerit. Dictumst curabitur nascetur lectus potenti dis
              sollicitudin habitant quis vestibulum.
            </p>
            {/* Footer */}
            <div className="row align-items-center">
              <div className="col-auto d-none d-lg-block">
                {/* Text */}
                <p className="mb-0 font-size-sm">Was this review helpful?</p>
              </div>
              <div className="col-auto mr-auto">
                {/* Rate */}
                <div className="rate">
                  <a
                    className="rate-item"
                    data-toggle="vote"
                    data-count={3}
                    href="#"
                    role="button"
                  >
                    <i className="fe fe-thumbs-up" />
                  </a>
                  <a
                    className="rate-item"
                    data-toggle="vote"
                    data-count={0}
                    href="#"
                    role="button"
                  >
                    <i className="fe fe-thumbs-down" />
                  </a>
                </div>
              </div>
              <div className="col-auto d-none d-lg-block">
                {/* Text */}
                <p className="mb-0 font-size-sm">Comments (0)</p>
              </div>
              <div className="col-auto">
                {/* Button */}
                <a className="btn btn-xs btn-outline-border" href="#!">
                  Comment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
