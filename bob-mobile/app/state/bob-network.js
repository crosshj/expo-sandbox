/*

FROM AUTH0:
--------------------------------------------------------------------------------

curl 'https://test.letbob.com/callback' -H 'authority: test.letbob.com' -H 'pragma: no-cache' -H 'cache-control: no-cache' -H 'upgrade-insecure-requests: 1' -H 'dnt: 1' -H 'user-agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36' -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*\/*;q=0.8' -H 'referer: https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=104565000066-q7q63bouq2ct8gj73drmpu186amn6a3f.apps.googleusercontent.com&as=dERot9OPioLA6gx7Fu5obw&destination=https%3A%2F%2Flogin.auth0.com&approval_state=!ChROU1AtUmtERlBPMGZiRW9Cb0tUchIfVS1XMm5Zd21fcmtaVUEyYUd3VDlRSnlnaVFMR2ZSWQ%E2%88%99APNbktkAAAAAXCEolFFQNyDPdze15KHuAySDFHFSf03W&oauthgdpr=1&xsrfsig=AHgIfE8j2KG60TWxooo170PfP2rBxBe5IA&flowName=GeneralOAuthFlow' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.9' --compressed



BOB CALLS (in order they occur after auth0 callback):
--------------------------------------------------------------------------------

USER UPDATE (Assuming this is for new users???):

curl 'https://test.letbob.com/v0/user.update' -H 'origin: https://test.letbob.com' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.9' -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5rRkZRVVV6UlRRek5EZzJSamt6UkRSQk9EWkZNRGxETURKRE5EY3dNa1ExTlRSRlFVWXhPUSJ9.eyJodHRwczovL2FkbWluLmxldGJvYi5jb20iOmZhbHNlLCJnaXZlbl9uYW1lIjoiSEoiLCJmYW1pbHlfbmFtZSI6IkNyb3NzIiwibmlja25hbWUiOiJoY3Jvc3M3NSIsIm5hbWUiOiJISiBDcm9zcyIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLXl4YnphRTB0TzRrL0FBQUFBQUFBQUFJL0FBQUFBQUFBQmpZL3ZwR2xNeWFNMGE0L3Bob3RvLmpwZyIsImxvY2FsZSI6ImVuIiwidXBkYXRlZF9hdCI6IjIwMTgtMTItMjNUMTg6NDI6MzQuMjk5WiIsImlzcyI6Imh0dHBzOi8vZGF5dHJhZGluZ2JvYi5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDI2NjU0NzQ0NTQ3Njg0MDI5MjMiLCJhdWQiOiJvZlM2SHcwSDBOSDNzU1BuazlHZktNVmRYUExSbXhJNCIsImlhdCI6MTU0NTU5MDU1NCwiZXhwIjoxNTQ1NjI2NTU0LCJhdF9oYXNoIjoiT1ZQNGpkYXduV3B3RmRPNUFSeFZ6USIsIm5vbmNlIjoiSjdjWGZGbGtWSkgxSjJMcUlwcVluc3ZILTdvYlk2dGcifQ.r7YRQUvsbzPXQgZ-3Rg2mwgMdVPoPhlknuo7WE7U1qG61aPPYpKF5BVQE6WkeUOC4Hd2_Y8XqC3UVfW1nxsZ-t_CL38BpXzgyz3tYpN-WJlwoDruOQrC2QdoTctCjKDcHGtBdEao_pp-DY5SMItVcCWvP1jVI4pa_RIeBCQpFfjLkjmr2TfZG8bsnaVtfgojvR9cXcgpMo0qP84dkBE0lYp7x2lZqM3yt3Y4Q4sSYqd84-_L0m_OJbIFALe-jE7TSTV-Hl4SFBH98vQiUl9HfF4gAyw_6rlECspMc_lB7dMhl6y2bFtW7FIQmjqa2MPPEhfUKtygz2daD0EmHNodOA' -H 'pragma: no-cache' -H 'user-agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36' -H 'content-type: application/json;charset=UTF-8' -H 'accept: application/json, text/plain, *\/*' -H 'cache-control: no-cache' -H 'authority: test.letbob.com' -H 'referer: https://test.letbob.com/callback' -H 'dnt: 1' --data-binary '{"UserId":"google-oauth2|102665474454768402923"}' --compressed


GET USER:

curl 'https://test.letbob.com/v0/user.getUser' -H 'pragma: no-cache' -H 'dnt: 1' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.9' -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5rRkZRVVV6UlRRek5EZzJSamt6UkRSQk9EWkZNRGxETURKRE5EY3dNa1ExTlRSRlFVWXhPUSJ9.eyJodHRwczovL2FkbWluLmxldGJvYi5jb20iOmZhbHNlLCJnaXZlbl9uYW1lIjoiSEoiLCJmYW1pbHlfbmFtZSI6IkNyb3NzIiwibmlja25hbWUiOiJoY3Jvc3M3NSIsIm5hbWUiOiJISiBDcm9zcyIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLXl4YnphRTB0TzRrL0FBQUFBQUFBQUFJL0FBQUFBQUFBQmpZL3ZwR2xNeWFNMGE0L3Bob3RvLmpwZyIsImxvY2FsZSI6ImVuIiwidXBkYXRlZF9hdCI6IjIwMTgtMTItMjNUMTg6NDI6MzQuMjk5WiIsImlzcyI6Imh0dHBzOi8vZGF5dHJhZGluZ2JvYi5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDI2NjU0NzQ0NTQ3Njg0MDI5MjMiLCJhdWQiOiJvZlM2SHcwSDBOSDNzU1BuazlHZktNVmRYUExSbXhJNCIsImlhdCI6MTU0NTU5MDU1NCwiZXhwIjoxNTQ1NjI2NTU0LCJhdF9oYXNoIjoiT1ZQNGpkYXduV3B3RmRPNUFSeFZ6USIsIm5vbmNlIjoiSjdjWGZGbGtWSkgxSjJMcUlwcVluc3ZILTdvYlk2dGcifQ.r7YRQUvsbzPXQgZ-3Rg2mwgMdVPoPhlknuo7WE7U1qG61aPPYpKF5BVQE6WkeUOC4Hd2_Y8XqC3UVfW1nxsZ-t_CL38BpXzgyz3tYpN-WJlwoDruOQrC2QdoTctCjKDcHGtBdEao_pp-DY5SMItVcCWvP1jVI4pa_RIeBCQpFfjLkjmr2TfZG8bsnaVtfgojvR9cXcgpMo0qP84dkBE0lYp7x2lZqM3yt3Y4Q4sSYqd84-_L0m_OJbIFALe-jE7TSTV-Hl4SFBH98vQiUl9HfF4gAyw_6rlECspMc_lB7dMhl6y2bFtW7FIQmjqa2MPPEhfUKtygz2daD0EmHNodOA' -H 'accept: application/json, text/plain, *\/*' -H 'cache-control: no-cache' -H 'authority: test.letbob.com' -H 'user-agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36' -H 'referer: https://test.letbob.com/' --compressed



VALIDATE SLACK ACTIVITY:

curl 'https://test.letbob.com/v0/user.validateSlackActivity' -H 'pragma: no-cache' -H 'dnt: 1' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.9' -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5rRkZRVVV6UlRRek5EZzJSamt6UkRSQk9EWkZNRGxETURKRE5EY3dNa1ExTlRSRlFVWXhPUSJ9.eyJodHRwczovL2FkbWluLmxldGJvYi5jb20iOmZhbHNlLCJnaXZlbl9uYW1lIjoiSEoiLCJmYW1pbHlfbmFtZSI6IkNyb3NzIiwibmlja25hbWUiOiJoY3Jvc3M3NSIsIm5hbWUiOiJISiBDcm9zcyIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLXl4YnphRTB0TzRrL0FBQUFBQUFBQUFJL0FBQUFBQUFBQmpZL3ZwR2xNeWFNMGE0L3Bob3RvLmpwZyIsImxvY2FsZSI6ImVuIiwidXBkYXRlZF9hdCI6IjIwMTgtMTItMjNUMTg6NDI6MzQuMjk5WiIsImlzcyI6Imh0dHBzOi8vZGF5dHJhZGluZ2JvYi5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDI2NjU0NzQ0NTQ3Njg0MDI5MjMiLCJhdWQiOiJvZlM2SHcwSDBOSDNzU1BuazlHZktNVmRYUExSbXhJNCIsImlhdCI6MTU0NTU5MDU1NCwiZXhwIjoxNTQ1NjI2NTU0LCJhdF9oYXNoIjoiT1ZQNGpkYXduV3B3RmRPNUFSeFZ6USIsIm5vbmNlIjoiSjdjWGZGbGtWSkgxSjJMcUlwcVluc3ZILTdvYlk2dGcifQ.r7YRQUvsbzPXQgZ-3Rg2mwgMdVPoPhlknuo7WE7U1qG61aPPYpKF5BVQE6WkeUOC4Hd2_Y8XqC3UVfW1nxsZ-t_CL38BpXzgyz3tYpN-WJlwoDruOQrC2QdoTctCjKDcHGtBdEao_pp-DY5SMItVcCWvP1jVI4pa_RIeBCQpFfjLkjmr2TfZG8bsnaVtfgojvR9cXcgpMo0qP84dkBE0lYp7x2lZqM3yt3Y4Q4sSYqd84-_L0m_OJbIFALe-jE7TSTV-Hl4SFBH98vQiUl9HfF4gAyw_6rlECspMc_lB7dMhl6y2bFtW7FIQmjqa2MPPEhfUKtygz2daD0EmHNodOA' -H 'accept: application/json, text/plain, *\/*' -H 'cache-control: no-cache' -H 'authority: test.letbob.com' -H 'user-agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36' -H 'referer: https://test.letbob.com/' --compressed



ANOTHER GET USER:

curl 'https://test.letbob.com/v0/user.getUser' -H 'pragma: no-cache' -H 'dnt: 1' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.9' -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5rRkZRVVV6UlRRek5EZzJSamt6UkRSQk9EWkZNRGxETURKRE5EY3dNa1ExTlRSRlFVWXhPUSJ9.eyJodHRwczovL2FkbWluLmxldGJvYi5jb20iOmZhbHNlLCJnaXZlbl9uYW1lIjoiSEoiLCJmYW1pbHlfbmFtZSI6IkNyb3NzIiwibmlja25hbWUiOiJoY3Jvc3M3NSIsIm5hbWUiOiJISiBDcm9zcyIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLXl4YnphRTB0TzRrL0FBQUFBQUFBQUFJL0FBQUFBQUFBQmpZL3ZwR2xNeWFNMGE0L3Bob3RvLmpwZyIsImxvY2FsZSI6ImVuIiwidXBkYXRlZF9hdCI6IjIwMTgtMTItMjNUMTg6NDI6MzQuMjk5WiIsImlzcyI6Imh0dHBzOi8vZGF5dHJhZGluZ2JvYi5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDI2NjU0NzQ0NTQ3Njg0MDI5MjMiLCJhdWQiOiJvZlM2SHcwSDBOSDNzU1BuazlHZktNVmRYUExSbXhJNCIsImlhdCI6MTU0NTU5MDU1NCwiZXhwIjoxNTQ1NjI2NTU0LCJhdF9oYXNoIjoiT1ZQNGpkYXduV3B3RmRPNUFSeFZ6USIsIm5vbmNlIjoiSjdjWGZGbGtWSkgxSjJMcUlwcVluc3ZILTdvYlk2dGcifQ.r7YRQUvsbzPXQgZ-3Rg2mwgMdVPoPhlknuo7WE7U1qG61aPPYpKF5BVQE6WkeUOC4Hd2_Y8XqC3UVfW1nxsZ-t_CL38BpXzgyz3tYpN-WJlwoDruOQrC2QdoTctCjKDcHGtBdEao_pp-DY5SMItVcCWvP1jVI4pa_RIeBCQpFfjLkjmr2TfZG8bsnaVtfgojvR9cXcgpMo0qP84dkBE0lYp7x2lZqM3yt3Y4Q4sSYqd84-_L0m_OJbIFALe-jE7TSTV-Hl4SFBH98vQiUl9HfF4gAyw_6rlECspMc_lB7dMhl6y2bFtW7FIQmjqa2MPPEhfUKtygz2daD0EmHNodOA' -H 'accept: application/json, text/plain, *\/*' -H 'cache-control: no-cache' -H 'authority: test.letbob.com' -H 'user-agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36' -H 'referer: https://test.letbob.com/' --compressed



PORTFOLIO:

curl 'https://test.letbob.com/v0/portfolio' -H 'pragma: no-cache' -H 'dnt: 1' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: en-US,en;q=0.9' -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5rRkZRVVV6UlRRek5EZzJSamt6UkRSQk9EWkZNRGxETURKRE5EY3dNa1ExTlRSRlFVWXhPUSJ9.eyJodHRwczovL2FkbWluLmxldGJvYi5jb20iOmZhbHNlLCJnaXZlbl9uYW1lIjoiSEoiLCJmYW1pbHlfbmFtZSI6IkNyb3NzIiwibmlja25hbWUiOiJoY3Jvc3M3NSIsIm5hbWUiOiJISiBDcm9zcyIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLXl4YnphRTB0TzRrL0FBQUFBQUFBQUFJL0FBQUFBQUFBQmpZL3ZwR2xNeWFNMGE0L3Bob3RvLmpwZyIsImxvY2FsZSI6ImVuIiwidXBkYXRlZF9hdCI6IjIwMTgtMTItMjNUMTg6NDI6MzQuMjk5WiIsImlzcyI6Imh0dHBzOi8vZGF5dHJhZGluZ2JvYi5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDI2NjU0NzQ0NTQ3Njg0MDI5MjMiLCJhdWQiOiJvZlM2SHcwSDBOSDNzU1BuazlHZktNVmRYUExSbXhJNCIsImlhdCI6MTU0NTU5MDU1NCwiZXhwIjoxNTQ1NjI2NTU0LCJhdF9oYXNoIjoiT1ZQNGpkYXduV3B3RmRPNUFSeFZ6USIsIm5vbmNlIjoiSjdjWGZGbGtWSkgxSjJMcUlwcVluc3ZILTdvYlk2dGcifQ.r7YRQUvsbzPXQgZ-3Rg2mwgMdVPoPhlknuo7WE7U1qG61aPPYpKF5BVQE6WkeUOC4Hd2_Y8XqC3UVfW1nxsZ-t_CL38BpXzgyz3tYpN-WJlwoDruOQrC2QdoTctCjKDcHGtBdEao_pp-DY5SMItVcCWvP1jVI4pa_RIeBCQpFfjLkjmr2TfZG8bsnaVtfgojvR9cXcgpMo0qP84dkBE0lYp7x2lZqM3yt3Y4Q4sSYqd84-_L0m_OJbIFALe-jE7TSTV-Hl4SFBH98vQiUl9HfF4gAyw_6rlECspMc_lB7dMhl6y2bFtW7FIQmjqa2MPPEhfUKtygz2daD0EmHNodOA' -H 'accept: application/json, text/plain, *\/*' -H 'cache-control: no-cache' -H 'authority: test.letbob.com' -H 'user-agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36' -H 'referer: https://test.letbob.com/' --compressed


*/


/*

    auth on all these seems to be:

    authorization: Bearer ${id token from auth0 request}

*/