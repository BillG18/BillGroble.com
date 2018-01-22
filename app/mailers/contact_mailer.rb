class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.contact_email.subject
  #
  default from: "me@sandboxa4b150b113c0497eb214478e1841a302.mailgun.org.com"
  
  def contact_email(content)
    @email = content
    mail to: "bill.groble@gmail.com", subject: "New Message From #{@email.name.capitalize} (#{@email.email})"
  end
  
end
