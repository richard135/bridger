exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex.raw('ALTER SEQUENCE users_id_seq RESTART'),
        knex('users').insert({
          linkedin_id: 'david123',
          first_name: 'David',
          last_name: 'Ng',
          email_address: 'david@test.com',
          headline: 'Student at Lighthouse Labs',
          location: 'Vancouver, Canada',
          industry: 'Software engineering',
          current_share: 'Top 10 companies to work for in 2016',
          num_connections: 20,
          summary: 'Junior full stack web developer looking to incorporate background of finance and investments, economics, and mathematics to contribute to a team in the rapidly growing field of financial technology. I believe that intuitively designed UX that "just works" along with a beautifully crafted UI is of the utmost importance for any piece of software. I have a passion for self_improvement and I enjoy reading and studying the leaders and innovators of today.',
          specialties: JSON.stringify(['Front end coding', 'CSS', 'HTML']),
          positions: 'Inditex',
          picture_url: 'https://media.licdn.com/media/AAEAAQAAAAAAAAsjAAAAJDhmYzBmNDU0LTNlZTAtNGZmNi1iMmE4LTIzYzZjNTRiOWRlZQ.jpg',
          site_standard_profile_request: 'https://www.linkedin.com/in/davidng6/',
          api_standard_profile_request: 'https://www.linkedin.com/in/davidng6/',
          public_profile_url: 'https://www.linkedin.com/in/davidng6/',
          associations: JSON.stringify(['Lighthouse Labs', 'Computer club']),
          interests: JSON.stringify(['Coding', 'Hockey']),
          publications: JSON.stringify([]),
          skills: JSON.stringify(['HTML', 'CSS', 'SQL']),
          certifications: JSON.stringify(['CSC']),
          educations: JSON.stringify(['Lighthouse Labs', 'University of Toronto']),
          courses: JSON.stringify(['CS50']),
          volunteer: JSON.stringify(['Heart2Heart']),
          three_current_positions: JSON.stringify(['Lighthouse Labs', 'Inditex']),
          three_past_positions: JSON.stringify([]),
          following: JSON.stringify(['Bill Gates']),
          job_bookmarks: JSON.stringify(['Fintech', 'Software Engineering']),
          suggestions: JSON.stringify(['Richard Hsieh']),
          honors_awards: JSON.stringify([])
        }),
        knex('users').insert({
          linkedin_id: 'hans123',
          first_name: 'Hans',
          last_name: 'Kurniadi',
          email_address: 'hans@test.com',
          headline: 'Intern at Citi',
          location: 'Coquitlam, Canada',
          industry: 'Software engineering',
          current_share: 'How to be great at CSS',
          num_connections: 37,
          summary: 'Junior full stack web developer interested in financial technology industry',
          specialties: JSON.stringify(['Back end coding', 'SQL']),
          positions: 'Citi',
          picture_url: '',
          site_standard_profile_request: 'https://www.linkedin.com/in/hanskurniadi/',
          api_standard_profile_request: 'https://www.linkedin.com/in/hanskurniadi/',
          public_profile_url: 'https://www.linkedin.com/in/hanskurniadi/',
          associations: JSON.stringify(['Lighthouse Labs', 'Citibank', 'fashion']),
          interests: JSON.stringify(['Coding', 'Eating', 'Fashion']),
          publications: JSON.stringify(['Eloquent Javascript']),
          skills: JSON.stringify(['Bootstrap', 'React', 'SQL']),
          certifications: JSON.stringify(['CFA']),
          educations: JSON.stringify(['Lighthouse Labs', 'Simon Fraser University']),
          courses: JSON.stringify(['Bootstrap']),
          volunteer: JSON.stringify(['WeCare']),
          three_current_positions: JSON.stringify(['Lighthouse Labs', 'Citibank']),
          three_past_positions: JSON.stringify([]),
          following: JSON.stringify(['Jeff Bezos']),
          job_bookmarks: JSON.stringify(['Fintech', 'Software Engineering', 'Web design']),
          suggestions: JSON.stringify(['Richard Hsieh', 'David Ng']),
          honors_awards: JSON.stringify(['Honour roll'])
        }),
        knex('users').insert({
          linkedin_id: 'richard123',
          first_name: 'Richard',
          last_name: 'Hsieh',
          email_address: 'richard@test.com',
          headline: 'Assistant Sales Manager at Tropical Link Canada Ltd',
          location: 'Montreal, Canada',
          industry: 'Software engineering',
          current_share: '',
          num_connections: 50,
          summary: 'Junior full stack web developer with background in marketing.',
          specialties: JSON.stringify(['Marketing', 'Coding']),
          positions: 'Assistant Sales Manager at Tropical Link Canada Ltd.',
          picture_url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA0CAAAAJDg3YzIwODI0LWFlZjAtNDQwYy05YmYxLTUwYzU2N2YxOGFhMg.jpg',
          site_standard_profile_request: 'https://www.linkedin.com/in/richard-hsieh-a2a43228/',
          api_standard_profile_request: 'https://www.linkedin.com/in/richard-hsieh-a2a43228/',
          public_profile_url: 'https://www.linkedin.com/in/richard-hsieh-a2a43228/',
          associations: JSON.stringify(['Lighthouse Labs', 'Tropical Link Canada Ltd.', 'McGill University']),
          interests: JSON.stringify(['Coding', 'Eating', 'Networking']),
          publications: JSON.stringify(['Marketing 101']),
          skills: JSON.stringify(['Networking', 'Angular', 'MySQL']),
          certifications: JSON.stringify([]),
          educations: JSON.stringify(['Lighthouse Labs', 'McGill University']),
          courses: JSON.stringify(['HTML 500']),
          volunteer: JSON.stringify(['WeCare']),
          three_current_positions: JSON.stringify(['Lighthouse Labs', 'Tropical Link Canada Ltd.']),
          three_past_positions: JSON.stringify([]),
          following: JSON.stringify(['Warren Buffett']),
          job_bookmarks: JSON.stringify(['Marketing', 'Software Engineering', 'Sales']),
          suggestions: JSON.stringify(['Kirat Virk']),
          honors_awards: JSON.stringify(['Honour roll'])
        }),
        knex('users').insert({
          linkedin_id: 'kirat123',
          first_name: 'Kirat',
          last_name: 'Virk',
          email_address: 'kirat@test.com',
          headline: 'Full Stack Web Developer seeking opportunities',
          location: 'Vancouver, Canada',
          industry: 'Independent',
          current_share: '',
          num_connections: 28,
          summary: 'Junior full stack web developer with background in electrical engineering.',
          specialties: JSON.stringify(['Back end', 'Coding', 'Database management']),
          positions: '',
          picture_url: '',
          site_standard_profile_request: 'https://www.linkedin.com/in/kirat-virk-a2268a95/',
          api_standard_profile_request: 'https://www.linkedin.com/in/kirat-virk-a2268a95/',
          public_profile_url: 'https://www.linkedin.com/in/kirat-virk-a2268a95/',
          associations: JSON.stringify(['Lighthouse Labs', 'UBC', 'SFU']),
          interests: JSON.stringify(['Coding', 'Simpsons', 'Hardware']),
          publications: JSON.stringify(['Back end coding 101']),
          skills: JSON.stringify(['Knex', 'React', 'PostgreSQL']),
          certifications: JSON.stringify(['Certified engineer']),
          educations: JSON.stringify(['Lighthouse Labs', 'University of British Columbia', 'Simon Fraser University']),
          courses: JSON.stringify(['C#']),
          volunteer: JSON.stringify(['CodeDoesGood']),
          three_current_positions: JSON.stringify(['Lighthouse Labs', 'Intel']),
          three_past_positions: JSON.stringify([]),
          following: JSON.stringify(['Elon Musk']),
          job_bookmarks: JSON.stringify(['Database', 'Software Engineering', 'Hardware']),
          suggestions: JSON.stringify(['David Ng', 'Hans Kurniadi', 'Richard Hsieh']),
          honors_awards: JSON.stringify(['First Honors Graduate'])
        })
      ]);
    });
};
