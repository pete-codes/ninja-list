import React, { createRef } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://remotecompanies.us7.list-manage.com/subscribe/post?u=58887a3dc7a6f7187f5e54396&amp;id=9bd774f020"

const Newsletter = () => {
    const emailRef = createRef(undefined)

    return (
        <div>
            <h2>Would you like me to keep you in the loop?</h2>
            <p>...</p>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => {
                    switch (status) {
                        case "sending":
                            return <div>Sending...</div>
                        case "success":
                            return <div>Subscribed.</div>
                        case "error":
                            return <div dangerouslySetInnerHTML={{ __html: message }} />
                        default:
                            return (
                                <form
                                    onSubmit={() => {
                                        event.preventDefault()

                                        subscribe({
                                            EMAIL: emailRef.current.value,
                                        })
                                    }}
                                >
                                    <input type="email" ref={emailRef} />
                                    <input type="submit" value="subscribe" />
                                </form>
                            )
                    }
                }}
            />
        </div>
    )
}

export { Newsletter }